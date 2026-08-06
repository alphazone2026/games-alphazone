import { useState } from "react";
import { describeCard, COLORS } from "../game/uno.js";

const COLOR_CLASSES = {
  red: "bg-red-600 border-red-400",
  yellow: "bg-yellow-500 border-yellow-300 text-slate-900",
  green: "bg-green-600 border-green-400",
  blue: "bg-blue-600 border-blue-400",
  wild: "bg-gradient-to-br from-red-500 via-yellow-400 to-blue-500 border-slate-200",
};

function Card({ card, onClick, disabled, small }) {
  const cls = COLOR_CLASSES[card.color] || COLOR_CLASSES.wild;
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${cls} ${small ? "w-12 h-16 text-xs" : "w-16 h-24 text-sm"} rounded-lg border-2 font-bold text-white shadow-md flex items-center justify-center text-center px-1 transition
        ${disabled ? "opacity-40 cursor-not-allowed" : "hover:-translate-y-2 cursor-pointer"}`}
    >
      {cardLabel(card)}
    </button>
  );
}

function cardLabel(card) {
  if (card.type === "wild4") return "+4";
  if (card.type === "wild") return "WILD";
  if (card.type === "draw2") return "+2";
  if (card.type === "skip") return "SKIP";
  if (card.type === "reverse") return "REV";
  return String(card.value);
}

export default function GameBoard({ room }) {
  const { game, playerId, myLegalMoves, sendAction } = room;
  const [pendingWildCardId, setPendingWildCardId] = useState(null);

  if (!game) return null;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const myHand = me ? game.hands[playerId] : [];
  const top = game.discard[game.discard.length - 1];
  const currentPlayer = game.players[game.currentPlayerIndex];
  const isMyTurn = currentPlayer?.id === playerId;
  const legalIds = new Set(myLegalMoves.map((c) => c.id));

  function playCard(card) {
    if (card.color === "wild") {
      setPendingWildCardId(card.id);
      return;
    }
    sendAction({ type: "play", cardId: card.id });
  }

  function chooseWildColor(color) {
    sendAction({ type: "play", cardId: pendingWildCardId, chosenColor: color });
    setPendingWildCardId(null);
  }

  return (
    <div className="w-full max-w-3xl">
      {game.mode === "teams" && (
        <div className="text-center text-sm mb-3 text-slate-400">
          <span className="text-sky-400 font-semibold">Team A</span> (seats 1 &amp; 3) vs{" "}
          <span className="text-orange-400 font-semibold">Team B</span> (seats 2 &amp; 4)
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {game.players.map((p) => (
          <div
            key={p.id}
            className={`rounded-lg border p-3 text-center ${
              currentPlayer?.id === p.id ? "border-indigo-400 bg-indigo-900/40" : "border-slate-700 bg-slate-800"
            }`}
          >
            <div className="text-sm font-semibold truncate">
              {p.name} {p.id === playerId && "(you)"}
            </div>
            {game.mode === "teams" && (
              <div className={`text-[10px] ${p.team === 0 ? "text-sky-400" : "text-orange-400"}`}>
                Team {p.team === 0 ? "A" : "B"}
              </div>
            )}
            <div className="text-xs text-slate-400 mt-1">{game.hands[p.id].length} cards</div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-8 mb-6">
        <div className="text-center">
          <div className="text-xs text-slate-500 mb-1">Draw pile ({game.deck.length})</div>
          <Card card={{ color: "wild", type: "back" }} disabled onClick={() => {}} small={false} />
        </div>
        <div className="text-center">
          <div className="text-xs text-slate-500 mb-1">
            Discard {game.activeColor && <span className={`inline-block w-2 h-2 rounded-full ml-1 ${dotColor(game.activeColor)}`} />}
          </div>
          <Card card={top} disabled onClick={() => {}} />
        </div>
      </div>

      <div className="text-center text-sm mb-4 text-slate-300">
        {isMyTurn
          ? game.pendingDraw > 0
            ? `Your turn — play a Draw card or draw ${game.pendingDraw}`
            : "Your turn"
          : `Waiting for ${currentPlayer?.name}…`}
      </div>

      {isMyTurn && (
        <div className="flex justify-center mb-4">
          <button
            className="rounded-lg bg-slate-700 hover:bg-slate-600 px-4 py-2 text-sm font-semibold"
            onClick={() => sendAction({ type: "draw" })}
          >
            {game.pendingDraw > 0 ? `Draw ${game.pendingDraw}` : "Draw a card"}
          </button>
        </div>
      )}

      {!isSpectator && (
        <div className="mt-6">
          <div className="text-xs text-slate-500 mb-2 text-center">Your hand</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {myHand.map((card) => (
              <Card
                key={card.id}
                card={card}
                onClick={() => playCard(card)}
                disabled={!isMyTurn || !legalIds.has(card.id)}
              />
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 bg-slate-800/60 rounded-lg p-3 max-h-32 overflow-y-auto text-xs text-slate-400 space-y-1">
        {game.log.slice(-8).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {pendingWildCardId && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-6 text-center">
            <div className="mb-4 font-semibold">Choose a color</div>
            <div className="grid grid-cols-2 gap-3">
              {COLORS.map((color) => (
                <button
                  key={color}
                  className={`${COLOR_CLASSES[color]} w-20 h-14 rounded-lg border-2 font-bold uppercase text-xs`}
                  onClick={() => chooseWildColor(color)}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function dotColor(color) {
  return { red: "bg-red-500", yellow: "bg-yellow-400", green: "bg-green-500", blue: "bg-blue-500" }[color] || "bg-slate-400";
}
