import { useState } from "react";
import { BOARD } from "../game/catan/geometry.js";
import { RESOURCES, COST, playerVictoryPoints, bestRateFor } from "../game/catan/catan.js";

const RESOURCE_COLOR = {
  wood: "#2f6b3a",
  brick: "#b0522f",
  sheep: "#8fc94e",
  wheat: "#e5b93a",
  ore: "#8a8f99",
  desert: "#d8c79a",
};
const RESOURCE_ICON = { wood: "🌲", brick: "🧱", sheep: "🐑", wheat: "🌾", ore: "⛰️" };

function numberColor(n) {
  return n === 6 || n === 8 ? "#c0392b" : "#1f2937";
}

function hexPoints(cx, cy) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const a = (Math.PI / 180) * (60 * i - 30);
    pts.push(`${cx + 96 * Math.cos(a)},${cy + 96 * Math.sin(a)}`);
  }
  return pts.join(" ");
}

function vertexOpenForSettlement(game, vertexId) {
  if (game.buildings[vertexId]) return false;
  return !BOARD.vertexNeighbors[vertexId].some((n) => game.buildings[n]);
}

function vertexTouchesMyRoad(game, vertexId, playerId) {
  return BOARD.vertices[vertexId].edgeIds.some((eid) => game.roads[eid] === playerId);
}

function edgeTouchesMe(game, edge, playerId) {
  const b1 = game.buildings[edge.v1];
  const b2 = game.buildings[edge.v2];
  if ((b1 && b1.playerId === playerId) || (b2 && b2.playerId === playerId)) return true;
  return vertexTouchesMyRoad(game, edge.v1, playerId) || vertexTouchesMyRoad(game, edge.v2, playerId);
}

function Board({ game, mode, inSetup, onVertexClick, onEdgeClick, playerId }) {
  const xs = BOARD.tiles.map((t) => t.x);
  const ys = BOARD.tiles.map((t) => t.y);
  const minX = Math.min(...xs) - 140,
    maxX = Math.max(...xs) + 140;
  const minY = Math.min(...ys) - 140,
    maxY = Math.max(...ys) + 140;

  return (
    <svg viewBox={`${minX} ${minY} ${maxX - minX} ${maxY - minY}`} className="w-full max-w-2xl mx-auto">
      {BOARD.tiles.map((t) => {
        const resource = game.tileResource[t.id];
        return (
          <g key={t.id}>
            <polygon points={hexPoints(t.x, t.y)} fill={RESOURCE_COLOR[resource]} stroke="#1e293b" strokeWidth="2" />
            {resource !== "desert" && (
              <text x={t.x} y={t.y - 30} textAnchor="middle" fontSize="26">
                {RESOURCE_ICON[resource]}
              </text>
            )}
            {game.tileNumber[t.id] && (
              <g>
                <circle cx={t.x} cy={t.y + 15} r="20" fill="#fdf6e3" stroke="#1e293b" strokeWidth="1.5" />
                <text
                  x={t.x}
                  y={t.y + 23}
                  textAnchor="middle"
                  fontSize="20"
                  fontWeight="bold"
                  fill={numberColor(game.tileNumber[t.id])}
                >
                  {game.tileNumber[t.id]}
                </text>
              </g>
            )}
            {game.robberTileId === t.id && (
              <text x={t.x} y={t.y + 5} textAnchor="middle" fontSize="30">
                🥷
              </text>
            )}
          </g>
        );
      })}

      {BOARD.edges.map((e) => {
        const v1 = BOARD.vertices[e.v1];
        const v2 = BOARD.vertices[e.v2];
        const ownerId = game.roads[e.id];
        const owner = ownerId && game.players.find((p) => p.id === ownerId);
        const clickable = mode === "road" && !ownerId && edgeTouchesMe(game, e, playerId);
        return (
          <line
            key={e.id}
            x1={v1.x}
            y1={v1.y}
            x2={v2.x}
            y2={v2.y}
            stroke={owner ? owner.color : clickable ? "#94a3b8" : "#334155"}
            strokeWidth={owner ? 8 : clickable ? 10 : 3}
            strokeLinecap="round"
            opacity={owner ? 1 : clickable ? 0.6 : 0.25}
            style={{ cursor: clickable ? "pointer" : "default" }}
            onClick={clickable ? () => onEdgeClick(e.id) : undefined}
          />
        );
      })}

      {BOARD.vertices.map((v) => {
        const b = game.buildings[v.id];
        const owner = b && game.players.find((p) => p.id === b.playerId);
        const clickable =
          (mode === "settlement" &&
            vertexOpenForSettlement(game, v.id) &&
            (inSetup || vertexTouchesMyRoad(game, v.id, playerId))) ||
          (mode === "city" && b?.playerId === playerId && b.type === "settlement");
        return (
          <g key={v.id}>
            {clickable && (
              <circle
                cx={v.x}
                cy={v.y}
                r="14"
                fill="#94a3b8"
                opacity="0.55"
                style={{ cursor: "pointer" }}
                onClick={() => onVertexClick(v.id)}
              />
            )}
            {b && owner && b.type === "settlement" && (
              <rect x={v.x - 9} y={v.y - 9} width="18" height="18" fill={owner.color} stroke="#0f172a" strokeWidth="1.5" />
            )}
            {b && owner && b.type === "city" && (
              <polygon
                points={`${v.x},${v.y - 15} ${v.x + 13},${v.y - 4} ${v.x + 13},${v.y + 11} ${v.x - 13},${v.y + 11} ${v.x - 13},${v.y - 4}`}
                fill={owner.color}
                stroke="#0f172a"
                strokeWidth="1.5"
              />
            )}
          </g>
        );
      })}

      {BOARD.ports.map((port, i) => {
        const v1 = BOARD.vertices[port.v1];
        const v2 = BOARD.vertices[port.v2];
        const mx = (v1.x + v2.x) / 2;
        const my = (v1.y + v2.y) / 2;
        const dx = mx - 0,
          dy = my - 0;
        const len = Math.hypot(dx, dy) || 1;
        const ox = mx + (dx / len) * 30;
        const oy = my + (dy / len) * 30;
        return (
          <text key={i} x={ox} y={oy} textAnchor="middle" fontSize="12" fill="#e2e8f0">
            {port.type === "3:1" ? "3:1" : `${RESOURCE_ICON[port.type]}2:1`}
          </text>
        );
      })}
    </svg>
  );
}

