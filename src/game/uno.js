// Core UNO engine — pure functions, no I/O. Works for classic UNO (2-4 players)
// and UNO Teams (exactly 4 players, 2 teams of 2, seated alternately).

const COLORS = ["red", "yellow", "green", "blue"];
const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export function buildDeck() {
  const deck = [];
  let id = 0;
  for (const color of COLORS) {
    deck.push({ id: id++, color, type: "number", value: 0 });
    for (let n = 1; n <= 9; n++) {
      deck.push({ id: id++, color, type: "number", value: n });
      deck.push({ id: id++, color, type: "number", value: n });
    }
    for (const type of ["skip", "reverse", "draw2"]) {
      deck.push({ id: id++, color, type });
      deck.push({ id: id++, color, type });
    }
  }
  for (let i = 0; i < 4; i++) {
    deck.push({ id: id++, color: "wild", type: "wild" });
    deck.push({ id: id++, color: "wild", type: "wild4" });
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

export function cardMatches(card, top, activeColor) {
  if (card.type === "wild" || card.type === "wild4") return true;
  const color = activeColor || top.color;
  if (card.color === color) return true;
  if (card.type === "number" && top.type === "number") return card.value === top.value;
  if (card.type !== "number" && card.type === top.type) return true;
  return false;
}

// players: [{ id, name, isAI, team }]  (team only used for "teams" mode, 0 or 1)
export function createGame({ players, mode = "classic", rng = Math.random }) {
  if (mode === "teams" && players.length !== 4) {
    throw new Error("UNO Teams requires exactly 4 players");
  }
  if (players.length < 2 || players.length > 4) {
    throw new Error("UNO supports 2-4 players");
  }

  let deck = shuffle(buildDeck(), rng);
  const hands = {};
  for (const p of players) {
    hands[p.id] = deck.splice(0, 7);
  }

  let discard = [];
  let topCard;
  do {
    if (deck.length === 0) {
      deck = shuffle(discard.slice(0, -1), rng);
      discard = discard.slice(-1);
    }
    topCard = deck.shift();
    discard.push(topCard);
  } while (topCard.type === "wild4");

  const activeColor = topCard.color === "wild" ? null : topCard.color;

  const game = {
    mode,
    players: players.map((p, i) => ({ ...p, team: mode === "teams" ? i % 2 : undefined })),
    hands,
    deck,
    discard,
    activeColor: activeColor || COLORS[Math.floor(rng() * 4)],
    currentPlayerIndex: 0,
    direction: 1,
    pendingDraw: 0,
    status: "playing", // playing | finished
    winnerId: null,
    winningTeam: null,
    log: ["Game started"],
  };

  applyCardEffectAtStart(game, topCard, rng);
  return game;
}

function applyCardEffectAtStart(game, card, rng) {
  if (card.type === "skip") {
    advanceTurn(game);
  } else if (card.type === "reverse") {
    game.direction *= -1;
    if (game.players.length === 2) advanceTurn(game);
  } else if (card.type === "draw2") {
    game.pendingDraw = 2;
  }
}

function nextIndex(game, from = game.currentPlayerIndex) {
  const n = game.players.length;
  return (from + game.direction + n) % n;
}

function advanceTurn(game) {
  game.currentPlayerIndex = nextIndex(game);
}

function drawCards(game, playerId, count) {
  const drawn = [];
  for (let i = 0; i < count; i++) {
    if (game.deck.length === 0) {
      const top = game.discard[game.discard.length - 1];
      const rest = game.discard.slice(0, -1);
      if (rest.length === 0) break;
      game.deck = shuffle(rest);
      game.discard = [top];
    }
    const c = game.deck.shift();
    if (c) drawn.push(c);
  }
  game.hands[playerId].push(...drawn);
  return drawn;
}

export function legalMoves(game, playerId) {
  if (game.status !== "playing") return [];
  if (game.players[game.currentPlayerIndex].id !== playerId) return [];
  const top = game.discard[game.discard.length - 1];
  const hand = game.hands[playerId];
  if (game.pendingDraw > 0) {
    return hand.filter((c) => {
      if (c.type === "draw2") return true;
      return false;
    });
  }
  return hand.filter((c) => cardMatches(c, top, game.activeColor));
}

// action: { type: 'play', cardId, chosenColor? } | { type: 'draw' }
export function applyAction(game, playerId, action, rng = Math.random) {
  if (game.status !== "playing") throw new Error("Game already finished");
  const player = game.players[game.currentPlayerIndex];
  if (player.id !== playerId) throw new Error("Not this player's turn");
  const hand = game.hands[playerId];

  if (action.type === "draw") {
    if (game.pendingDraw > 0) {
      drawCards(game, playerId, game.pendingDraw);
      game.log.push(`${player.name} draws ${game.pendingDraw} cards`);
      game.pendingDraw = 0;
      advanceTurn(game);
    } else {
      const [drawn] = drawCards(game, playerId, 1);
      game.log.push(`${player.name} draws a card`);
      if (drawn && cardMatches(drawn, game.discard[game.discard.length - 1], game.activeColor)) {
        return { game, mustPlayDrawn: drawn };
      }
      advanceTurn(game);
    }
    return { game };
  }

  if (action.type === "play") {
    const idx = hand.findIndex((c) => c.id === action.cardId);
    if (idx === -1) throw new Error("Card not in hand");
    const card = hand[idx];
    const top = game.discard[game.discard.length - 1];

    if (game.pendingDraw > 0 && card.type !== "draw2") {
      throw new Error("Must play draw2 or draw pending cards");
    }
    if (!cardMatches(card, top, game.activeColor)) throw new Error("Illegal move");
    if ((card.type === "wild" || card.type === "wild4") && !action.chosenColor) {
      throw new Error("Must choose a color for wild card");
    }

    hand.splice(idx, 1);
    game.discard.push(card);
    game.log.push(`${player.name} plays ${describeCard(card)}`);

    if (card.color !== "wild") {
      game.activeColor = card.color;
    } else {
      game.activeColor = action.chosenColor;
    }

    if (hand.length === 0) {
      finishRound(game, player);
      return { game };
    }
    if (hand.length === 1) {
      game.log.push(`${player.name} calls UNO!`);
    }

    switch (card.type) {
      case "skip":
        advanceTurn(game);
        break;
      case "reverse":
        game.direction *= -1;
        if (game.players.length === 2) advanceTurn(game);
        break;
      case "draw2":
        game.pendingDraw += 2;
        break;
      case "wild4":
        game.pendingDraw += 4;
        break;
      default:
        break;
    }

    advanceTurn(game);
    return { game };
  }

  throw new Error("Unknown action");
}

function finishRound(game, player) {
  game.status = "finished";
  if (game.mode === "teams") {
    game.winningTeam = player.team;
    game.winnerId = player.id;
    game.log.push(`Team ${player.team + 1} wins! (${player.name} went out)`);
  } else {
    game.winnerId = player.id;
    game.log.push(`${player.name} wins!`);
  }
}

export function describeCard(card) {
  if (card.type === "wild") return "Wild";
  if (card.type === "wild4") return "Wild Draw Four";
  if (card.type === "number") return `${card.color} ${card.value}`;
  return `${card.color} ${card.type}`;
}

export { COLORS };
