// Catan engine — pure functions, no I/O. Full rules including bank +
// player trading and development cards, for 3-4 players on the standard
// 19-tile board (see geometry.js).
//
// Deliberate simplifications, disclosed for transparency:
//  - The bank is treated as unlimited (no running out of a resource type
//    from over-production/building) — real scarcity edge cases add a lot
//    of rules complexity for little gameplay payoff in a casual setting.
//  - Longest road doesn't account for an opponent's settlement/city
//    breaking your road chain partway through — it just finds the longest
//    connected path through your own roads.
//  - Player trading is a broadcast offer with first-accept-wins, not a
//    full counter-offer negotiation.
//  - Tile resource/number placement is fully random (no avoidance of
//    placing 6 and 8 adjacent to each other, which the physical game's
//    "variable setup" rules also don't require, so this matches that mode).
//  - Resource/dev-card *counts* are visible to everyone (like everyone's
//    Uno hand size is); only the *contents* are hidden per-player in the
//    UI, matching the pattern already used for Uno hands in this app.

import { BOARD } from "./geometry.js";

const RESOURCES = ["wood", "brick", "sheep", "wheat", "ore"];
const TILE_POOL = [
  ...Array(4).fill("wood"),
  ...Array(4).fill("sheep"),
  ...Array(4).fill("wheat"),
  ...Array(3).fill("brick"),
  ...Array(3).fill("ore"),
  "desert",
];
const NUMBER_POOL = [2, 3, 3, 4, 4, 5, 5, 6, 6, 8, 8, 9, 9, 10, 10, 11, 11, 12];

const COST = {
  road: { wood: 1, brick: 1 },
  settlement: { wood: 1, brick: 1, sheep: 1, wheat: 1 },
  city: { wheat: 2, ore: 3 },
  devCard: { sheep: 1, wheat: 1, ore: 1 },
};

const DEV_DECK_POOL = [
  ...Array(14).fill("knight"),
  ...Array(5).fill("victoryPoint"),
  ...Array(2).fill("roadBuilding"),
  ...Array(2).fill("yearOfPlenty"),
  ...Array(2).fill("monopoly"),
];

const PLAYER_COLORS = ["#e74c3c", "#3498db", "#f1c40f", "#2ecc71"];

function shuffle(arr, rng) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function emptyResources() {
  return { wood: 0, brick: 0, sheep: 0, wheat: 0, ore: 0 };
}

function canAfford(res, cost) {
  return Object.entries(cost).every(([k, v]) => (res[k] || 0) >= v);
}

function pay(res, cost) {
  for (const [k, v] of Object.entries(cost)) res[k] -= v;
}

function credit(res, resource, qty) {
  res[resource] = (res[resource] || 0) + qty;
}

// players: [{ id, name, isAI }]
export function createGame({ players, rng = Math.random }) {
  if (players.length < 3 || players.length > 4) {
    throw new Error("Catan needs 3-4 players");
  }

  const tilePool = shuffle(TILE_POOL, rng);
  const numberPool = shuffle(NUMBER_POOL, rng);
  const tileResource = {};
  const tileNumber = {};
  let numIdx = 0;
  let robberTileId = null;
  BOARD.tiles.forEach((t, i) => {
    const resource = tilePool[i];
    tileResource[t.id] = resource;
    if (resource === "desert") {
      tileNumber[t.id] = null;
      robberTileId = t.id;
    } else {
      tileNumber[t.id] = numberPool[numIdx++];
    }
  });

  const gamePlayers = players.map((p, i) => ({
    id: p.id,
    name: p.name,
    isAI: p.isAI,
    color: PLAYER_COLORS[i],
  }));

  const resources = {};
  const devCards = {};
  const knightsPlayed = {};
  for (const p of gamePlayers) {
    resources[p.id] = emptyResources();
    devCards[p.id] = [];
    knightsPlayed[p.id] = 0;
  }

  return {
    gameId: "catan",
    players: gamePlayers,
    tileResource,
    tileNumber,
    robberTileId,
    buildings: {}, // vertexId -> { playerId, type: 'settlement' | 'city' }
    roads: {}, // edgeId -> playerId
    resources,
    devCards, // playerId -> [{ type, boughtOnTurn, played }]
    devDeck: shuffle(DEV_DECK_POOL, rng),
    knightsPlayed,
    longestRoadPlayerId: null,
    largestArmyPlayerId: null,
    turnNumber: 0,
    currentPlayerIndex: 0,
    phase: "setup1", // setup1 | setup2 | roll | actions | finished
    setupRoundIndex: 0,
    lastDice: null,
    pendingRobber: false,
    mustDiscard: {}, // playerId -> cardsToDiscard count
    freeRoads: 0,
    devCardPlayedThisTurn: false,
    devCardBoughtThisTurn: null,
    pendingTrade: null,
    status: "playing",
    winnerId: null,
    log: ["Game started — place your first settlement and road"],
  };
}

