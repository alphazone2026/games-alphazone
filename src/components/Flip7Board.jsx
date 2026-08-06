import { describeCard, handScore, uniqueNumberValues, TARGET_SCORE } from "../game/flip7.js";

function MiniCard({ card }) {
  const isNumber = card.kind === "number";
  const isAction = card.kind === "action";
  const accent = isNumber ? "border-t-slate-500" : isAction ? "border-t-purple-600" : "border-t-amber-500";
  return (
    <div className={`card-face ${accent} border-t-4 w-10 h-14 rounded-md flex items-center justify-center text-[11px] font-bold`}>
      {describeCard(card)}
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

  return (
    <div className="w-full max-w-2xl">
      <div className="text-center mb-4">
        <div className="text-sm text-emerald-50/70">
          Round {game.round} · first to {TARGET_SCORE} wins
        </div>
      </div>

      <div className="space-y-2 mb-6">
        {game.players.map((p) => {
          const hand = game.hands[p.id];
          const busted = game.busted[p.id];
          const stayed = game.stayed[p.id];
          const isTurn = current?.id === p.id && !game.roundOver;
          return (
            <div key={p.id} className={`wood-panel rounded-lg p-3 ${isTurn ? "ring-2 ring-amber-300/70" : ""}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-semibold text-amber-50 flex items-center gap-2">
                  {p.isAI && <span className="text-xs">🤖</span>}
                  {p.name} {p.id === playerId && <span className="text-indigo-300 text-xs">(you)</span>}
                  {busted && <span className="text-xs bg-red-700 px-2 py-0.5 rounded-full">Busted</span>}
                  {stayed && !busted && <span className="text-xs bg-emerald-700 px-2 py-0.5 rounded-full">Stayed</span>}
                  {isTurn && <span className="text-xs bg-amber-500 text-slate-900 px-2 py-0.5 rounded-full">Turn</span>}
                </div>
                <div className="text-xs text-amber-100/60">
                  Score: <span className="font-semibold text-amber-50">{game.scores[p.id]}</span>
                  {!busted && (
                    <span className="ml-2">
                      Round: <span className="font-semibold text-amber-50">{handScore(hand)}</span>
                    </span>
                  )}
                  <span className="ml-2">Unique: {uniqueNumberValues(hand).size}/7</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {hand.length === 0 && <div className="text-xs text-amber-100/40">No cards yet</div>}
                {hand.map((c) => (
                  <MiniCard key={c.id} card={c} />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center text-sm mb-4 text-amber-50/90">
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
