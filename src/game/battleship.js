// Battleship engine — pure functions, no I/O. Free-for-all variant: every
// player gets their own grid, and on your turn you pick any still-alive
// opponent and a cell to fire at. Last player with an unsunk fleet wins.
//
// Games start in a "placing" phase: each player deploys their own fleet
// (submitted as one "placeFleet" action once they've positioned every
// ship) and the game moves to "playing" once everyone is ready. AI seats
// auto-place a random valid fleet the same way a human submits one.
//
// Simplification vs. classic 1v1 Battleship: a hit does not grant an extra
// turn.

const GRID_SIZE = 8;
const FLEET = [4, 3, 3, 2, 2];
const MIN_PLAYERS = 2;
const MAX_PLAYERS = 6;

function shuffle(arr, rng = Math.random) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function emptyGrid() {
  return Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => "empty"));
}

function cellsFor(x, y, len, horizontal) {
  const cells = [];
  for (let i = 0; i < len; i++) {
    cells.push(horizontal ? [x + i, y] : [x, y + i]);
  }
  return cells;
}

function fits(grid, cells) {
  return cells.every(([x, y]) => x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE && grid[y][x] === "empty");
}

// A random valid fleet, in the same shape a client submits via "placeFleet"
// ({ x, y, length, horizontal } per ship) - used to auto-deploy AI seats.
export function randomFleetPlacement(rng = Math.random) {
  const grid = emptyGrid();
  const ships = [];
  for (const len of FLEET) {
    let placed = false;
    for (let attempt = 0; attempt < 200 && !placed; attempt++) {
      const horizontal = rng() < 0.5;
      const x = Math.floor(rng() * GRID_SIZE);
      const y = Math.floor(rng() * GRID_SIZE);
      const cells = cellsFor(x, y, len, horizontal);
      if (fits(grid, cells)) {
        cells.forEach(([cx, cy]) => (grid[cy][cx] = "ship"));
        ships.push({ x, y, length: len, horizontal });
        placed = true;
      }
    }
  }
  return ships;
}

// Validates a client-submitted fleet (exactly one ship per FLEET length,
// all in-bounds, none overlapping) and builds the board it produces, or
// returns null if the submission is invalid.
function validateFleetPlacement(shipsInput) {
  if (!Array.isArray(shipsInput) || shipsInput.length !== FLEET.length) return null;
  const remaining = FLEET.slice();
  const grid = emptyGrid();
  const ships = [];
  for (const s of shipsInput) {
    if (!s || typeof s.x !== "number" || typeof s.y !== "number" || typeof s.length !== "number") return null;
    const idx = remaining.indexOf(s.length);
    if (idx === -1) return null;
    remaining.splice(idx, 1);
    const cells = cellsFor(s.x, s.y, s.length, !!s.horizontal);
    if (!fits(grid, cells)) return null;
    cells.forEach(([cx, cy]) => (grid[cy][cx] = "ship"));
    ships.push({ cells, hits: 0, sunk: false });
  }
  return { grid, ships };
}

// players: [{ id, name, isAI }]
export function createGame({ players }) {
  if (players.length < MIN_PLAYERS || players.length > MAX_PLAYERS) {
    throw new Error(`Battleship needs ${MIN_PLAYERS}-${MAX_PLAYERS} players`);
  }
  const boards = {};
  const ready = {};
  const alive = {};
  for (const p of players) {
    boards[p.id] = { grid: emptyGrid(), ships: [] };
    ready[p.id] = false;
    alive[p.id] = true;
  }
  return {
    gameId: "battleship",
    players,
    boards,
    ready,
    alive,
    currentPlayerIndex: 0,
    status: "placing",
    winnerId: null,
    log: ["Deploy your fleet — game starts once everyone is ready"],
  };
}

function alivePlayers(game) {
  return game.players.filter((p) => game.alive[p.id]);
}

function nextAliveIndex(game, from) {
  const n = game.players.length;
  for (let step = 1; step <= n; step++) {
    const idx = (from + step) % n;
    if (game.alive[game.players[idx].id]) return idx;
  }
  return -1;
}

export function legalTargets(game, playerId) {
  if (game.status !== "playing") return [];
  if (game.players[game.currentPlayerIndex]?.id !== playerId) return [];
  if (!game.alive[playerId]) return [];
  return game.players.filter((p) => p.id !== playerId && game.alive[p.id]).map((p) => p.id);
}

// action: { type: 'placeFleet', ships: [{x,y,length,horizontal}, ...] }
//       | { type: 'fire', targetPlayerId, x, y }
export function applyAction(game, playerId, action) {
  if (game.status === "placing") {
    if (action.type !== "placeFleet") throw new Error("Deploy your fleet first");
    if (game.ready[playerId]) throw new Error("Fleet already deployed");
    const board = validateFleetPlacement(action.ships);
    if (!board) throw new Error("Invalid fleet placement");
    game.boards[playerId] = board;
    game.ready[playerId] = true;
    const player = game.players.find((p) => p.id === playerId);
    game.log.push(`${player.name} has deployed their fleet`);
    if (game.players.every((p) => game.ready[p.id])) {
      game.status = "playing";
      game.currentPlayerIndex = 0;
      game.log.push("All fleets deployed — battle begins!");
    }
    return { game };
  }

  if (game.status !== "playing") throw new Error("Game already finished");
  const player = game.players[game.currentPlayerIndex];
  if (player.id !== playerId) throw new Error("Not this player's turn");
  if (!game.alive[playerId]) throw new Error("You're eliminated");
  if (action.type !== "fire") throw new Error("Unknown action");

  const { targetPlayerId, x, y } = action;
  if (targetPlayerId === playerId) throw new Error("Can't fire at yourself");
  if (!game.alive[targetPlayerId]) throw new Error("Target already eliminated");
  const board = game.boards[targetPlayerId];
  if (!board) throw new Error("No such target");
  if (x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE) throw new Error("Off grid");
  const cell = board.grid[y][x];
  if (cell === "hit" || cell === "miss") throw new Error("Already fired there");

  const target = game.players.find((p) => p.id === targetPlayerId);

  if (cell === "ship") {
    board.grid[y][x] = "hit";
    const ship = board.ships.find((s) => s.cells.some(([cx, cy]) => cx === x && cy === y));
    ship.hits += 1;
    if (ship.hits === ship.cells.length) {
      ship.sunk = true;
      game.log.push(`${player.name} sinks a ${ship.cells.length}-cell ship of ${target.name}'s!`);
    } else {
      game.log.push(`${player.name} hits ${target.name} at ${String.fromCharCode(65 + x)}${y + 1}`);
    }
    if (board.ships.every((s) => s.sunk)) {
      game.alive[targetPlayerId] = false;
      game.log.push(`${target.name}'s fleet is destroyed — eliminated!`);
    }
  } else {
    board.grid[y][x] = "miss";
    game.log.push(`${player.name} fires at ${target.name} (${String.fromCharCode(65 + x)}${y + 1}) — miss`);
  }

  const remaining = alivePlayers(game);
  if (remaining.length <= 1) {
    game.status = "finished";
    game.winnerId = remaining[0]?.id ?? null;
    if (remaining[0]) game.log.push(`${remaining[0].name} wins!`);
    return { game };
  }

  const next = nextAliveIndex(game, game.currentPlayerIndex);
  game.currentPlayerIndex = next;
  return { game };
}

export { GRID_SIZE, FLEET, MIN_PLAYERS, MAX_PLAYERS };
