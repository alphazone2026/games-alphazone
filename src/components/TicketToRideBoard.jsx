import { useState } from "react";
import { STATIONS, ROUTES, DESTINATIONS, NSW_OUTLINE } from "../game/ttr/geometry.js";
import { affordableColors } from "../game/ttr/ttr.js";
import { useAppearAnimation } from "../hooks/useAppearAnimation.js";

const STATION_BY_ID = Object.fromEntries(STATIONS.map((s) => [s.id, s]));
const DEST_BY_ID = Object.fromEntries(DESTINATIONS.map((d) => [d.id, d]));

const TRAIN_COLOR_HEX = {
  red: "#dc2626",
  orange: "#ea580c",
  yellow: "#ca8a04",
  green: "#16a34a",
  blue: "#2563eb",
  purple: "#7c3aed",
  black: "#27272a",
  white: "#e2e8f0",
  gray: "#94a3b8",
  locomotive: "#f59e0b",
};

function ColorSwatch({ color, count, size = "md", showCount = true }) {
  const dims = size === "sm" ? "w-7 h-7 text-[10px]" : "w-10 h-10 text-xs";
  return (
    <div
      className={`${dims} rounded-md flex items-center justify-center font-bold border-2 shadow`}
      style={{
        background: TRAIN_COLOR_HEX[color],
        borderColor: "rgba(0,0,0,0.35)",
        color: color === "white" || color === "yellow" ? "#1f2937" : "#fff",
      }}
    >
      {color === "locomotive" ? "★" : showCount ? count : ""}
    </div>
  );
}

function routeSegments(route) {
  const a = STATION_BY_ID[route.a];
  const b = STATION_BY_ID[route.b];
  const segLenFrac = 1 / route.length;
  const gap = Math.min(0.18 * segLenFrac, 0.03);
  const segments = [];
  for (let i = 0; i < route.length; i++) {
    const t0 = i * segLenFrac + gap / 2;
    const t1 = (i + 1) * segLenFrac - gap / 2;
    segments.push({
      x1: a.x + (b.x - a.x) * t0,
      y1: a.y + (b.y - a.y) * t0,
      x2: a.x + (b.x - a.x) * t1,
      y2: a.y + (b.y - a.y) * t1,
    });
  }
  return segments;
}

function RouteLine({ route, owner, ownerColor, clickable, onClick, justClaimed }) {
  const color = owner ? ownerColor : TRAIN_COLOR_HEX[route.color];
  return (
    <g className={justClaimed ? "animate-pop-in" : ""}>
      <line
        x1={STATION_BY_ID[route.a].x}
        y1={STATION_BY_ID[route.a].y}
        x2={STATION_BY_ID[route.b].x}
        y2={STATION_BY_ID[route.b].y}
        stroke="transparent"
        strokeWidth={16}
        style={{ cursor: clickable ? "pointer" : "default" }}
        onClick={clickable ? onClick : undefined}
      />
      {routeSegments(route).map((s, i) => (
        <line
          key={i}
          x1={s.x1}
          y1={s.y1}
          x2={s.x2}
          y2={s.y2}
          stroke={color}
          strokeWidth={owner ? 9 : 7}
          strokeLinecap="round"
          opacity={owner ? 1 : clickable ? 0.85 : 0.4}
          pointerEvents="none"
        />
      ))}
    </g>
  );
}

