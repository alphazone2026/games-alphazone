import { GRID_SIZE, legalTargets, randomFleetPlacement } from "./battleship.js";

// AI seats deploy immediately with a random valid fleet, same submission
// shape a human's placement UI sends.
export function chooseBattleshipPlacement() {
  return { type: "placeFleet", ships: randomFleetPlacement() };
}

function liveHitsAgainst(board) {
  const hits = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (board.grid[y][x] === "hit") {
        const ship = board.ships.find((s) => s.cells.some(([cx, cy]) => cx === x && cy === y));
        if (ship && !ship.sunk) hits.push([x, y]);
      }
    }
  }
  return hits;
}

// Simple hunt/target AI. Target choice: if any alive opponent has a ship
// that's been hit but not yet sunk, keep hunting one of those (finish off
// a wounded ship rather than abandoning it) - otherwise pick a random
// alive opponent. Deliberately NOT "always shoot whoever has the least
// health overall" - that greedy rule makes every AI permanently pile onto
// whichever player took the first hit (often the human, by bad luck) and
// never touch each other again. Picking randomly outside of an active
// hunt keeps fire spread across the table like real free-for-all play.
export function chooseBattleshipAction(game, playerId) {
  const targets = legalTargets(game, playerId);
  if (targets.length === 0) return null;

  const withLiveHits = targets.filter((id) => liveHitsAgainst(game.boards[id]).length > 0);
  const targetId =
    withLiveHits.length > 0
      ? withLiveHits[Math.floor(Math.random() * withLiveHits.length)]
      : targets[Math.floor(Math.random() * targets.length)];

  const board = game.boards[targetId];
  const grid = board.grid;
  const liveHits = liveHitsAgainst(board);

  for (const [hx, hy] of liveHits) {
    const neighbors = [
      [hx + 1, hy],
      [hx - 1, hy],
      [hx, hy + 1],
      [hx, hy - 1],
    ].filter(([x, y]) => x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === "empty");
    if (neighbors.length > 0) {
      const [x, y] = neighbors[Math.floor(Math.random() * neighbors.length)];
      return { type: "fire", targetPlayerId: targetId, x, y };
    }
  }

  // Random search among untried cells.
  const untried = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === "empty" || grid[y][x] === "ship") untried.push([x, y]);
    }
  }
  const [x, y] = untried[Math.floor(Math.random() * untried.length)];
  return { type: "fire", targetPlayerId: targetId, x, y };
}
