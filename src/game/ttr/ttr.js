// Ticket to Ride NSW — pure engine, no I/O. Standard Ticket to Ride rules
// (claim routes with matching-color train cards, collect destination
// tickets, longest-continuous-route bonus) played on the stylized NSW map
// in geometry.js.

import { TRAIN_COLORS, ROUTES, DESTINATIONS, ROUTE_POINTS } from "./geometry.js";

const TRAINS_PER_PLAYER = 45;
const CARDS_PER_COLOR = 12;
const LOCOMOTIVES = 14;
const INITIAL_HAND_SIZE = 4;
const PLAYER_COLORS = ["#dc2626", "#2563eb", "#16a34a", "#eab308", "#7c3aed"];

const ROUTES_BY_ID = Object.fromEntries(ROUTES.map((r) => [r.id, r]));

function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildTrainDeck() {
  const deck = [];
  let id = 0;
  for (const color of TRAIN_COLORS) {
    for (let i = 0; i < CARDS_PER_COLOR; i++) deck.push({ id: id++, color });
  }
  for (let i = 0; i < LOCOMOTIVES; i++) deck.push({ id: id++, color: "locomotive" });
  return deck;
}

function drawFromDeck(game, count) {
  const drawn = [];
  for (let i = 0; i < count; i++) {
    if (game.deck.length === 0) {
      if (game.discard.length === 0) break;
      game.deck = shuffle(game.discard, Math.random);
      game.discard = [];
    }
    drawn.push(game.deck.pop());
  }
  return drawn;
}

// If the 5-card faceup row ever holds 3+ locomotives, the whole row is
// discarded and redealt (standard rule) — repeated until it's clean or the
// deck+discard run dry.
function refillFaceUp(game) {
  for (let guard = 0; guard < 20; guard++) {
    while (game.faceUp.length < 5) {
      const [card] = drawFromDeck(game, 1);
      if (!card) break;
      game.faceUp.push(card);
    }
    const locoCount = game.faceUp.filter((c) => c.color === "locomotive").length;
    if (locoCount < 3 || game.faceUp.length < 5) return;
    game.discard.push(...game.faceUp);
    game.faceUp = [];
  }
}

function advanceTurn(game) {
  const finishingPlayerId = game.players[game.currentPlayerIndex].id;
  if (game.finalRoundTriggerId && finishingPlayerId !== game.finalRoundTriggerId) {
    game.finalTurnsRemaining -= 1;
  }
  if (game.finalRoundTriggerId && game.finalTurnsRemaining <= 0) {
    finishGame(game);
    return;
  }
  game.currentPlayerIndex = (game.currentPlayerIndex + 1) % game.players.length;
  game.turnNumber += 1;
  game.trainDrawsThisTurn = 0;
}

function connected(game, playerId, fromId, toId) {
  const adj = {};
  for (const [routeId, owner] of Object.entries(game.claimedRoutes)) {
    if (owner !== playerId) continue;
    const r = ROUTES_BY_ID[routeId];
    (adj[r.a] ||= []).push(r.b);
    (adj[r.b] ||= []).push(r.a);
  }
  const seen = new Set([fromId]);
  const queue = [fromId];
  while (queue.length) {
    const cur = queue.shift();
    if (cur === toId) return true;
    for (const next of adj[cur] || []) {
      if (!seen.has(next)) {
        seen.add(next);
        queue.push(next);
      }
    }
  }
  return false;
}

function longestPathFor(game, playerId) {
  const edges = Object.entries(game.claimedRoutes)
    .filter(([, owner]) => owner === playerId)
    .map(([routeId]) => ROUTES_BY_ID[routeId]);
  if (edges.length === 0) return 0;

  const adj = {};
  edges.forEach((r, i) => {
    (adj[r.a] ||= []).push({ to: r.b, edgeIndex: i, length: r.length });
    (adj[r.b] ||= []).push({ to: r.a, edgeIndex: i, length: r.length });
  });

  let best = 0;
  function dfs(node, usedEdges, total) {
    best = Math.max(best, total);
    for (const edge of adj[node] || []) {
      if (usedEdges.has(edge.edgeIndex)) continue;
      usedEdges.add(edge.edgeIndex);
      dfs(edge.to, usedEdges, total + edge.length);
      usedEdges.delete(edge.edgeIndex);
    }
  }
  for (const station of Object.keys(adj)) dfs(station, new Set(), 0);
  return best;
}