function Map({ game, playerId, isMyTurn, onClaim }) {
  const outlinePoints = NSW_OUTLINE.map(([x, y]) => `${x},${y}`).join(" ");
  const hand = game.hands[playerId] || [];
  const claimedIds = Object.keys(game.claimedRoutes);
  const justClaimed = useAppearAnimation(claimedIds);
  const [colorChoice, setColorChoice] = useState(null); // { route, options }

  function handleRouteClick(route) {
    const owner = game.claimedRoutes[route.id];
    if (owner || !isMyTurn) return;
    const options = affordableColors(hand, route);
    if (options.length === 0) return;
    if (options.length === 1) {
      onClaim(route.id, options[0]);
    } else {
      setColorChoice({ route, options });
    }
  }

  return (
    <div className="wood-frame rounded-2xl p-3 relative">
      <svg viewBox="0 30 900 650" className="w-full block">
        <defs>
          <radialGradient id="nsw-land" cx="45%" cy="35%" r="80%">
            <stop offset="0%" stopColor="#e9d9ae" />
            <stop offset="100%" stopColor="#c9b184" />
          </radialGradient>
        </defs>
        <polygon points={outlinePoints} fill="url(#nsw-land)" stroke="#5c4326" strokeWidth="4" />
        <polygon points={outlinePoints} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

        {ROUTES.map((route) => {
          const owner = game.claimedRoutes[route.id];
          const ownerPlayer = owner && game.players.find((p) => p.id === owner);
          const clickable = !owner && isMyTurn && affordableColors(hand, route).length > 0;
          return (
            <RouteLine
              key={route.id}
              route={route}
              owner={owner}
              ownerColor={ownerPlayer?.color}
              clickable={clickable}
              justClaimed={justClaimed.has(route.id)}
              onClick={() => handleRouteClick(route)}
            />
          );
        })}

        {STATIONS.map((s) => (
          <g key={s.id}>
            <circle cx={s.x} cy={s.y} r="6" fill="#3f2e18" stroke="#f5e9c8" strokeWidth="1.5" />
            <text
              x={s.x}
              y={s.y - 10}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="#2b1d0e"
              style={{ paintOrder: "stroke", stroke: "#f5e9c8", strokeWidth: 3 }}
            >
              {s.name}
            </text>
          </g>
        ))}
      </svg>

      {colorChoice && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl z-20">
          <div className="card-face rounded-xl p-5 text-center shadow-2xl">
            <div className="font-semibold mb-3">
              Claim {STATION_BY_ID[colorChoice.route.a].name} — {STATION_BY_ID[colorChoice.route.b].name} with…
            </div>
            <div className="flex gap-2 justify-center flex-wrap max-w-xs">
              {colorChoice.options.map((c) => (
                <button
                  key={c}
                  onClick={() => {
                    onClaim(colorChoice.route.id, c);
                    setColorChoice(null);
                  }}
                >
                  <ColorSwatch color={c} count={colorChoice.route.length} />
                </button>
              ))}
            </div>
            <button className="text-xs text-slate-500 mt-3" onClick={() => setColorChoice(null)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function DestinationChoiceModal({ pending, onConfirm }) {
  const [selected, setSelected] = useState([]);
  const offered = pending.offered.map((id) => DEST_BY_ID[id]);

  function toggle(id) {
    setSelected((sel) => (sel.includes(id) ? sel.filter((x) => x !== id) : [...sel, id]));
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="card-face rounded-xl p-6 text-center space-y-3 w-96">
        <div className="font-semibold">
          {pending.initial ? "Choose your starting destination tickets" : "Keep new destination tickets"}
        </div>
        <div className="text-xs text-slate-600">
          Keep at least {pending.minKeep} — kept tickets score if completed, but cost points if they aren't by
          game end.
        </div>
        <div className="space-y-2">
          {offered.map((d) => (
            <label
              key={d.id}
              className={`flex items-center justify-between gap-2 rounded-lg border px-3 py-2 cursor-pointer text-sm ${
                selected.includes(d.id) ? "border-indigo-500 bg-indigo-50" : "border-slate-300"
              }`}
            >
              <span>
                {STATION_BY_ID[d.a].name} → {STATION_BY_ID[d.b].name}
              </span>
              <span className="flex items-center gap-2">
                <span className="font-bold">{d.points}pts</span>
                <input type="checkbox" checked={selected.includes(d.id)} onChange={() => toggle(d.id)} />
              </span>
            </label>
          ))}
        </div>
        <button
          className="w-full rounded-lg bg-indigo-600 text-white py-2 font-semibold disabled:opacity-30"
          disabled={selected.length < pending.minKeep}
          onClick={() => onConfirm(selected)}
        >
          Confirm ({selected.length}/{pending.minKeep} min)
        </button>
      </div>
    </div>
  );
}

export default function TicketToRideBoard({ room }) {
  const { game, playerId, sendAction } = room;
  if (!game) return null;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const current = game.players[game.currentPlayerIndex];
  const isMyTurn = current?.id === playerId;
  const myPending = game.pendingDestinationChoice[playerId];
  const myHand = game.hands[playerId] || [];
  const myDestinations = game.destinationHands[playerId] || [];

  const handCounts = {};
  myHand.forEach((c) => {
    handCounts[c.color] = (handCounts[c.color] || 0) + 1;
  });

  function claim(routeId, colorUsed) {
    sendAction({ type: "claimRoute", routeId, colorUsed });
  }

  return (
    <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
      <div>
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {game.players.map((p) => (
            <div
              key={p.id}
              className="wood-panel px-3 py-1.5 rounded-full text-xs text-amber-50 flex items-center gap-1.5"
              style={{ boxShadow: current?.id === p.id ? `0 0 0 2px ${p.color}, 0 4px 12px rgba(0,0,0,0.45)` : undefined }}
            >
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: p.color }} />
              {p.isAI && "🤖 "}
              {p.name} · {game.trainsLeft[p.id]} trains · {(game.destinationHands[p.id] || []).length} tickets
            </div>
          ))}
        </div>

        <div className="text-center text-sm mb-3 text-amber-50/90">
          {myPending
            ? "Choose your destination tickets"
            : isMyTurn
            ? "Your turn — draw train cards, draw tickets, or claim a route"
            : `Waiting for ${current?.name}…`}
        </div>

        <Map game={game} playerId={playerId} isMyTurn={isMyTurn && !myPending} onClaim={claim} />

        <div className="mt-4 felt-panel rounded-lg p-3 max-h-32 overflow-y-auto text-xs text-emerald-50/70 space-y-1">
          {game.log.slice(-10).map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      {!isSpectator && (
        <div className="space-y-4">
          <div className="felt-panel rounded-xl p-3">
            <div className="text-xs text-emerald-50/60 mb-2">Face-up train cards</div>
            <div className="flex flex-wrap gap-1.5 justify-center mb-3">
              {game.faceUp.map((c, i) => (
                <button
                  key={c.id}
                  disabled={!isMyTurn || !!myPending}
                  onClick={() => sendAction({ type: "drawTrainCard", source: "faceup", index: i })}
                  className="disabled:opacity-40"
                >
                  <ColorSwatch color={c.color} count={0} showCount={false} />
                </button>
              ))}
              <button
                disabled={!isMyTurn || !!myPending}
                onClick={() => sendAction({ type: "drawTrainCard", source: "deck" })}
                className="w-10 h-10 rounded-md wood-panel text-amber-50 text-[9px] font-bold flex items-center justify-center disabled:opacity-40"
              >
                {game.deck.length}
                <br />
                left
              </button>
            </div>
            <button
              className="w-full text-xs wood-panel text-amber-50 rounded-lg py-1.5 disabled:opacity-30"
              disabled={!isMyTurn || !!myPending || game.destinationDeck.length < 3}
              onClick={() => sendAction({ type: "drawDestinationTickets" })}
            >
              Draw destination tickets
            </button>
          </div>

          <div className="felt-panel rounded-xl p-3">
            <div className="text-xs text-emerald-50/60 mb-2">Your train cards</div>
            <div className="flex flex-wrap gap-1.5 justify-center">
              {Object.entries(handCounts).map(([color, count]) => (
                <ColorSwatch key={color} color={color} count={count} size="sm" />
              ))}
              {Object.keys(handCounts).length === 0 && <div className="text-xs text-emerald-50/40">No cards</div>}
            </div>
          </div>

          <div className="felt-panel rounded-xl p-3">
            <div className="text-xs text-emerald-50/60 mb-2">Your destination tickets</div>
            <div className="space-y-1.5">
              {myDestinations.map((d) => (
                <div key={d.id} className="text-xs text-amber-50/90 flex items-center justify-between">
                  <span>
                    {STATION_BY_ID[d.a].name} → {STATION_BY_ID[d.b].name}
                  </span>
                  <span className="font-bold">{d.points}</span>
                </div>
              ))}
              {myDestinations.length === 0 && <div className="text-xs text-emerald-50/40">None yet</div>}
            </div>
          </div>
        </div>
      )}

      {myPending && (
        <DestinationChoiceModal
          pending={myPending}
          onConfirm={(keepIds) => sendAction({ type: "chooseDestinationTickets", keepIds })}
        />
      )}
    </div>
  );
}
