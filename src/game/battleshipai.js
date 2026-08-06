import { GRID_SIZE, legalTargets, randomFleetPlacement } from "./battleship.js";

// AI seats deploy immediately with a random valid fleet, same submission
// shape a human's placement UI sends.
export function chooseBattleshipPlacement() {
  return { type: "placeFleet", ships: randomFleetPlacement() };
}

// Simple hunt/target AI: pick the weakest-looking alive opponent (fewest
// unsunk cells left), then fire randomly until a hit lands, after which it
// probes the four neighbors of the most recent hit before going back to
// random search.
export function chooseBattleshipAction(game, playerId) {
  const targets = legalTargets(game, playerId);
  if (targets.length === 0) return null;

  // Prefer whichever opponent has the most damage already (closer to sunk).
  const targetId = targets.reduce((best, id) => {
    const board = game.boards[id];
    const remaining = board.ships.reduce((sum, s) => sum + (s.cells.length - s.hits), 0);
    const bestBoard = game.boards[best];
    const bestRemaining = bestBoard.ships.reduce((sum, s) => sum + (s.cells.length - s.hits), 0);
    return remaining < bestRemaining ? id : best;
  }, targets[0]);

  const board = game.boards[targetId];
  const grid = board.grid;

  // Hunt mode: find an existing hit that isn't part of a fully-sunk ship,
  // and try an unfired neighbor cell.
  const liveHits = [];
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === "hit") {
        const ship = board.ships.find((s) => s.cells.some(([cx, cy]) => cx === x && cy === y));
        if (ship && !ship.sunk) liveHits.push([x, y]);
      }
    }
  }

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
