import { useState } from "react";
import { STATIONS, ROUTES, DESTINATIONS, NSW_OUTLINE, MAP_VIEWBOX } from "../game/ttr/geometry.js";
import { affordableColors } from "../game/ttr/ttr.js";
import { useAppearAnimation } from "../hooks/useAppearAnimation.js";

const STATION_BY_ID = Object.fromEntries(STATIONS.map((s) => [s.id, s]));
const DEST_BY_ID = Object.fromEntries(DESTINATIONS.map((d) => [d.id, d]));

// Light/dark pair per train color, used for the beveled route-segment and
// card gradients — mirrors the treatment CatanBoard uses for its hexes.
const TRAIN_GRADIENT = {
  red: ["#ef4444", "#7f1d1d"],
  orange: ["#fb923c", "#7c2d12"],
  yellow: ["#facc15", "#78350f"],
  green: ["#4ade80", "#14532d"],
  blue: ["#60a5fa", "#1e3a8a"],
  purple: ["#c084fc", "#4c1d95"],
  black: ["#52525b", "#0a0a0a"],
  white: ["#ffffff", "#94a3b8"],
  gray: ["#cbd5e1", "#475569"],
};
function TrainCard({ color, size = "md", onClick, disabled }) {
  const dims = size === "sm" ? "w-9 h-[52px]" : "w-14 h-20";
  const isLoco = color === "locomotive";
  const Tag = onClick ? "button" : "div";
  const interactiveProps = onClick ? { onClick, disabled } : {};
  return (
    <Tag
      {...interactiveProps}
      className={`${dims} rounded-md border-2 shadow-lg relative flex items-center justify-center overflow-hidden transition-transform ${
        onClick && !disabled ? "hover:-translate-y-1 cursor-pointer" : ""
      } ${disabled ? "opacity-40" : ""}`}
      style={{
        borderColor: "rgba(0,0,0,0.4)",
        background: isLoco
          ? "linear-gradient(135deg,#f59e0b,#facc15 35%,#fff 50%,#f59e0b 65%,#b45309)"
          : `linear-gradient(160deg, ${TRAIN_GRADIENT[color][0]}, ${TRAIN_GRADIENT[color][1]})`,
      }}
    >
      <span
        className="text-lg drop-shadow"
        style={{ filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.5))", color: color === "white" ? "#1f2937" : "#fff" }}
      >
        {isLoco ? "★" : "🚂"}
      </span>
    </Tag>
  );
}

function TrainCardStack({ color, count }) {
  return (
    <div className="relative">
      <TrainCard color={color} size="sm" />
      <span className="absolute -bottom-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 rounded-full bg-slate-900 border border-white/40 text-white text-[10px] font-bold flex items-center justify-center">
        {count}
      </span>
    </div>
  );
}

function DestinationTicketCard({ dest, complete }) {
  return (
    <div
      className="relative rounded-lg px-3 py-2 text-xs"
      style={{
        background: "repeating-linear-gradient(135deg, #fdfaf3, #fdfaf3 8px, #f3ecd8 8px, #f3ecd8 16px)",
        border: "1px dashed #8a7248",
        color: "#3a2c14",
      }}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold">
          🚄 {STATION_BY_ID[dest.a].name} → {STATION_BY_ID[dest.b].name}
        </span>
        <span
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
          style={{ background: "#8a5a1f" }}
        >
          {dest.points}
        </span>
      </div>
      {complete !== undefined && (
        <div className={`text-[10px] mt-0.5 font-semibold ${complete ? "text-emerald-700" : "text-red-700"}`}>
          {complete ? "Complete" : "Incomplete"}
        </div>
      )}
    </div>
  );
}

