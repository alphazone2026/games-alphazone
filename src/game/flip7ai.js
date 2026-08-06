import { uniqueNumberValues } from "./flip7.js";

// Push-your-luck heuristic: the more unique numbers already held (closer to
// the 7-card bonus, and more numbers that would bust a re-draw), the more
// cautious the bot gets. Small random wobble so bots don't play identically.
export function chooseFlip7Action(game, playerId) {
  const hand = game.hands[playerId];
  const uniqueCount = uniqueNumberValues(hand).size;

  if (uniqueCount >= 7) return { type: "stay" };

  // Rough bust risk: fraction of remaining deck that would duplicate a card we hold.
  const held = uniqueNumberValues(hand);
  const remaining = game.deck.length || 1;
  const dangerCards = game.deck.filter((c) => c.kind === "number" && held.has(c.value)).length;
  const bustRisk = dangerCards / remaining;

  const staySafety = 0.35 + uniqueCount * 0.07;
  if (bustRisk > staySafety || uniqueCount >= 5) {
    return Math.random() < 0.7 ? { type: "stay" } : { type: "hit" };
  }
  return { type: "hit" };
}
