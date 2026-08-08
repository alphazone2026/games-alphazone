import { describeCard, handScore, uniqueNumberValues, TARGET_SCORE } from "../game/flip7.js";

function MiniCard({ card }) {
  const isNumber = card.kind === "number";
  const isAction = card.kind === "action";
  const accent = isNumber ? "border-t-slate-500" : isAction ? "border-t-purple-600" : "border-t-amber-500";
  return (
    <div className={`card-face ${accent} border-t-4 w-9 h-12 rounded-md flex items-center justify-center text-[10px] font-bold`}>
      {describeCard(card)}
    </div>
  );
}

// Seat layout around an oval table, self always anchored at the bottom,
// evenly spaced clockwise from there — works for any player count (3-8).
function seatPosition(index, total) {
  const angle = ((90 + (360 * index) / total) * Math.PI) / 180;
  const rx = 45;
  const ry = 40;
  return {
    left: `${50 + rx * Math.cos(angle)}%`,
    top: `${50 + ry * Math.sin(angle)}%`,
  };
}

function SeatBadge({ player, hand, score, roundScore, busted, stayed, isTurn, isMe, style }) {
  return (
    <div className="absolute flex flex-col items-center gap-1.5" style={{ ...style, transform: "translate(-50%, -50%)" }}>
      <div
        className={`wood-panel px-3 py-1.5 rounded-lg text-center transition-shadow ${
          isTurn ? "ring-2 ring-amber-300/70" : ""
        }`}
      >
        <div className="text-xs font-semibold text-amber-50 flex items-center gap-1 justify-center whitespace-nowrap">
          {player.isAI && <span className="text-[10px]">🤖</span>}
          {player.name}
          {isMe && <span className="text-indigo-300">(you)</span>}
        </div>
        <div className="text-[10px] text-amber-100/60 flex items-center gap-1.5 justify-center mt-0.5">
          <span>Score: {score}</span>
          {!busted && <span>Round: {roundScore}</span>}
        </div>
        <div className="flex items-center gap-1 justify-center mt-1">
          {busted && <span className="text-[9px] bg-red-700 px-1.5 py-0.5 rounded-full">Busted</span>}
          {stayed && !busted && <span className="text-[9px] bg-emerald-700 px-1.5 py-0.5 rounded-full">Stayed</span>}
        </div>
      </div>
      <div className="flex flex-wrap gap-1 justify-center max-w-[9rem]">
        {hand.length === 0 && <div className="text-[10px] text-amber-100/40">No cards</div>}
        {hand.map((c) => (
          <MiniCard key={c.id} card={c} />
        ))}
      </div>
    </div>
  );
}

export default function Flip7Board({ room }) {
  const { game, playerId, sendAction } = room;
  if (!game) return null;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const current = game.players[game.currentPlayerIndex];
  const isMyTurn = current?.id === playerId && !game.roundOver;
  const canAct = isMyTurn && !game.busted[playerId] && !game.stayed[playerId];
  const humanSeated = game.players.some((p) => !p.isAI && p.id === playerId);

  // Rotate seating so "me" (or seat 0 if spectating) always renders at the bottom.
  const meIndex = me ? game.players.findIndex((p) => p.id === playerId) : 0;
  const seatedPlayers = game.players.map((_, i) => game.players[(meIndex + i) % game.players.length]);

  return (
    <div className="w-full max-w-3xl">
      <div className="text-center mb-4">
        <div className="text-sm text-emerald-50/70">
          Round {game.round} · first to {TARGET_SCORE} wins
        </div>
      </div>

      {/* Table */}
      <div className="relative w-full mx-auto rounded-[45%] wood-frame" style={{ aspectRatio: "16 / 10" }}>
        <div
          className="absolute inset-[10px] rounded-[45%]"
          style={{
            background: "radial-gradient(ellipse at center, #1d6b3f 0%, #145030 60%, #0e3a22 100%)",
            boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
          }}
        >
          {seatedPlayers.map((p, i) => (
            <SeatBadge
              key={p.id}
              player={p}
              hand={game.hands[p.id]}
              score={game.scores[p.id]}
              roundScore={handScore(game.hands[p.id])}
              busted={game.busted[p.id]}
              stayed={game.stayed[p.id]}
              isTurn={current?.id === p.id && !game.roundOver}
              isMe={p.id === playerId}
              style={seatPosition(i, seatedPlayers.length)}
            />
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-[11px] text-emerald-50/60">
              {me && !game.busted[playerId] && (
                <div>Unique: {uniqueNumberValues(game.hands[playerId]).size}/7</div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm my-4 text-amber-50/90">
        {game.roundOver
          ? "Round over"
          : isMyTurn
          ? "Your turn — hit or stay?"
          : `Waiting for ${current?.name}…`}
      </div>

      {!isSpectator && canAct && (
        <div className="flex justify-center gap-3 mb-6">
          <button
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 px-6 py-3 font-semibold"
            onClick={() => sendAction({ type: "hit" })}
          >
            Hit
          </button>
          <button
            className="wood-panel text-amber-50 rounded-lg px-6 py-3 font-semibold hover:brightness-110"
            onClick={() => sendAction({ type: "stay" })}
          >
            Stay
          </button>
        </div>
      )}

      {game.roundOver && game.status === "playing" && humanSeated && (
        <div className="flex justify-center mb-6">
          <button
            className="rounded-lg bg-emerald-600 hover:bg-emerald-500 px-6 py-3 font-semibold"
            onClick={() => sendAction({ type: "nextRound" })}
          >
            Next round
          </button>
        </div>
      )}

      <div className="mt-6 felt-panel rounded-lg p-3 max-h-40 overflow-y-auto text-xs text-emerald-50/70 space-y-1">
        {game.log.slice(-10).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
    </div>
  );
}