function routeSegments(route) {
  const a = STATION_BY_ID[route.a];
  const b = STATION_BY_ID[route.b];
  const segLenFrac = 1 / route.length;
  const gap = Math.min(0.16 * segLenFrac, 0.025);
  const segments = [];
  for (let i = 0; i < route.length; i++) {
    const t0 = i * segLenFrac + gap / 2;
    const t1 = (i + 1) * segLenFrac - gap / 2;
    const x1 = a.x + (b.x - a.x) * t0;
    const y1 = a.y + (b.y - a.y) * t0;
    const x2 = a.x + (b.x - a.x) * t1;
    const y2 = a.y + (b.y - a.y) * t1;
    segments.push({
      x1,
      y1,
      x2,
      y2,
      cx: (x1 + x2) / 2,
      cy: (y1 + y2) / 2,
      len: Math.hypot(x2 - x1, y2 - y1),
      angle: (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI,
    });
  }
  return segments;
}

function RouteTrack({ route, owner, ownerColor, clickable, onClick, justClaimed }) {
  const fillId = `train-grad-${route.color}`;
  return (
    <g className={justClaimed ? "animate-pop-in" : ""}>
      <line
        x1={STATION_BY_ID[route.a].x}
        y1={STATION_BY_ID[route.a].y}
        x2={STATION_BY_ID[route.b].x}
        y2={STATION_BY_ID[route.b].y}
        stroke="transparent"
        strokeWidth={18}
        style={{ cursor: clickable ? "pointer" : "default" }}
        onClick={clickable ? onClick : undefined}
      />
      {routeSegments(route).map((s, i) => (
        <rect
          key={i}
          x={s.cx - s.len / 2}
          y={s.cy - (owner ? 6.5 : 5)}
          width={s.len}
          height={owner ? 13 : 10}
          rx={3}
          transform={`rotate(${s.angle} ${s.cx} ${s.cy})`}
          fill={owner ? ownerColor : `url(#${fillId})`}
          stroke="rgba(0,0,0,0.45)"
          strokeWidth={1}
          opacity={owner ? 1 : clickable ? 0.92 : 0.42}
          pointerEvents="none"
        />
      ))}
    </g>
  );
}

function StationMarker({ station }) {
  const labelWidth = station.name.length * 6.4 + 12;
  return (
    <g>
      <rect
        x={station.x - labelWidth / 2}
        y={station.y - 27}
        width={labelWidth}
        height={15}
        rx={7}
        fill="rgba(253,247,231,0.88)"
        stroke="#8a6d3f"
        strokeWidth="0.75"
      />
      <text x={station.x} y={station.y - 16} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#3a2c14">
        {station.name}
      </text>
      <circle cx={station.x} cy={station.y} r="7" fill="url(#station-face)" stroke="#3a2c14" strokeWidth="1.5" />
      <circle cx={station.x} cy={station.y} r="2.4" fill="#3a2c14" />
    </g>
  );
}

function CompassRose({ x, y }) {
  return (
    <g transform={`translate(${x},${y})`} opacity="0.92">
      <circle r="34" fill="rgba(253,247,231,0.75)" stroke="#5c4326" strokeWidth="1.5" />
      <circle r="27" fill="none" stroke="#8a6d3f" strokeWidth="0.75" />
      <path d="M0,-30 L7,0 L0,30 L-7,0 Z" fill="#5c4326" />
      <path d="M-30,0 L0,7 L30,0 L0,-7 Z" fill="#c9a86a" stroke="#5c4326" strokeWidth="0.5" />
      <path d="M0,-16 L3.5,0 L0,16 L-3.5,0 Z" fill="#f3ecd8" />
      <path d="M-16,0 L0,3.5 L16,0 L0,-3.5 Z" fill="#e2d3a8" />
      <text x="0" y="-38" textAnchor="middle" fontSize="12" fontWeight="800" fill="#3a2c14">
        N
      </text>
      <text x="0" y="46" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5c4326">
        S
      </text>
      <text x="-42" y="4" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5c4326">
        W
      </text>
      <text x="42" y="4" textAnchor="middle" fontSize="9" fontWeight="700" fill="#5c4326">
        E
      </text>
    </g>
  );
}

// A soft, blurred triangle cluster to hint at ranges (Blue Mountains near
// the corridor, Snowy Mountains down south) without drawing real terrain.
function MountainHint({ x, y, scale = 1 }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`} opacity="0.35" filter="url(#soft-blur)">
      <path d="M-24,10 L-10,-14 L0,-2 L14,-20 L30,10 Z" fill="#5c4326" />
    </g>
  );
}

function MapCanvas({ game, playerId, isMyTurn, onClaim }) {
  const outlinePoints = NSW_OUTLINE.map(([x, y]) => `${x},${y}`).join(" ");
  const hand = game.hands[playerId] || [];
  const claimedIds = Object.keys(game.claimedRoutes);
  const justClaimed = useAppearAnimation(claimedIds);
  const [colorChoice, setColorChoice] = useState(null);

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
      <svg viewBox={MAP_VIEWBOX} className="w-full block">
        <defs>
          <radialGradient id="ocean" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#2a6f8f" />
            <stop offset="100%" stopColor="#12384a" />
          </radialGradient>
          <radialGradient id="nsw-land" cx="42%" cy="30%" r="85%">
            <stop offset="0%" stopColor="#ecdcae" />
            <stop offset="100%" stopColor="#c3a876" />
          </radialGradient>
          <radialGradient id="station-face" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#fff8e6" />
            <stop offset="100%" stopColor="#d8c48f" />
          </radialGradient>
          {Object.entries(TRAIN_GRADIENT).map(([color, [light, dark]]) => (
            <linearGradient key={color} id={`train-grad-${color}`} x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor={light} />
              <stop offset="100%" stopColor={dark} />
            </linearGradient>
          ))}
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" result="noise" />
            <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0.2  0 0 0 0 0.15  0 0 0 0 0.05  0 0 0 0.06 0" />
          </filter>
          <filter id="land-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.45" />
          </filter>
          <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <clipPath id="land-clip">
            <polygon points={outlinePoints} />
          </clipPath>
          <pattern id="waves" width="70" height="34" patternUnits="userSpaceOnUse">
            <path
              d="M0,10 Q17.5,0 35,10 T70,10 M0,24 Q17.5,14 35,24 T70,24"
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5"
            />
          </pattern>
        </defs>

        <rect x="0" y="0" width="920" height="705" fill="url(#ocean)" />
        <rect x="0" y="0" width="920" height="705" fill="url(#waves)" />

        <g filter="url(#land-shadow)">
          <polygon points={outlinePoints} fill="url(#nsw-land)" stroke="#5c4326" strokeWidth="4" />
        </g>
        <polygon points={outlinePoints} fill="#8a6d3f" opacity="0.5" clipPath="url(#land-clip)" filter="url(#grain)" />
        <g clipPath="url(#land-clip)">
          <MountainHint x={580} y={410} scale={1.3} />
          <MountainHint x={630} y={560} scale={1} />
        </g>
        <polygon points={outlinePoints} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

        {ROUTES.map((route) => {
          const owner = game.claimedRoutes[route.id];
          const ownerPlayer = owner && game.players.find((p) => p.id === owner);
          const clickable = !owner && isMyTurn && affordableColors(hand, route).length > 0;
          return (
            <RouteTrack
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
          <StationMarker key={s.id} station={s} />
        ))}

        <g transform="translate(130,60)" style={{ filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.35))" }}>
          <rect x="-105" y="-34" width="210" height="56" rx="8" fill="rgba(253,247,231,0.94)" stroke="#5c4326" strokeWidth="1.5" />
          <rect x="-99" y="-28" width="198" height="44" rx="5" fill="none" stroke="#c9a86a" strokeWidth="1" />
          <text x="0" y="-9" textAnchor="middle" fontSize="16" fontWeight="800" fill="#3a2c14" letterSpacing="1.5">
            🚂 NEW SOUTH WALES
          </text>
          <text x="0" y="10" textAnchor="middle" fontSize="10" fill="#6b5730" letterSpacing="3">
            TICKET TO RIDE
          </text>
        </g>

        <CompassRose x={844} y={65} />

        <rect x="46" y="6" width="828" height="693" fill="none" stroke="#3a2c14" strokeWidth="3" rx="10" />
        <rect x="54" y="14" width="812" height="677" fill="none" stroke="#c9a86a" strokeWidth="1.5" rx="7" />
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
                  className="flex flex-col items-center gap-1"
                >
                  <TrainCard color={c} size="sm" />
                  <span className="text-[10px] text-slate-600 capitalize">{c}</span>
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
              className={`flex items-center gap-2 rounded-lg border px-2 py-1.5 cursor-pointer text-left ${
                selected.includes(d.id) ? "border-indigo-500 bg-indigo-50" : "border-slate-300"
              }`}
            >
              <input type="checkbox" checked={selected.includes(d.id)} onChange={() => toggle(d.id)} />
              <div className="flex-1">
                <DestinationTicketCard dest={d} />
              </div>
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
    <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-6">
      <div>
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {game.players.map((p) => (
            <div
              key={p.id}
              className="wood-panel px-3 py-1.5 rounded-full text-xs text-amber-50 flex items-center gap-1.5"
              style={{ boxShadow: current?.id === p.id ? `0 0 0 2px ${p.color}, 0 4px 12px rgba(0,0,0,0.45)` : undefined }}
            >
              <span
                className="w-4 h-4 rounded-full inline-flex items-center justify-center text-[9px]"
                style={{ background: p.color }}
              >
                🚂
              </span>
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

        <MapCanvas game={game} playerId={playerId} isMyTurn={isMyTurn && !myPending} onClaim={claim} />

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
                <TrainCard
                  key={c.id}
                  color={c.color}
                  size="sm"
                  disabled={!isMyTurn || !!myPending}
                  onClick={() => sendAction({ type: "drawTrainCard", source: "faceup", index: i })}
                />
              ))}
              <button
                disabled={!isMyTurn || !!myPending}
                onClick={() => sendAction({ type: "drawTrainCard", source: "deck" })}
                className="w-9 h-[52px] rounded-md wood-panel text-amber-50 text-[9px] font-bold flex flex-col items-center justify-center disabled:opacity-40 leading-tight"
              >
                <span className="text-base">🎴</span>
                {game.deck.length} left
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
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(handCounts).map(([color, count]) => (
                <TrainCardStack key={color} color={color} count={count} />
              ))}
              {Object.keys(handCounts).length === 0 && <div className="text-xs text-emerald-50/40">No cards</div>}
            </div>
          </div>

          <div className="felt-panel rounded-xl p-3">
            <div className="text-xs text-emerald-50/60 mb-2">Your destination tickets</div>
            <div className="space-y-1.5">
              {myDestinations.map((d) => (
                <DestinationTicketCard key={d.id} dest={d} />
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
