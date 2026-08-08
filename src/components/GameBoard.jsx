import { useRef, useState } from "react";
import { describeCard, COLORS } from "../game/uno.js";

const COLOR_CLASSES = {
  red: "bg-gradient-to-br from-red-500 to-red-700 border-red-300",
  yellow: "bg-gradient-to-br from-yellow-300 to-yellow-500 border-yellow-200 text-slate-900",
  green: "bg-gradient-to-br from-green-500 to-green-700 border-green-300",
  blue: "bg-gradient-to-br from-blue-500 to-blue-700 border-blue-300",
  wild: "bg-gradient-to-br from-slate-800 to-slate-950 border-slate-500",
};

const SYMBOL = { skip: "⊘", reverse: "⇄", draw2: "+2", wild: "★", wild4: "+4", back: "" };

function cardLabel(card) {
  if (card.type === "back") return "";
  if (card.type === "wild4") return "+4";
  if (card.type === "wild") return "★";
  if (card.type === "draw2") return "+2";
  if (card.type === "skip") return "⊘";
  if (card.type === "reverse") return "⇄";
  return String(card.value);
}

function Card({ card, onClick, disabled, dim = false, size = "md" }) {
  const dims = { sm: "w-10 h-14 text-[10px]", md: "w-16 h-24 text-lg", lg: "w-20 h-28 text-xl" }[size];
  if (card.type === "back") {
    return (
      <div
        className={`${dims} rounded-lg border-2 border-slate-200/70 shadow-lg bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center relative overflow-hidden`}
      >
        <div className="absolute inset-1 rounded-md border border-white/20 rotate-12 bg-gradient-to-br from-red-600/40 via-yellow-400/30 to-blue-600/40" />
        <span className="relative font-black italic text-white/90 text-xs tracking-tighter drop-shadow">UNO</span>
      </div>
    );
  }
  const cls = COLOR_CLASSES[card.color] || COLOR_CLASSES.wild;
  const label = cardLabel(card);
  const isWild = card.color === "wild";
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${cls} ${dims} rounded-lg border-2 shadow-lg relative font-extrabold transition-all duration-150
        ${dim ? "opacity-40 grayscale" : ""}
        ${disabled ? "cursor-default" : "hover:-translate-y-3 hover:shadow-xl cursor-pointer"}`}
    >
      <span className="absolute top-1 left-1.5 text-[0.6em] leading-none drop-shadow">{label}</span>
      <span className="absolute bottom-1 right-1.5 text-[0.6em] leading-none rotate-180 drop-shadow">{label}</span>
      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className={`inline-flex items-center justify-center rounded-full ${
            isWild ? "" : "bg-white/15"
          } w-[65%] h-[75%] -rotate-12`}
        >
          <span className="drop-shadow">
            {isWild ? (
              <span className="grid grid-cols-2 gap-0.5">
                <span className="w-2.5 h-2.5 rounded-sm bg-red-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-yellow-400 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-green-500 inline-block" />
                <span className="w-2.5 h-2.5 rounded-sm bg-blue-500 inline-block" />
              </span>
            ) : (
              label
            )}
          </span>
        </span>
      </span>
    </button>
  );
}

// Seat layout around an oval table, self always anchored at the bottom.
const SEAT_POSITIONS = {
  2: ["bottom-2 left-1/2 -translate-x-1/2", "top-2 left-1/2 -translate-x-1/2 rotate-180"],
  3: [
    "bottom-2 left-1/2 -translate-x-1/2",
    "top-1/3 left-2 -translate-y-1/2",
    "top-1/3 right-2 -translate-y-1/2",
  ],
  4: [
    "bottom-2 left-1/2 -translate-x-1/2",
    "top-1/2 left-2 -translate-y-1/2",
    "top-2 left-1/2 -translate-x-1/2",
    "top-1/2 right-2 -translate-y-1/2",
  ],
};

function PlayerBadge({ player, cardCount, isCurrent, isMe, team, positionClass }) {
  return (
    <div className={`absolute ${positionClass} flex flex-col items-center gap-1`}>
      <div
        className={`wood-panel px-3 py-1.5 rounded-full text-center transition-shadow ${
          isCurrent ? "ring-2 ring-amber-300/70" : ""
        }`}
      >
        <div className="text-xs font-semibold text-amber-50 flex items-center gap-1 justify-center">
          {player.isAI && <span className="text-[10px]">🤖</span>}
          {player.name}
          {isMe && <span className="text-indigo-300">(you)</span>}
        </div>
        {team != null && (
          <div className={`text-[9px] ${team === 0 ? "text-sky-300" : "text-orange-300"}`}>
            Team {team === 0 ? "A" : "B"}
          </div>
        )}
        <div className="text-[10px] text-amber-100/60">{cardCount} cards</div>
      </div>
    </div>
  );
}

const PLAY_ANIMATION_MS = 420;

export default function GameBoard({ room }) {
  const { game, playerId, myLegalMoves, sendAction } = room;
  const [pendingWildCardId, setPendingWildCardId] = useState(null);
  const [pendingWildRect, setPendingWildRect] = useState(null);
  const [flyingCard, setFlyingCard] = useState(null);
  const pileRef = useRef(null);

  if (!game) return null;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const myHand = me ? game.hands[playerId] : [];
  const top = game.discard[game.discard.length - 1];
  const currentPlayer = game.players[game.currentPlayerIndex];
  const isMyTurn = currentPlayer?.id === playerId;
  const legalIds = new Set(myLegalMoves.map((c) => c.id));
  const partner =
    game.mode === "teams" && me ? game.players.find((p) => p.team === me.team && p.id !== me.id) : null;
  const unoPendingPlayer = game.unoPending && game.players.find((p) => p.id === game.unoPending.playerId);

  // Rotate seating so "me" (or seat 0 if spectating) always renders at the bottom.
  const meIndex = me ? game.players.findIndex((p) => p.id === playerId) : 0;
  const seatedPlayers = game.players.map((_, i) => game.players[(meIndex + i) % game.players.length]);
  const positions = SEAT_POSITIONS[game.players.length] || SEAT_POSITIONS[4];

  // Flies a clone of the clicked card from its hand position to the discard
  // pile, then applies the actual action once the animation lands — so the
  // turn only visibly advances after the card appears to hit the table.
  function animateAndSend(card, startRect, chosenColor) {
    if (!startRect || !pileRef.current) {
      sendAction({ type: "play", cardId: card.id, ...(chosenColor ? { chosenColor } : {}) });
      return;
    }
    const pileRect = pileRef.current.getBoundingClientRect();
    setFlyingCard({
      card,
      chosenColor,
      left: startRect.left,
      top: startRect.top,
      width: startRect.width,
      height: startRect.height,
      x: 0,
      y: 0,
    });
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setFlyingCard((f) =>
          f ? { ...f, x: pileRect.left - startRect.left, y: pileRect.top - startRect.top } : f
        );
      });
    });
    setTimeout(() => {
      sendAction({ type: "play", cardId: card.id, ...(chosenColor ? { chosenColor } : {}) });
      setFlyingCard(null);
    }, PLAY_ANIMATION_MS);
  }

  function playCard(card, event) {
    if (card.color === "wild") {
      setPendingWildCardId(card.id);
      setPendingWildRect(event.currentTarget.getBoundingClientRect());
      return;
    }
    animateAndSend(card, event.currentTarget.getBoundingClientRect());
  }

  function chooseWildColor(color) {
    const card = myHand.find((c) => c.id === pendingWildCardId);
    animateAndSend(card, pendingWildRect, color);
    setPendingWildCardId(null);
    setPendingWildRect(null);
  }

  return (
    <div className="w-full max-w-4xl">
      {game.mode === "teams" && (
        <div className="text-center text-sm mb-3 text-emerald-50/70">
          <span className="text-sky-400 font-semibold">Team A</span> (seats 1 &amp; 3) vs{" "}
          <span className="text-orange-400 font-semibold">Team B</span> (seats 2 &amp; 4)
        </div>
      )}

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
            <PlayerBadge
              key={p.id}
              player={p}
              cardCount={game.hands[p.id].length}
              isCurrent={currentPlayer?.id === p.id}
              isMe={p.id === playerId}
              team={game.mode === "teams" ? p.team : null}
              positionClass={positions[i]}
            />
          ))}

          {/* Center piles */}
          <div className="absolute inset-0 flex items-center justify-center gap-6">
            <div className="text-center">
              <Card card={{ color: "wild", type: "back" }} disabled onClick={() => {}} />
              <div className="text-[10px] text-emerald-50/70 mt-1">{game.deck.length} left</div>
            </div>
            <div className="text-center relative" ref={pileRef}>
              <Card card={top} disabled onClick={() => {}} />
              {game.activeColor && (
                <span
                  className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white/70 ${dotColor(
                    game.activeColor
                  )}`}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm my-4 text-amber-50/90">
        {isMyTurn
          ? game.pendingDraw > 0
            ? `Your turn — play a Draw card or draw ${game.pendingDraw}`
            : "Your turn"
          : `Waiting for ${currentPlayer?.name}…`}
      </div>

      {isMyTurn && (
        <div className="flex justify-center mb-4">
          <button
            className="wood-panel text-amber-50 rounded-lg px-4 py-2 text-sm font-semibold hover:brightness-110"
            onClick={() => sendAction({ type: "draw" })}
          >
            {game.pendingDraw > 0 ? `Draw ${game.pendingDraw}` : "Draw a card"}
          </button>
        </div>
      )}

      {unoPendingPlayer && !isSpectator && (
        <div className="flex flex-col items-center gap-1 mb-4">
          <button
            className="rounded-full bg-red-600 hover:bg-red-500 animate-pulse px-6 py-2 text-sm font-extrabold tracking-wide shadow-lg shadow-red-900/50"
            onClick={() => sendAction({ type: "callUno" })}
          >
            UNO!
          </button>
          <div className="text-xs text-emerald-50/50">
            {unoPendingPlayer.id === playerId
              ? "Call it before someone catches you!"
              : `${unoPendingPlayer.name} hasn't called UNO — catch them!`}
          </div>
        </div>
      )}

      {!isSpectator && (
        <div className="mt-4">
          <div className="text-xs text-emerald-50/50 mb-2 text-center">Your hand</div>
          <div className="flex flex-wrap gap-2 justify-center">
            {myHand
              .filter((card) => card.id !== flyingCard?.card.id)
              .map((card) => (
                <Card
                  key={card.id}
                  card={card}
                  onClick={(e) => playCard(card, e)}
                  disabled={!isMyTurn || !legalIds.has(card.id) || !!flyingCard}
                  dim={isMyTurn && !legalIds.has(card.id)}
                />
              ))}
          </div>
        </div>
      )}

      {partner && (
        <div className="mt-6">
          <div className="text-xs text-emerald-50/50 mb-2 text-center">{partner.name}'s hand (your teammate)</div>
          <div className="flex flex-wrap gap-2 justify-center opacity-90">
            {game.hands[partner.id].map((card) => (
              <Card key={card.id} card={card} disabled onClick={() => {}} size="sm" />
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 felt-panel rounded-lg p-3 max-h-32 overflow-y-auto text-xs text-emerald-50/70 space-y-1">
        {game.log.slice(-8).map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>

      {flyingCard && (
        <div
          className="fixed z-[60] pointer-events-none transition-transform ease-in"
          style={{
            left: flyingCard.left,
            top: flyingCard.top,
            width: flyingCard.width,
            height: flyingCard.height,
            transitionDuration: `${PLAY_ANIMATION_MS}ms`,
            transform: `translate(${flyingCard.x}px, ${flyingCard.y}px) rotate(${flyingCard.x || flyingCard.y ? 10 : 0}deg)`,
          }}
        >
          <Card
            card={flyingCard.chosenColor ? { ...flyingCard.card, color: flyingCard.chosenColor } : flyingCard.card}
            disabled
            onClick={() => {}}
          />
        </div>
      )}

      {pendingWildCardId && (
        <div className="fixed inset-0 bg-black/25 backdrop-blur-[1px] flex items-center justify-center z-50">
          <div className="card-face rounded-xl p-6 text-center shadow-2xl">
            <div className="mb-1 font-semibold">Choose a color</div>
            <div className="flex items-center justify-center gap-2 mb-4 text-xs text-slate-500">
              <span>Current top card:</span>
              <Card card={top} disabled size="sm" />
              {game.activeColor && (
                <span className={`inline-block w-3 h-3 rounded-full border border-white/50 ${dotColor(game.activeColor)}`} />
              )}
            </div>
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
