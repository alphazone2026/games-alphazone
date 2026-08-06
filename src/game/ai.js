import { legalMoves, COLORS } from "./uno.js";

// Very simple heuristic bot: prefers action cards, dumps highest-count color,
// saves wilds for last, picks the color it holds most of.
export function chooseAIAction(game, playerId) {
  const moves = legalMoves(game, playerId);
  const hand = game.hands[playerId];

  if (moves.length === 0) {
    return { type: "draw" };
  }

  const scored = moves
    .map((card) => ({ card, score: scoreCard(card) }))
    .sort((a, b) => b.score - a.score);

  const chosen = scored[0].card;

  if (chosen.color === "wild") {
    return { type: "play", cardId: chosen.id, chosenColor: bestColor(hand, chosen.id) };
  }
  return { type: "play", cardId: chosen.id };
}

function scoreCard(card) {
  switch (card.type) {
    case "wild4":
      return 1;
    case "wild":
      return 2;
    case "draw2":
      return 5;
    case "skip":
    case "reverse":
      return 4;
    default:
      return 3;
  }
}

function bestColor(hand, excludeCardId) {
  const counts = { red: 0, yellow: 0, green: 0, blue: 0 };
  for (const c of hand) {
    if (c.id === excludeCardId) continue;
    if (counts[c.color] !== undefined) counts[c.color]++;
  }
  let best = COLORS[0];
  for (const color of COLORS) {
    if (counts[color] > counts[best]) best = color;
  }
  return best;
}