function vertexNeighbors(vertexId) {
  return BOARD.vertexNeighbors[vertexId];
}

function edgeById(edgeId) {
  return BOARD.edges[edgeId];
}

function playerRoadEdges(game, playerId) {
  return BOARD.edges.filter((e) => game.roads[e.id] === playerId);
}

function edgeTouchesPlayer(game, edge, playerId) {
  const b1 = game.buildings[edge.v1];
  const b2 = game.buildings[edge.v2];
  if ((b1 && b1.playerId === playerId) || (b2 && b2.playerId === playerId)) return true;
  return playerRoadEdges(game, playerId).some((e) => e.v1 === edge.v1 || e.v2 === edge.v1 || e.v1 === edge.v2 || e.v2 === edge.v2);
}

function settlementSpotValid(game, vertexId, requireRoadConnection, playerId) {
  if (game.buildings[vertexId]) return false;
  if (vertexNeighbors(vertexId).some((n) => game.buildings[n])) return false;
  if (!requireRoadConnection) return true;
  const v = BOARD.vertices[vertexId];
  return v.edgeIds.some((eid) => game.roads[eid] === playerId);
}

function playerVictoryPoints(game, playerId) {
  let vp = 0;
  for (const b of Object.values(game.buildings)) {
    if (b.playerId !== playerId) continue;
    vp += b.type === "city" ? 2 : 1;
  }
  if (game.longestRoadPlayerId === playerId) vp += 2;
  if (game.largestArmyPlayerId === playerId) vp += 2;
  vp += game.devCards[playerId].filter((c) => c.type === "victoryPoint").length;
  return vp;
}

function longestRoadForPlayer(game, playerId) {
  const edges = playerRoadEdges(game, playerId);
  if (edges.length === 0) return 0;
  const adj = {};
  for (const e of edges) {
    (adj[e.v1] ||= []).push({ edgeId: e.id, to: e.v2 });
    (adj[e.v2] ||= []).push({ edgeId: e.id, to: e.v1 });
  }
  let best = 0;
  function dfs(vertex, used, length) {
    best = Math.max(best, length);
    for (const { edgeId, to } of adj[vertex] || []) {
      if (used.has(edgeId)) continue;
      used.add(edgeId);
      dfs(to, used, length + 1);
      used.delete(edgeId);
    }
  }
  for (const v of Object.keys(adj)) dfs(Number(v), new Set(), 0);
  return best;
}

function recalcLongestRoad(game) {
  let bestPlayer = game.longestRoadPlayerId;
  let bestLen = bestPlayer ? longestRoadForPlayer(game, bestPlayer) : 0;
  for (const p of game.players) {
    const len = longestRoadForPlayer(game, p.id);
    if (len >= 5 && len > bestLen) {
      bestLen = len;
      bestPlayer = p.id;
    }
  }
  game.longestRoadPlayerId = bestLen >= 5 ? bestPlayer : null;
}

function recalcLargestArmy(game) {
  let bestPlayer = game.largestArmyPlayerId;
  let bestCount = bestPlayer ? game.knightsPlayed[bestPlayer] : 0;
  for (const p of game.players) {
    const count = game.knightsPlayed[p.id];
    if (count >= 3 && count > bestCount) {
      bestCount = count;
      bestPlayer = p.id;
    }
  }
  game.largestArmyPlayerId = bestCount >= 3 ? bestPlayer : null;
}

function checkWin(game) {
  const winner = game.players.find((p) => playerVictoryPoints(game, p.id) >= 10);
  if (winner) {
    game.status = "finished";
    game.winnerId = winner.id;
    game.log.push(`${winner.name} wins with ${playerVictoryPoints(game, winner.id)} victory points!`);
  }
}

