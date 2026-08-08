import { ROUTES, DESTINATIONS } from "./geometry.js";
import { affordableColors } from "./ttr.js";

// Resolves an AI's pending destination-ticket choice, whether it's their
// turn or not (initial deal happens for everyone before turns matter).
export function chooseAIDestinations(game, aiId) {
  const pending = game.pendingDestinationChoice[aiId];
  if (!pending) return null;
  const offered = pending.offered.map((id) => DESTINATIONS.find((d) => d.id === id)).sort((a, b) => b.points - a.points);
  const keepCount = pending.initial ? Math.min(2, offered.length) : Math.max(pending.minKeep, 1);
  return { type: "chooseDestinationTickets", keepIds: offered.slice(0, keepCount).map((d) => d.id) };
}

export function chooseTtrAction(game, aiId) {
  const hand = game.hands[aiId] || [];

  const claimable = ROUTES.filter(
    (r) => !game.claimedRoutes[r.id] && game.trainsLeft[aiId] >= r.length && affordableColors(hand, r).length > 0
  );
  if (claimable.length > 0) {
    claimable.sort((a, b) => b.length - a.length);
    const route = claimable[0];
    const options = affordableColors(hand, route);
    const colorUsed = options.sort(
      (a, b) => hand.filter((c) => c.color === b).length - hand.filter((c) => c.color === a).length
    )[0];
    return { type: "claimRoute", routeId: route.id, colorUsed };
  }

  if (game.destinationDeck.length >= 3 && Math.random() < 0.12) {
    return { type: "drawDestinationTickets" };
  }

  const colorCounts = {};
  hand.forEach((c) => {
    colorCounts[c.color] = (colorCounts[c.color] || 0) + 1;
  });
  let bestFaceUp = -1;
  let bestCount = 0;
  game.faceUp.forEach((c, i) => {
    if (c.color === "locomotive") return;
    const count = colorCounts[c.color] || 0;
    if (count > bestCount) {
      bestCount = count;
      bestFaceUp = i;
    }
  });
  if (bestFaceUp >= 0) return { type: "drawTrainCard", source: "faceup", index: bestFaceUp };
  return { type: "drawTrainCard", source: "deck" };
}
