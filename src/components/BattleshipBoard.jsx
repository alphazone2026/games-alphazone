import { useState } from "react";
import { GRID_SIZE, FLEET } from "../game/battleship.js";

const COLS = Array.from({ length: GRID_SIZE }, (_, i) => String.fromCharCode(65 + i));

function cellsFor(x, y, length, horizontal) {
  const cells = [];
  for (let i = 0; i < length; i++) cells.push(horizontal ? [x + i, y] : [x, y + i]);
  return cells;
}

function placementInvalid(cells, placedShips) {
  if (cells.some(([x, y]) => x < 0 || x >= GRID_SIZE || y < 0 || y >= GRID_SIZE)) return true;
  const occupied = new Set();
  placedShips.forEach((s) => cellsFor(s.x, s.y, s.length, s.horizontal).forEach(([x, y]) => occupied.add(`${x},${y}`)));
  return cells.some(([x, y]) => occupied.has(`${x},${y}`));
}

function GridHeader() {
  return (
    <div className="flex ml-6">
      {COLS.map((c) => (
        <div key={c} className="w-7 h-5 text-[10px] text-slate-500 flex items-center justify-center">
          {c}
        </div>
      ))}
    </div>
  );
}

function Grid({ board, revealShips, onCellClick, disabled }) {
  return (
    <div className="inline-block">
      <GridHeader />
      {board.grid.map((row, y) => (
        <div key={y} className="flex items-center">
          <div className="w-6 h-7 text-[10px] text-slate-500 flex items-center justify-center">{y + 1}</div>
          {row.map((cell, x) => {
            const isShip = cell === "ship" && revealShips;
            const isHit = cell === "hit";
            const isMiss = cell === "miss";
            const clickable = !disabled && (cell === "empty" || cell === "ship") && onCellClick;
            return (
              <button
                key={x}
                disabled={!clickable}
                onClick={() => onCellClick?.(x, y)}
                className={`w-7 h-7 border border-slate-700 flex items-center justify-center text-xs
                  ${isHit ? "bg-red-600" : isMiss ? "bg-slate-600" : isShip ? "bg-slate-500" : "bg-sky-900/60"}
                  ${clickable ? "hover:bg-sky-700 cursor-pointer" : ""}
                `}
              >
                {isHit ? "✹" : isMiss ? "•" : ""}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

function PlacementGrid({ placedShips, nextLength, horizontal, onPlace }) {
  const [hover, setHover] = useState(null);

  const occupied = new Set();
  placedShips.forEach((s) => cellsFor(s.x, s.y, s.length, s.horizontal).forEach(([x, y]) => occupied.add(`${x},${y}`)));

  const previewCells = hover && nextLength ? cellsFor(hover[0], hover[1], nextLength, horizontal) : [];
  const previewInvalid = previewCells.length > 0 && placementInvalid(previewCells, placedShips);
  const previewSet = new Set(previewCells.map(([x, y]) => `${x},${y}`));

  return (
    <div className="inline-block" onMouseLeave={() => setHover(null)}>
      <GridHeader />
      {Array.from({ length: GRID_SIZE }, (_, y) => (
        <div key={y} className="flex items-center">
          <div className="w-6 h-7 text-[10px] text-slate-500 flex items-center justify-center">{y + 1}</div>
          {Array.from({ length: GRID_SIZE }, (_, x) => {
            const key = `${x},${y}`;
            const isShip = occupied.has(key);
            const isPreview = !isShip && previewSet.has(key);
            return (
              <button
                key={x}
                disabled={!nextLength}
                onMouseEnter={() => setHover([x, y])}
                onClick={() => {
                  const cells = cellsFor(x, y, nextLength, horizontal);
                  if (placementInvalid(cells, placedShips)) return;
                  onPlace(x, y);
                }}
                className={`w-7 h-7 border border-slate-700 flex items-center justify-center text-xs
                  ${
                    isShip
                      ? "bg-slate-500"
                      : isPreview
                      ? previewInvalid
                        ? "bg-red-700/70"
                        : "bg-emerald-700/70"
                      : "bg-sky-900/60"
                  }
                  ${nextLength ? "hover:cursor-pointer" : ""}
                `}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function FleetPlacement({ room }) {
  const { game, sendAction } = room;
  const [placedShips, setPlacedShips] = useState([]);
  const [horizontal, setHorizontal] = useState(true);

  const nextLength = FLEET[placedShips.length];
  const readyPlayers = game.players.filter((p) => game.ready[p.id]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-sm text-slate-300">Deploy your fleet — click a cell to place the highlighted ship</div>

      <div className="flex gap-2 text-xs">
        {FLEET.map((len, i) => (
          <span
            key={i}
            className={`px-2 py-1 rounded border ${
              i < placedShips.length
                ? "border-slate-700 bg-slate-800 line-through text-slate-600"
                : i === placedShips.length
                ? "border-amber-400 bg-amber-400/20 text-slate-200"
                : "border-slate-700 text-slate-400"
            }`}
          >
            {len}
          </span>
        ))}
      </div>

      <PlacementGrid
        placedShips={placedShips}
        nextLength={nextLength}
        horizontal={horizontal}
        onPlace={(x, y) => setPlacedShips((s) => [...s, { x, y, length: nextLength, horizontal }])}
      />

      <div className="flex flex-wrap gap-2 justify-center">
        <button
          onClick={() => setHorizontal((h) => !h)}
          className="text-xs px-3 py-1.5 rounded-lg border border-slate-600 bg-slate-800 hover:bg-slate-700"
        >
          Rotate ({horizontal ? "horizontal" : "vertical"})
        </button>
        <button
          disabled={placedShips.length === 0}
          onClick={() => setPlacedShips((s) => s.slice(0, -1))}
          className="text-xs px-3 py-1.5 rounded-lg border border-slate-600 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Undo
        </button>
        <button
          disabled={placedShips.length === 0}
          onClick={() => setPlacedShips([])}
          className="text-xs px-3 py-1.5 rounded-lg border border-slate-600 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Reset
        </button>
        <button
          disabled={!!nextLength}
          onClick={() => sendAction({ type: "placeFleet", ships: placedShips })}
          className="text-xs px-3 py-1.5 rounded-lg border border-emerald-400 bg-emerald-900/40 hover:bg-emerald-900/70 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Ready!
        </button>
      </div>

      <div className="text-xs text-slate-500">
        {readyPlayers.length}/{game.players.length} ready
        {readyPlayers.length > 0 && ` — ${readyPlayers.map((p) => p.name).join(", ")}`}
      </div>
    </div>
  );
}

function PlacingPhase({ room }) {
  const { game, playerId } = room;
  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;

  return (
    <div className="w-full max-w-4xl flex flex-col items-center">
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        {game.players.map((p) => (
          <div
            key={p.id}
            className={`px-3 py-1.5 rounded-full text-xs border ${
              game.ready[p.id] ? "border-emerald-400 bg-emerald-400/20" : "border-slate-600 bg-slate-800"
            }`}
          >
            {p.isAI && "🤖 "}
            {p.name} {p.id === playerId && "(you)"} {game.ready[p.id] ? "✓" : ""}
          </div>
        ))}
      </div>

      {isSpectator ? (
        <div className="text-sm text-slate-400">Waiting for players to deploy their fleets…</div>
      ) : game.ready[playerId] ? (
        <div className="text-sm text-slate-400">Fleet deployed — waiting for other players…</div>
      ) : (
        <FleetPlacement room={room} />
      )}
    </div>
  );
}

export default function BattleshipBoard({ room }) {
  const { game, playerId, sendAction } = room;

  if (!game) return null;

  if (game.status === "placing") return <PlacingPhase room={room} />;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const current = game.players[game.currentPlayerIndex];
  const isMyTurn = current?.id === playerId && game.status === "playing" && game.alive[playerId];
  const opponents = game.players.filter((p) => p.id !== playerId);

  function fire(targetId, x, y) {
    if (!isMyTurn || !targetId) return;
    sendAction({ type: "fire", targetPlayerId: targetId, x, y });
  }

  return (
    <div className="w-full max-w-4xl">
      <div className="flex flex-wrap gap-2 justify-center mb-4">
        {game.players.map((p) => (
          <div
            key={p.id}
            className={`px-3 py-1.5 rounded-full text-xs border ${
              !game.alive[p.id]
                ? "border-slate-700 bg-slate-800 text-slate-500 line-through"
                : current?.id === p.id
                ? "border-amber-400 bg-amber-400/20"
                : "border-slate-600 bg-slate-800"
            }`}
          >
            {p.isAI && "🤖 "}
            {p.name} {p.id === playerId && "(you)"}
          </div>
        ))}
      </div>

      <div className="text-center text-sm mb-4 text-slate-300">
        {game.status === "finished"
          ? game.log[game.log.length - 1]
          : isMyTurn
          ? "Your turn — pick a target and fire"
          : `Waiting for ${current?.name}…`}
      </div>

      {!isSpectator && (
        <>
          <div className="flex flex-wrap gap-6 justify-center mb-8">
            {opponents.map((p) => (
              <div key={p.id} className={`flex flex-col items-center ${!game.alive[p.id] ? "opacity-40" : ""}`}>
                <div className="text-xs text-slate-500 mb-2">
                  {p.name}
                  {!game.alive[p.id] && " (sunk)"}
                </div>
                <Grid
                  board={game.boards[p.id]}
                  revealShips={false}
                  onCellClick={(x, y) => fire(p.id, x, y)}
                  disabled={!isMyTurn || !game.alive[p.id]}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center mb-6">
            <div className="text-xs text-slate-500 mb-2">Your fleet</div>
            <Grid board={game.boards[playerId]} revealShips />
          </div>
        </>
      )}

      <div className="mt-4 bg-slate-800/60 rounded-lg p-3 max-h-40 overflow-y-auto text-xs text-slate-400 space-y-1">
        {game.log.slice(-10).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