function ResRow({ resources, onClick, disabledCheck }) {
  return (
    <div className="flex gap-2 justify-center flex-wrap">
      {RESOURCES.map((r) => (
        <button
          key={r}
          disabled={disabledCheck?.(r)}
          onClick={() => onClick?.(r)}
          className="flex flex-col items-center px-2 py-1 rounded-lg bg-slate-800 border border-slate-700 disabled:opacity-30 hover:bg-slate-700 min-w-[48px]"
        >
          <span className="text-lg">{RESOURCE_ICON[r]}</span>
          <span className="text-xs">{resources[r] || 0}</span>
        </button>
      ))}
    </div>
  );
}

export default function CatanBoard({ room }) {
  const { game, playerId, sendAction } = room;
  const [mode, setMode] = useState(null);
  const [tradeGive, setTradeGive] = useState(null);
  const [tradeGet, setTradeGet] = useState(null);
  const [proposeGive, setProposeGive] = useState({});
  const [proposeWant, setProposeWant] = useState({});
  const [showPropose, setShowPropose] = useState(false);
  const [devCardChoice, setDevCardChoice] = useState(null);
  const [robberTarget, setRobberTarget] = useState(null);
  const [pendingKnightIndex, setPendingKnightIndex] = useState(null);
  const [yopFirst, setYopFirst] = useState(null);

  function confirmRobberMove(extra) {
    const victims = new Set();
    for (const v of BOARD.vertices) {
      if (!v.tileIds.includes(robberTarget)) continue;
      const b = game.buildings[v.id];
      if (b && b.playerId !== playerId) victims.add(b.playerId);
    }
    const targetPlayerId = [...victims][0] || null;
    if (extra) {
      sendAction({ type: "playDevCard", cardIndex: extra, tileId: robberTarget, targetPlayerId });
    } else {
      sendAction({ type: "moveRobber", tileId: robberTarget, targetPlayerId });
    }
    setRobberTarget(null);
    setPendingKnightIndex(null);
  }

  if (!game) return null;

  const me = game.players.find((p) => p.id === playerId);
  const isSpectator = !me;
  const current = game.players[game.currentPlayerIndex];
  const isMyTurn = current?.id === playerId;
  const inSetup = game.phase === "setup1" || game.phase === "setup2";
  const myRes = game.resources[playerId] || {};
  const myDiscardNeeded = game.mustDiscard[playerId];
  const [discardPick, setDiscardPick] = useState({});

  // During setup there's no manual mode toggle — the board just walks you
  // through "place a settlement" then "place a road" automatically.
  let effectiveMode = mode;
  if (inSetup && isMyTurn) {
    const expected = game.phase === "setup1" ? 1 : 2;
    const mySettlements = Object.values(game.buildings).filter((b) => b.playerId === playerId).length;
    const myRoads = Object.values(game.roads).filter((r) => r === playerId).length;
    effectiveMode = mySettlements < expected ? "settlement" : myRoads < expected ? "road" : null;
  }

  function vertexClick(vertexId) {
    if (effectiveMode === "settlement") sendAction({ type: "buildSettlement", vertexId });
    if (effectiveMode === "city") sendAction({ type: "buildCity", vertexId });
    if (!inSetup) setMode(null);
  }
  function edgeClick(edgeId) {
    if (effectiveMode === "road") sendAction({ type: "buildRoad", edgeId });
    if (!inSetup) setMode(null);
  }

  function submitDiscard() {
    const total = Object.values(discardPick).reduce((a, b) => a + b, 0);
    if (total !== myDiscardNeeded) return;
    sendAction({ type: "discard", resources: discardPick });
    setDiscardPick({});
  }

  return (
    <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
      <div>
        <div className="flex flex-wrap gap-2 justify-center mb-3">
          {game.players.map((p) => (
            <div
              key={p.id}
              className="px-3 py-1.5 rounded-full text-xs border flex items-center gap-1.5"
              style={{
                borderColor: p.color,
                background: current?.id === p.id ? `${p.color}33` : "transparent",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full inline-block" style={{ background: p.color }} />
              {p.isAI && "🤖 "}
              {p.name} · {playerVictoryPoints(game, p.id)}VP
            </div>
          ))}
        </div>

        <div className="text-center text-sm mb-3 text-slate-300">
          {game.status === "finished"
            ? game.log[game.log.length - 1]
            : inSetup
            ? `${current?.name} — place a settlement then a road`
            : game.phase === "roll"
            ? isMyTurn
              ? "Your turn — roll the dice"
              : `Waiting for ${current?.name} to roll`
            : game.pendingRobber
            ? isMyTurn
              ? "Move the robber — click a tile"
              : `${current?.name} is moving the robber`
            : isMyTurn
            ? "Your turn — build, trade, or end turn"
            : `Waiting for ${current?.name}`}
          {game.lastDice && !inSetup && ` (rolled ${game.lastDice[0]}+${game.lastDice[1]})`}
        </div>

        <Board
          game={game}
          mode={game.pendingRobber && isMyTurn ? "robber" : effectiveMode}
          inSetup={inSetup}
          playerId={playerId}
          onVertexClick={vertexClick}
          onEdgeClick={edgeClick}
        />

        {((game.pendingRobber && isMyTurn) || pendingKnightIndex !== null) && (
          <div className="mt-3 text-center">
            <div className="text-xs text-slate-400 mb-2">Choose a tile to move the robber to, then confirm.</div>
            <select
              className="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-sm mr-2"
              value={robberTarget ?? ""}
              onChange={(e) => setRobberTarget(Number(e.target.value))}
            >
              <option value="">Choose a tile…</option>
              {BOARD.tiles.map((t) => (
                <option key={t.id} value={t.id} disabled={t.id === game.robberTileId}>
                  Tile {t.id} ({game.tileResource[t.id]})
                </option>
              ))}
            </select>
            <button
              className="text-xs bg-red-700 hover:bg-red-600 px-3 py-1.5 rounded-lg disabled:opacity-30"
              disabled={robberTarget === null}
              onClick={() => confirmRobberMove(pendingKnightIndex)}
            >
              Confirm robber move
            </button>
          </div>
        )}

        <div className="mt-4 bg-slate-800/60 rounded-lg p-3 max-h-32 overflow-y-auto text-xs text-slate-400 space-y-1">
          {game.log.slice(-10).map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </div>
      </div>

      {!isSpectator && (
        <div className="space-y-4">
          <div className="bg-slate-800 rounded-xl p-3 border border-slate-700">
            <div className="text-xs text-slate-500 mb-2">Your resources</div>
            <ResRow resources={myRes} />
          </div>

          {myDiscardNeeded > 0 && (
            <div className="bg-red-900/40 border border-red-700 rounded-xl p-3">
              <div className="text-xs mb-2">Discard {myDiscardNeeded} cards (rolled a 7)</div>
              <div className="flex gap-2 flex-wrap justify-center mb-2">
                {RESOURCES.map((r) => (
                  <div key={r} className="flex flex-col items-center">
                    <span className="text-xs">{RESOURCE_ICON[r]}</span>
                    <div className="flex items-center gap-1">
                      <button
                        className="text-xs bg-slate-700 rounded px-1"
                        onClick={() => setDiscardPick((p) => ({ ...p, [r]: Math.max(0, (p[r] || 0) - 1) }))}
                      >
                        -
                      </button>
                      <span className="text-xs w-4 text-center">{discardPick[r] || 0}</span>
                      <button
                        className="text-xs bg-slate-700 rounded px-1"
                        disabled={(discardPick[r] || 0) >= (myRes[r] || 0)}
                        onClick={() => setDiscardPick((p) => ({ ...p, [r]: (p[r] || 0) + 1 }))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button
                className="w-full text-xs bg-red-700 hover:bg-red-600 rounded-lg py-1.5 disabled:opacity-30"
                disabled={Object.values(discardPick).reduce((a, b) => a + b, 0) !== myDiscardNeeded}
                onClick={submitDiscard}
              >
                Confirm discard
              </button>
            </div>
          )}

          {isMyTurn && game.phase === "roll" && !inSetup && (
            <button
              className="w-full rounded-lg bg-indigo-600 hover:bg-indigo-500 py-2.5 font-semibold"
              onClick={() => sendAction({ type: "rollDice" })}
            >
              Roll dice
            </button>
          )}

          {isMyTurn && game.phase === "actions" && !game.pendingRobber && (
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <button
                  className={`text-xs rounded-lg py-2 border ${mode === "road" ? "bg-indigo-700 border-indigo-400" : "bg-slate-800 border-slate-700"}`}
                  onClick={() => setMode(mode === "road" ? null : "road")}
                >
                  Road
                </button>
                <button
                  className={`text-xs rounded-lg py-2 border ${mode === "settlement" ? "bg-indigo-700 border-indigo-400" : "bg-slate-800 border-slate-700"}`}
                  onClick={() => setMode(mode === "settlement" ? null : "settlement")}
                >
                  Settlement
                </button>
                <button
                  className={`text-xs rounded-lg py-2 border ${mode === "city" ? "bg-indigo-700 border-indigo-400" : "bg-slate-800 border-slate-700"}`}
                  onClick={() => setMode(mode === "city" ? null : "city")}
                >
                  City
                </button>
              </div>
              <div className="text-[10px] text-slate-500 text-center">
                Road {COST.road.wood}🌲{COST.road.brick}🧱 · Settlement 1 each · City {COST.city.wheat}🌾{COST.city.ore}⛰️
              </div>

              <button
                className="w-full text-xs bg-purple-700 hover:bg-purple-600 rounded-lg py-2"
                onClick={() => sendAction({ type: "buyDevCard" })}
              >
                Buy dev card ({game.devDeck.length} left)
              </button>

              {game.devCards[playerId]?.filter((c) => !c.played && c.type !== "victoryPoint").length > 0 && (
                <div className="bg-slate-800 rounded-lg p-2 border border-slate-700">
                  <div className="text-[10px] text-slate-500 mb-1">Play a dev card</div>
                  <div className="flex flex-wrap gap-1">
                    {game.devCards[playerId].map(
                      (c, i) =>
                        !c.played &&
                        c.type !== "victoryPoint" && (
                          <button
                            key={i}
                            disabled={c.boughtOnTurn === game.turnNumber || game.devCardPlayedThisTurn}
                            className="text-[10px] bg-slate-700 rounded px-2 py-1 disabled:opacity-30"
                            onClick={() => setDevCardChoice(i)}
                          >
                            {c.type}
                          </button>
                        )
                    )}
                  </div>
                </div>
              )}

              <div className="bg-slate-800 rounded-lg p-2 border border-slate-700 space-y-1">
                <div className="text-[10px] text-slate-500">Bank trade</div>
                <div className="flex items-center gap-1 justify-center text-xs">
                  <select className="bg-slate-900 rounded px-1 py-0.5" value={tradeGive || ""} onChange={(e) => setTradeGive(e.target.value)}>
                    <option value="">give…</option>
                    {RESOURCES.map((r) => (
                      <option key={r} value={r}>
                        {r} ({myRes[r] || 0})
                      </option>
                    ))}
                  </select>
                  <span>→</span>
                  <select className="bg-slate-900 rounded px-1 py-0.5" value={tradeGet || ""} onChange={(e) => setTradeGet(e.target.value)}>
                    <option value="">get…</option>
                    {RESOURCES.filter((r) => r !== tradeGive).map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <button
                  className="w-full text-xs bg-slate-700 hover:bg-slate-600 rounded py-1 disabled:opacity-30"
                  disabled={!tradeGive || !tradeGet || (myRes[tradeGive] || 0) < bestRateFor(game, playerId, tradeGive)}
                  onClick={() => {
                    sendAction({ type: "bankTrade", give: tradeGive, giveQty: bestRateFor(game, playerId, tradeGive), get: tradeGet });
                    setTradeGive(null);
                    setTradeGet(null);
                  }}
                >
                  Trade {tradeGive ? `${bestRateFor(game, playerId, tradeGive)}:1` : ""}
                </button>
              </div>

              <button className="w-full text-xs bg-slate-800 border border-slate-700 rounded-lg py-1.5" onClick={() => setShowPropose(true)}>
                Propose player trade
              </button>

              <button className="w-full rounded-lg bg-slate-700 hover:bg-slate-600 py-2 font-semibold" onClick={() => sendAction({ type: "endTurn" })}>
                End turn
              </button>
            </div>
          )}

          {game.pendingTrade && game.pendingTrade.fromPlayerId === playerId && (
            <div className="bg-amber-900/30 border border-amber-700 rounded-lg p-2 text-xs">
              Waiting for responses to your trade offer…
              <button className="block mt-1 text-amber-300 underline" onClick={() => sendAction({ type: "cancelTrade" })}>
                Cancel offer
              </button>
            </div>
          )}

          {game.pendingTrade && game.pendingTrade.fromPlayerId !== playerId && !(playerId in game.pendingTrade.responses) && (
            <div className="bg-amber-900/30 border border-amber-700 rounded-lg p-2 text-xs">
              <div className="mb-1">
                {game.players.find((p) => p.id === game.pendingTrade.fromPlayerId)?.name} offers:{" "}
                {Object.entries(game.pendingTrade.give)
                  .map(([r, q]) => `${q} ${r}`)
                  .join(", ")}{" "}
                for{" "}
                {Object.entries(game.pendingTrade.want)
                  .map(([r, q]) => `${q} ${r}`)
                  .join(", ")}
              </div>
              <div className="flex gap-2">
                <button className="text-xs bg-emerald-700 hover:bg-emerald-600 rounded px-2 py-1" onClick={() => sendAction({ type: "respondTrade", accept: true })}>
                  Accept
                </button>
                <button className="text-xs bg-slate-700 hover:bg-slate-600 rounded px-2 py-1" onClick={() => sendAction({ type: "respondTrade", accept: false })}>
                  Decline
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {devCardChoice !== null && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-600 text-center space-y-2">
            {(() => {
              const card = game.devCards[playerId][devCardChoice];
              if (card.type === "knight") {
                return (
                  <>
                    <div className="font-semibold mb-2">Play Knight?</div>
                    <div className="text-xs text-slate-400 mb-2">You'll pick where to move the robber next.</div>
                    <button
                      className="bg-indigo-600 px-4 py-2 rounded-lg text-sm"
                      onClick={() => {
                        setPendingKnightIndex(devCardChoice);
                        setDevCardChoice(null);
                      }}
                    >
                      Confirm
                    </button>
                  </>
                );
              }
              if (card.type === "roadBuilding") {
                return (
                  <>
                    <div className="font-semibold mb-2">Play Road Building?</div>
                    <div className="text-xs text-slate-400 mb-2">Grants 2 free roads — build them from the Road button.</div>
                    <button
                      className="bg-indigo-600 px-4 py-2 rounded-lg text-sm"
                      onClick={() => {
                        sendAction({ type: "playDevCard", cardIndex: devCardChoice });
                        setDevCardChoice(null);
                      }}
                    >
                      Confirm
                    </button>
                  </>
                );
              }
              if (card.type === "monopoly") {
                return (
                  <>
                    <div className="font-semibold mb-2">Monopoly — pick a resource</div>
                    <div className="flex gap-2 justify-center">
                      {RESOURCES.map((r) => (
                        <button
                          key={r}
                          className="bg-slate-700 px-2 py-1 rounded text-xs"
                          onClick={() => {
                            sendAction({ type: "playDevCard", cardIndex: devCardChoice, resource: r });
                            setDevCardChoice(null);
                          }}
                        >
                          {RESOURCE_ICON[r]}
                        </button>
                      ))}
                    </div>
                  </>
                );
              }
              // yearOfPlenty
              return (
                <>
                  <div className="font-semibold mb-2">
                    Year of Plenty — pick {yopFirst ? "your second resource" : "your first resource"}
                  </div>
                  <div className="flex gap-2 justify-center">
                    {RESOURCES.map((r) => (
                      <button
                        key={r}
                        className="bg-slate-700 px-2 py-1 rounded text-xs"
                        onClick={() => {
                          if (!yopFirst) {
                            setYopFirst(r);
                          } else {
                            sendAction({ type: "playDevCard", cardIndex: devCardChoice, resource1: yopFirst, resource2: r });
                            setYopFirst(null);
                            setDevCardChoice(null);
                          }
                        }}
                      >
                        {RESOURCE_ICON[r]}
                      </button>
                    ))}
                  </div>
                </>
              );
            })()}
            <button
              className="text-xs text-slate-400 mt-2 block mx-auto"
              onClick={() => {
                setDevCardChoice(null);
                setYopFirst(null);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {showPropose && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-slate-800 rounded-xl p-6 border border-slate-600 text-center space-y-3 w-80">
            <div className="font-semibold">Propose a trade</div>
            <div>
              <div className="text-xs text-slate-400 mb-1">You give</div>
              <ResRow resources={proposeGive} onClick={(r) => setProposeGive((p) => ({ ...p, [r]: ((p[r] || 0) + 1) % 4 }))} />
            </div>
            <div>
              <div className="text-xs text-slate-400 mb-1">You want</div>
              <ResRow resources={proposeWant} onClick={(r) => setProposeWant((p) => ({ ...p, [r]: ((p[r] || 0) + 1) % 4 }))} />
            </div>
            <div className="flex gap-2">
              <button
                className="flex-1 bg-indigo-600 rounded-lg py-2 text-sm"
                onClick={() => {
                  const give = Object.fromEntries(Object.entries(proposeGive).filter(([, v]) => v > 0));
                  const want = Object.fromEntries(Object.entries(proposeWant).filter(([, v]) => v > 0));
                  sendAction({ type: "proposeTrade", give, want });
                  setProposeGive({});
                  setProposeWant({});
                  setShowPropose(false);
                }}
              >
                Offer
              </button>
              <button
                className="flex-1 bg-slate-700 rounded-lg py-2 text-sm"
                onClick={() => {
                  setProposeGive({});
                  setProposeWant({});
                  setShowPropose(false);
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