function produceForRoll(game, roll) {
  for (const tile of BOARD.tiles) {
    if (game.tileNumber[tile.id] !== roll) continue;
    if (tile.id === game.robberTileId) continue;
    const resource = game.tileResource[tile.id];
    const vertices = BOARD.vertices.filter((v) => v.tileIds.includes(tile.id));
    for (const v of vertices) {
      const b = game.buildings[v.id];
      if (!b) continue;
      const qty = b.type === "city" ? 2 : 1;
      credit(game.resources[b.playerId], resource, qty);
    }
  }
}

function nextPlayerIndex(game) {
  return (game.currentPlayerIndex + 1) % game.players.length;
}

function advanceSetup(game) {
  const n = game.players.length;
  if (game.phase === "setup1") {
    if (game.currentPlayerIndex === n - 1) {
      game.phase = "setup2";
    } else {
      game.currentPlayerIndex += 1;
    }
  } else if (game.phase === "setup2") {
    if (game.currentPlayerIndex === 0) {
      game.phase = "roll";
      game.turnNumber = 1;
      game.log.push(`${game.players[0].name}'s turn — roll the dice`);
    } else {
      game.currentPlayerIndex -= 1;
    }
  }
}

function portsForPlayer(game, playerId) {
  const owned = new Set();
  for (const [vertexId, b] of Object.entries(game.buildings)) {
    if (b.playerId !== playerId) continue;
    for (const port of BOARD.ports) {
      if (port.v1 === Number(vertexId) || port.v2 === Number(vertexId)) owned.add(port.type);
    }
  }
  return owned;
}

function bestRateFor(game, playerId, resource) {
  const ports = portsForPlayer(game, playerId);
  if (ports.has(resource)) return 2;
  if (ports.has("3:1")) return 3;
  return 4;
}

