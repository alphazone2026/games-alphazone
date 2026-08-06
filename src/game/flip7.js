// Flip 7 engine — pure functions, no I/O. Reconstructed from the published
// rules summary (push-your-luck flip-and-hold, 3+ players, race to 200).
//
// Simplifications vs. the physical game, called out for transparency:
//  - Freeze always applies to the player who drew it (no targeting another
//    player) — keeps the flow single-actor instead of needing a target-pick UI.
//  - When a Flip 7 bonus ends the round, every player still in the round
//    (not busted, hasn't stayed yet) banks their current hand too, instead of
//    scoring zero. Only busted players score zero for the round.

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 8;
const TARGET_SCORE = 200;

export function buildDeck() {
  const deck = [];
  let id = 0;
  // Number cards: value N appears N times, except 0 which appears once.
  for (let n = 0; n <= 12; n++) {
    const count = n === 0 ? 1 : n;
    for (let i = 0; i < count; i++) {
      deck.push({ id: id++, kind: "number", value: n });
    }
  }
  for (const value of [2, 4, 6, 8, 10]) {
    deck.push({ id: id++, kind: "modifier", type: "add", value });
  }
  deck.push({ id: id++, kind: "modifier", type: "x2", value: 2 });
  for (let i = 0; i < 3; i++) {
    deck.push({ id: id++, kind: "action", type: "freeze" });
    deck.push({ id: id++, kind: "action", type: "flipThree" });
    deck.push({ id: id++, kind: "action", type: "secondChance" });
  }
  return deck;
}