function finishGame(game) {
  const scores = {};
  const details = {};
  for (const p of game.players) {
    let score = game.routePoints[p.id] || 0;
    const tickets = (game.destinationHands[p.id] || []).map((t) => {
      const complete = connected(game, p.id, t.a, t.b);
      score += complete ? t.points : -t.points;
      return { ...t, complete };
    });
    details[p.id] = { tickets, longestPath: longestPathFor(game, p.id) };
    scores[p.id] = score;
  }
  const maxPath = Math.max(0, ...Object.values(details).map((d) => d.longestPath));
  if (maxPath > 0) {
    for (const p of game.players) {
      if (details[p.id].longestPath === maxPath) {
        scores[p.id] += 10;
        details[p.id].longestPathBonus = true;
      }
    }
  }
  game.status = "finished";
  game.finalScores = scores;
  game.finalDetails = details;
  const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  game.log.push(`Game over! ${game.players.find((p) => p.id === winnerId).name} wins with ${scores[winnerId]} points`);
}

export function createGame({ players, rng = Math.random }) {
  if (players.length < 2 || players.length > 5) throw new Error("Ticket to Ride NSW needs 2-5 players");

  const deck = shuffle(buildTrainDeck(), rng);
  const hands = {};
  players.forEach((p) => {
    hands[p.id] = deck.splice(0, INITIAL_HAND_SIZE);
  });

  const destinationDeck = shuffle(DESTINATIONS, rng);
  const pendingDestinationChoice = {};
  const destinationHands = {};
  players.forEach((p) => {
    pendingDestinationChoice[p.id] = { offered: destinationDeck.splice(0, 3).map((d) => d.id), initial: true, minKeep: 2 };
    destinationHands[p.id] = [];
  });

  const trainsLeft = {};
  const routePoints = {};
  players.forEach((p) => {
    trainsLeft[p.id] = TRAINS_PER_PLAYER;
    routePoints[p.id] = 0;
  });

  const game = {
    gameId: "tickettoride",
    status: "playing",
    players: players.map((p, i) => ({ ...p, color: PLAYER_COLORS[i % PLAYER_COLORS.length] })),
    deck,
    discard: [],
    faceUp: [],
    hands,
    destinationDeck,
    destinationHands,
    pendingDestinationChoice,
    trainsLeft,
    routePoints,
    claimedRoutes: {},
    currentPlayerIndex: 0,
    turnNumber: 1,
    trainDrawsThisTurn: 0,
    finalRoundTriggerId: null,
    finalTurnsRemaining: null,
    finalScores: null,
    finalDetails: null,
    log: ["Game started — choose your starting destination tickets"],
  };
  refillFaceUp(game);
  return game;
}

export function affordableColors(hand, route) {
  const locoCount = hand.filter((c) => c.color === "locomotive").length;
  const colors = route.color === "gray" ? TRAIN_COLORS : [route.color];
  return colors.filter((color) => {
    const matching = hand.filter((c) => c.color === color).length;
    return matching + locoCount >= route.length;
  });
}

export function legalMoves(game, playerId) {
  if (!game || game.status !== "playing" || game.pendingDestinationChoice[playerId]) return [];
  const hand = game.hands[playerId] || [];
  return ROUTES.filter((r) => !game.claimedRoutes[r.id] && affordableColors(hand, r).length > 0).map((r) => r.id);
}

function requireCurrentPlayer(game, playerId) {
  if (game.players[game.currentPlayerIndex].id !== playerId) throw new Error("Not your turn");
}