export function applyAction(game, playerId, action) {
  if (game.status !== "playing") throw new Error("Game already finished");
  const player = game.players.find((p) => p.id === playerId);
  if (!player) throw new Error("Not a player in this game");
  const isCurrent = game.players[game.currentPlayerIndex].id === playerId;

  switch (action.type) {
    case "discard": {
      const need = game.mustDiscard[playerId];
      if (!need) throw new Error("Nothing to discard");
      const total = Object.values(action.resources || {}).reduce((a, b) => a + b, 0);
      if (total !== need) throw new Error(`Must discard exactly ${need} cards`);
      const res = game.resources[playerId];
      if (!canAfford(res, action.resources)) throw new Error("Don't have those cards");
      pay(res, action.resources);
      delete game.mustDiscard[playerId];
      game.log.push(`${player.name} discards ${need} cards`);
      return { game };
    }

    case "buildSettlement": {
      if (!isCurrent) throw new Error("Not your turn");
      const inSetup = game.phase === "setup1" || game.phase === "setup2";
      if (!inSetup && game.phase !== "actions") throw new Error("Can't build now");
      if (!settlementSpotValid(game, action.vertexId, !inSetup, playerId)) throw new Error("Invalid settlement spot");
      if (!inSetup) {
        if (!canAfford(game.resources[playerId], COST.settlement)) throw new Error("Can't afford a settlement");
        pay(game.resources[playerId], COST.settlement);
      }
      game.buildings[action.vertexId] = { playerId, type: "settlement" };
      game.log.push(`${player.name} builds a settlement`);
      if (game.phase === "setup2") {
        const v = BOARD.vertices[action.vertexId];
        for (const tileId of v.tileIds) {
          if (tileId === game.robberTileId) continue;
          const resource = game.tileResource[tileId];
          if (resource !== "desert") credit(game.resources[playerId], resource, 1);
        }
      }
      checkWin(game);
      return { game };
    }

    case "buildCity": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "actions") throw new Error("Can't build now");
      const b = game.buildings[action.vertexId];
      if (!b || b.playerId !== playerId || b.type !== "settlement") throw new Error("You don't have a settlement there");
      if (!canAfford(game.resources[playerId], COST.city)) throw new Error("Can't afford a city");
      pay(game.resources[playerId], COST.city);
      b.type = "city";
      game.log.push(`${player.name} upgrades to a city`);
      checkWin(game);
      return { game };
    }

    case "buildRoad": {
      if (!isCurrent) throw new Error("Not your turn");
      const inSetup = game.phase === "setup1" || game.phase === "setup2";
      if (!inSetup && game.phase !== "actions") throw new Error("Can't build now");
      const edge = edgeById(action.edgeId);
      if (!edge) throw new Error("No such edge");
      if (game.roads[edge.id]) throw new Error("Already a road there");
      if (!edgeTouchesPlayer(game, edge, playerId)) throw new Error("Road must connect to your network");
      if (game.freeRoads > 0) {
        game.freeRoads -= 1;
      } else if (inSetup) {
        // free during setup, validated against the settlement just placed by
        // the client (engine trusts it touches the new settlement — the
        // touches-player check above already covers connectivity)
      } else {
        if (!canAfford(game.resources[playerId], COST.road)) throw new Error("Can't afford a road");
        pay(game.resources[playerId], COST.road);
      }
      game.roads[edge.id] = playerId;
      game.log.push(`${player.name} builds a road`);
      recalcLongestRoad(game);
      checkWin(game);
      if (inSetup) advanceSetup(game);
      return { game };
    }

    case "rollDice": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "roll") throw new Error("Already rolled");
      const d1 = 1 + Math.floor(Math.random() * 6);
      const d2 = 1 + Math.floor(Math.random() * 6);
      const roll = d1 + d2;
      game.lastDice = [d1, d2];
      game.log.push(`${player.name} rolls ${d1} + ${d2} = ${roll}`);
      if (roll === 7) {
        for (const p of game.players) {
          const total = Object.values(game.resources[p.id]).reduce((a, b) => a + b, 0);
          if (total > 7) game.mustDiscard[p.id] = Math.floor(total / 2);
        }
        game.pendingRobber = true;
        game.phase = "actions";
        game.log.push("Rolled a 7 — move the robber");
      } else {
        produceForRoll(game, roll);
        game.phase = "actions";
      }
      return { game };
    }

    case "moveRobber": {
      if (!isCurrent) throw new Error("Not your turn");
      if (!game.pendingRobber) throw new Error("No robber move pending");
      if (Object.keys(game.mustDiscard).length > 0) throw new Error("Waiting on discards first");
      if (action.tileId === game.robberTileId) throw new Error("Robber must move to a new tile");
      game.robberTileId = action.tileId;
      game.pendingRobber = false;
      if (action.targetPlayerId) {
        const targetRes = game.resources[action.targetPlayerId];
        const pool = RESOURCES.filter((r) => targetRes[r] > 0);
        if (pool.length > 0) {
          const stolen = pool[Math.floor(Math.random() * pool.length)];
          targetRes[stolen] -= 1;
          credit(game.resources[playerId], stolen, 1);
        }
      }
      game.log.push(`${player.name} moves the robber`);
      return { game };
    }

    case "buyDevCard": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "actions") throw new Error("Can't buy now");
      if (game.devDeck.length === 0) throw new Error("Dev card deck is empty");
      if (!canAfford(game.resources[playerId], COST.devCard)) throw new Error("Can't afford a dev card");
      pay(game.resources[playerId], COST.devCard);
      const type = game.devDeck.pop();
      game.devCards[playerId].push({ type, boughtOnTurn: game.turnNumber, played: false });
      game.log.push(`${player.name} buys a development card`);
      checkWin(game);
      return { game };
    }

    case "playDevCard": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "actions") throw new Error("Can't play now");
      if (game.devCardPlayedThisTurn) throw new Error("Already played a dev card this turn");
      const card = game.devCards[playerId][action.cardIndex];
      if (!card || card.played) throw new Error("No such card");
      if (card.type === "victoryPoint") throw new Error("Victory point cards play themselves");
      if (card.boughtOnTurn === game.turnNumber) throw new Error("Can't play a card bought this turn");

      card.played = true;
      game.devCardPlayedThisTurn = true;

      if (card.type === "knight") {
        game.knightsPlayed[playerId] += 1;
        recalcLargestArmy(game);
        game.pendingRobber = true;
        game.log.push(`${player.name} plays a Knight`);
        if (action.tileId !== undefined) {
          if (action.tileId === game.robberTileId) throw new Error("Robber must move to a new tile");
          game.robberTileId = action.tileId;
          game.pendingRobber = false;
          if (action.targetPlayerId) {
            const targetRes = game.resources[action.targetPlayerId];
            const pool = RESOURCES.filter((r) => targetRes[r] > 0);
            if (pool.length > 0) {
              const stolen = pool[Math.floor(Math.random() * pool.length)];
              targetRes[stolen] -= 1;
              credit(game.resources[playerId], stolen, 1);
            }
          }
        }
      } else if (card.type === "roadBuilding") {
        game.freeRoads += 2;
        game.log.push(`${player.name} plays Road Building — 2 free roads`);
      } else if (card.type === "yearOfPlenty") {
        credit(game.resources[playerId], action.resource1, 1);
        credit(game.resources[playerId], action.resource2, 1);
        game.log.push(`${player.name} plays Year of Plenty`);
      } else if (card.type === "monopoly") {
        let total = 0;
        for (const p of game.players) {
          if (p.id === playerId) continue;
          const qty = game.resources[p.id][action.resource] || 0;
          total += qty;
          game.resources[p.id][action.resource] = 0;
        }
        credit(game.resources[playerId], action.resource, total);
        game.log.push(`${player.name} plays Monopoly on ${action.resource} (+${total})`);
      }
      checkWin(game);
      return { game };
    }

    case "bankTrade": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "actions") throw new Error("Can't trade now");
      const rate = bestRateFor(game, playerId, action.give);
      if (action.giveQty !== rate) throw new Error(`Rate for ${action.give} is ${rate}:1`);
      const res = game.resources[playerId];
      if ((res[action.give] || 0) < rate) throw new Error("Not enough resources");
      res[action.give] -= rate;
      credit(res, action.get, 1);
      game.log.push(`${player.name} trades ${rate} ${action.give} for 1 ${action.get}`);
      return { game };
    }

    case "proposeTrade": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "actions") throw new Error("Can't trade now");
      if (!canAfford(game.resources[playerId], action.give)) throw new Error("You don't have those resources");
      game.pendingTrade = { fromPlayerId: playerId, give: action.give, want: action.want, responses: {} };
      game.log.push(`${player.name} offers a trade`);
      return { game };
    }

    case "respondTrade": {
      if (!game.pendingTrade) throw new Error("No trade pending");
      if (playerId === game.pendingTrade.fromPlayerId) throw new Error("Can't respond to your own offer");
      if (!action.accept) {
        game.pendingTrade.responses[playerId] = false;
        return { game };
      }
      const { fromPlayerId, give, want } = game.pendingTrade;
      if (!canAfford(game.resources[playerId], want)) throw new Error("You don't have what they want");
      if (!canAfford(game.resources[fromPlayerId], give)) throw new Error("Offer is no longer valid");
      pay(game.resources[fromPlayerId], give);
      pay(game.resources[playerId], want);
      for (const [r, q] of Object.entries(give)) credit(game.resources[playerId], r, q);
      for (const [r, q] of Object.entries(want)) credit(game.resources[fromPlayerId], r, q);
      const other = game.players.find((p) => p.id === playerId);
      const from = game.players.find((p) => p.id === fromPlayerId);
      game.log.push(`${other.name} accepts ${from.name}'s trade`);
      game.pendingTrade = null;
      return { game };
    }

    case "cancelTrade": {
      if (!game.pendingTrade || game.pendingTrade.fromPlayerId !== playerId) throw new Error("No trade to cancel");
      game.pendingTrade = null;
      return { game };
    }

    case "endTurn": {
      if (!isCurrent) throw new Error("Not your turn");
      if (game.phase !== "actions") throw new Error("Roll first");
      if (Object.keys(game.mustDiscard).length > 0) throw new Error("Waiting on discards");
      if (game.pendingRobber) throw new Error("Move the robber first");
      game.pendingTrade = null;
      game.devCardPlayedThisTurn = false;
      game.freeRoads = 0;
      game.currentPlayerIndex = nextPlayerIndex(game);
      game.turnNumber += 1;
      game.phase = "roll";
      game.log.push(`${game.players[game.currentPlayerIndex].name}'s turn — roll the dice`);
      return { game };
    }

    default:
      throw new Error("Unknown action");
  }
}

export function legalMoves(game, playerId) {
  // Used only as a lightweight "is it meaningfully my turn" signal by the
  // shared room layer; the board UI drives its own detailed legality.
  if (game.status !== "playing") return [];
  if (game.mustDiscard[playerId]) return ["discard"];
  if (game.players[game.currentPlayerIndex]?.id !== playerId) return [];
  return ["act"];
}

export { RESOURCES, COST, playerVictoryPoints, portsForPlayer, bestRateFor };