function shuffle(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startRound(game, rng) {
  game.deck = shuffle(buildDeck(), rng);
  game.discard = [];
  game.hands = {};
  game.busted = {};
  game.stayed = {};
  game.secondChance = {};
  for (const p of game.players) {
    game.hands[p.id] = [];
    game.busted[p.id] = false;
    game.stayed[p.id] = false;
    game.secondChance[p.id] = false;
  }
  game.roundOver = false;
  game.currentPlayerIndex = game.roundStarterIndex;
}

// players: [{ id, name, isAI }]
export function createGame({ players, rng = Math.random }) {
  if (players.length < MIN_PLAYERS || players.length > MAX_PLAYERS) {
    throw new Error(`Flip 7 needs ${MIN_PLAYERS}-${MAX_PLAYERS} players`);
  }
  const game = {
    gameId: "flip7",
    players,
    scores: Object.fromEntries(players.map((p) => [p.id, 0])),
    roundStarterIndex: 0,
    round: 1,
    status: "playing",
    winnerId: null,
    log: ["Game started"],
  };
  startRound(game, rng);
  game.log.push(`Round ${game.round} begins`);
  return game;
}

function uniqueNumberValues(hand) {
  return new Set(hand.filter((c) => c.kind === "number").map((c) => c.value));
}

function handScore(hand) {
  let sum = 0;
  let flatBonus = 0;
  let multiplier = 1;
  for (const c of hand) {
    if (c.kind === "number") sum += c.value;
    else if (c.kind === "modifier" && c.type === "add") flatBonus += c.value;
    else if (c.kind === "modifier" && c.type === "x2") multiplier = 2;
  }
  return sum * multiplier + flatBonus;
}

function activePlayers(game) {
  return game.players.filter((p) => !game.busted[p.id] && !game.stayed[p.id]);
}

function nextActiveIndex(game, from) {
  const n = game.players.length;
  for (let step = 1; step <= n; step++) {
    const idx = (from + step) % n;
    const p = game.players[idx];
    if (!game.busted[p.id] && !game.stayed[p.id]) return idx;
  }
  return -1;
}

function drawOne(game) {
  if (game.deck.length === 0) {
    game.deck = shuffle(game.discard, Math.random);
    game.discard = [];
  }
  return game.deck.shift();
}

// Returns true if the round ended (Flip 7 bonus or everyone done).
function applyDraw(game, playerId) {
  const card = drawOne(game);
  if (!card) return finishRoundCheck(game);
  const hand = game.hands[playerId];
  const player = game.players.find((p) => p.id === playerId);

  if (card.kind === "number") {
    const already = hand.some((c) => c.kind === "number" && c.value === card.value);
    if (already) {
      if (game.secondChance[playerId]) {
        game.secondChance[playerId] = false;
        const idx = hand.findIndex((c) => c.kind === "action" && c.type === "secondChance");
        if (idx !== -1) game.discard.push(...hand.splice(idx, 1));
        game.discard.push(card);
        game.log.push(`${player.name} flips a duplicate ${card.value} but burns Second Chance to survive`);
      } else {
        game.busted[playerId] = true;
        game.discard.push(card, ...hand.splice(0));
        game.log.push(`${player.name} busts on a duplicate ${card.value}!`);
        return finishRoundCheck(game);
      }
    } else {
      hand.push(card);
      game.log.push(`${player.name} flips ${card.value}`);
      if (uniqueNumberValues(hand).size >= 7) {
        game.log.push(`${player.name} hits FLIP 7! Round over.`);
        return endRound(game, playerId);
      }
    }
  } else if (card.kind === "modifier") {
    hand.push(card);
    game.log.push(`${player.name} flips ${card.type === "x2" ? "x2" : `+${card.value}`}`);
  } else if (card.kind === "action") {
    if (card.type === "secondChance") {
      if (game.secondChance[playerId]) {
        game.discard.push(card);
        game.log.push(`${player.name} flips a second Second Chance (discarded, already holding one)`);
      } else {
        hand.push(card);
        game.secondChance[playerId] = true;
        game.log.push(`${player.name} flips Second Chance`);
      }
    } else if (card.type === "freeze") {
      game.discard.push(card);
      game.stayed[playerId] = true;
      game.log.push(`${player.name} flips Freeze — forced to stay with ${handScore(hand)}`);
      return finishRoundCheck(game);
    } else if (card.type === "flipThree") {
      game.discard.push(card);
      game.log.push(`${player.name} flips Flip Three — drawing 3 more`);
      for (let i = 0; i < 3; i++) {
        if (game.busted[playerId] || game.roundOver) break;
        const ended = applyDraw(game, playerId);
        if (ended) return true;
      }
    }
  }
  return finishRoundCheck(game);
}

function finishRoundCheck(game) {
  if (activePlayers(game).length === 0) {
    return endRound(game, null);
  }
  return false;
}

function endRound(game, flip7PlayerId) {
  for (const p of game.players) {
    if (game.busted[p.id]) continue;
    const hand = game.hands[p.id];
    if (p.id === flip7PlayerId) {
      game.scores[p.id] += handScore(hand) + 15;
    } else if (game.stayed[p.id] || flip7PlayerId) {
      // Everyone still in (not busted) banks their hand when the round ends,
      // whether by their own stay or because someone else hit Flip 7.
      game.scores[p.id] += handScore(hand);
    }
  }
  game.roundOver = true;

  const winner = game.players.find((p) => game.scores[p.id] >= TARGET_SCORE);
  if (winner) {
    // Highest score wins outright once someone crosses the target.
    const best = game.players.reduce((a, b) => (game.scores[b.id] > game.scores[a.id] ? b : a));
    game.status = "finished";
    game.winnerId = best.id;
    game.log.push(`${best.name} wins with ${game.scores[best.id]} points!`);
  } else {
    game.log.push(`Round ${game.round} complete — scores: ` + game.players.map((p) => `${p.name} ${game.scores[p.id]}`).join(", "));
  }
  return true;
}

export function legalActions(game, playerId) {
  if (game.status !== "playing") return [];
  if (game.roundOver) return [];
  if (game.players[game.currentPlayerIndex]?.id !== playerId) return [];
  if (game.busted[playerId] || game.stayed[playerId]) return [];
  return ["hit", "stay"];
}

// action: { type: 'hit' } | { type: 'stay' } | { type: 'nextRound' }
export function applyAction(game, playerId, action) {
  if (action.type === "nextRound") {
    if (!game.roundOver || game.status !== "playing") throw new Error("Round not over");
    game.round += 1;
    game.roundStarterIndex = (game.roundStarterIndex + 1) % game.players.length;
    startRound(game, Math.random);
    game.log.push(`Round ${game.round} begins`);
    return { game };
  }

  if (game.status !== "playing") throw new Error("Game already finished");
  if (game.roundOver) throw new Error("Round is over — start the next round");
  const current = game.players[game.currentPlayerIndex];
  if (current.id !== playerId) throw new Error("Not this player's turn");
  if (game.busted[playerId] || game.stayed[playerId]) throw new Error("Already out this round");

  if (action.type === "stay") {
    game.stayed[playerId] = true;
    game.log.push(`${current.name} stays with ${handScore(game.hands[playerId])}`);
    if (finishRoundCheck(game)) return { game };
  } else if (action.type === "hit") {
    if (applyDraw(game, playerId)) return { game };
  } else {
    throw new Error("Unknown action");
  }

  const next = nextActiveIndex(game, game.currentPlayerIndex);
  if (next === -1) {
    finishRoundCheck(game);
  } else {
    game.currentPlayerIndex = next;
  }
  return { game };
}

export function describeCard(card) {
  if (card.kind === "number") return String(card.value);
  if (card.kind === "modifier") return card.type === "x2" ? "×2" : `+${card.value}`;
  if (card.type === "freeze") return "Freeze";
  if (card.type === "flipThree") return "Flip 3";
  if (card.type === "secondChance") return "2nd Chance";
  return "?";
}

export { handScore, uniqueNumberValues, MIN_PLAYERS, MAX_PLAYERS, TARGET_SCORE };