export function applyAction(game, playerId, action) {
  if (game.status !== "playing") throw new Error("Game already finished");
  const player = game.players.find((p) => p.id === playerId);
  if (!player) throw new Error("Unknown player");

  if (action.type === "chooseDestinationTickets") {
    const pending = game.pendingDestinationChoice[playerId];
    if (!pending) throw new Error("No pending destination choice");
    const keepIds = action.keepIds || [];
    if (keepIds.length < pending.minKeep || keepIds.some((id) => !pending.offered.includes(id))) {
      throw new Error("Invalid ticket selection");
    }
    const kept = pending.offered.filter((id) => keepIds.includes(id));
    const dropped = pending.offered.filter((id) => !keepIds.includes(id));
    kept.forEach((id) => game.destinationHands[playerId].push(DESTINATIONS.find((d) => d.id === id)));
    game.destinationDeck.push(...dropped.map((id) => DESTINATIONS.find((d) => d.id === id)));
    delete game.pendingDestinationChoice[playerId];
    game.log.push(`${player.name} keeps ${kept.length} destination ticket${kept.length === 1 ? "" : "s"}`);
    if (!pending.initial) advanceTurn(game);
    return { game };
  }

  if (game.pendingDestinationChoice[playerId]) throw new Error("Resolve your destination tickets first");

  if (action.type === "drawDestinationTickets") {
    requireCurrentPlayer(game, playerId);
    if (game.destinationDeck.length === 0) throw new Error("No destination tickets left");
    const offered = game.destinationDeck.splice(0, 3).map((d) => d.id);
    game.pendingDestinationChoice[playerId] = { offered, initial: false, minKeep: 1 };
    game.log.push(`${player.name} draws 3 destination tickets`);
    return { game };
  }

  if (action.type === "drawTrainCard") {
    requireCurrentPlayer(game, playerId);
    let card;
    let isFaceUpLocomotive = false;
    if (action.source === "faceup") {
      card = game.faceUp[action.index];
      if (!card) throw new Error("No such faceup card");
      isFaceUpLocomotive = card.color === "locomotive";
      if (isFaceUpLocomotive && game.trainDrawsThisTurn > 0) {
        throw new Error("Can't take a locomotive as your second draw");
      }
      game.faceUp.splice(action.index, 1);
      refillFaceUp(game);
    } else {
      [card] = drawFromDeck(game, 1);
      if (!card) throw new Error("Deck is empty");
    }
    game.hands[playerId].push(card);
    game.trainDrawsThisTurn += 1;
    game.log.push(`${player.name} draws a train car`);
    if (isFaceUpLocomotive || game.trainDrawsThisTurn >= 2) advanceTurn(game);
    return { game };
  }

  if (action.type === "claimRoute") {
    requireCurrentPlayer(game, playerId);
    const route = ROUTES_BY_ID[action.routeId];
    if (!route) throw new Error("Unknown route");
    if (game.claimedRoutes[route.id]) throw new Error("Route already claimed");
    if (game.trainsLeft[playerId] < route.length) throw new Error("Not enough trains left");
    const colorOptions = route.color === "gray" ? TRAIN_COLORS : [route.color];
    if (!colorOptions.includes(action.colorUsed)) throw new Error("Invalid color for this route");

    const hand = game.hands[playerId];
    const matching = hand.filter((c) => c.color === action.colorUsed);
    const locomotives = hand.filter((c) => c.color === "locomotive");
    const useMatching = Math.min(matching.length, route.length);
    const useLoco = route.length - useMatching;
    if (useLoco > locomotives.length) throw new Error("Not enough matching cards");

    const spent = matching.slice(0, useMatching).concat(locomotives.slice(0, useLoco));
    const spentIds = new Set(spent.map((c) => c.id));
    game.hands[playerId] = hand.filter((c) => !spentIds.has(c.id));
    game.discard.push(...spent);

    game.claimedRoutes[route.id] = playerId;
    game.trainsLeft[playerId] -= route.length;
    game.routePoints[playerId] += ROUTE_POINTS[route.length] || 0;
    game.log.push(`${player.name} claims ${route.a}—${route.b} (${action.colorUsed})`);

    if (game.trainsLeft[playerId] <= 2 && !game.finalRoundTriggerId) {
      game.finalRoundTriggerId = playerId;
      game.finalTurnsRemaining = game.players.length - 1;
      game.log.push(`${player.name} is down to ${game.trainsLeft[playerId]} trains — final round begins`);
    }
    advanceTurn(game);
    return { game };
  }

  throw new Error("Unknown action: " + action.type);
}

export { PLAYER_COLORS, TRAINS_PER_PLAYER };
