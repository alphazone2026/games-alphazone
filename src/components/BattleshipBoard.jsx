import { useState } from "react";
import { GRID_SIZE } from "../game/battleship.js";

const COLS = Array.from({ length: GRID_SIZE }, (_, i) => String.fromCharCode(65 + i));

function Grid({ board, revealShips, onCellClick, disabled }) {
  return (
    <div className="inline-block">
      <div className="flex ml-6">
        {COLS.map((c) => (
          <div key={c} className="w-7 h-5 text-[10px] text-slate-500 flex items-center justify-center">
            {c}
          </div>
        ))}
      </div>
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

export default function BattleshipBoard({ room }) {
  const { game, playerId, sendAction } = room;
  const [selectedTargetId, setSelectedTargetId] = useState(null);

  if (!game) return null;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const current = game.players[game.currentPlayerIndex];
  const isMyTurn = current?.id === playerId && game.status === "playing" && game.alive[playerId];
  const opponents = game.players.filter((p) => p.id !== playerId);
  const targetId = selectedTargetId && game.alive[selectedTargetId] ? selectedTargetId : opponents.find((p) => game.alive[p.id])?.id;

  function fire(x, y) {
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
          {opponents.length > 1 && (
            <div className="flex flex-wrap gap-2 justify-center mb-4">
              {opponents.map((p) => (
                <button
                  key={p.id}
                  disabled={!game.alive[p.id]}
                  onClick={() => setSelectedTargetId(p.id)}
                  className={`text-xs px-3 py-1.5 rounded-lg border disabled:opacity-30 disabled:cursor-not-allowed ${
                    targetId === p.id ? "border-indigo-400 bg-indigo-900/40" : "border-slate-700 bg-slate-800"
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}

          {targetId && (
            <div className="flex flex-col items-center mb-8">
              <div className="text-xs text-slate-500 mb-2">
                Firing at {game.players.find((p) => p.id === targetId)?.name}
              </div>
              <Grid board={game.boards[targetId]} revealShips={false} onCellClick={fire} disabled={!isMyTurn} />
            </div>
          )}

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
