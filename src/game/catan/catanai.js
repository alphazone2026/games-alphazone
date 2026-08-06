import { BOARD } from "./geometry.js";
import { RESOURCES, COST, bestRateFor } from "./catan.js";

const PIPS = { 2: 1, 3: 2, 4: 3, 5: 4, 6: 5, 8: 5, 9: 4, 10: 3, 11: 2, 12: 1 };

function pipValue(game, vertexId) {
  const v = BOARD.vertices[vertexId];
  return v.tileIds.reduce((sum, tileId) => {
    if (tileId === game.robberTileId) return sum;
    const num = game.tileNumber[tileId];
    return sum + (num ? PIPS[num] || 0 : 0);
  }, 0);
}

function isSettlementSpotOpen(game, vertexId) {
  if (game.buildings[vertexId]) return false;
  return !BOARD.vertexNeighbors[vertexId].some((n) => game.buildings[n]);
}

function myEdges(game, playerId) {
  return BOARD.edges.filter((e) => game.roads[e.id] === playerId);
}

function mySettlementVertices(game, playerId, type) {
  return Object.entries(game.buildings)
    .filter(([, b]) => b.playerId === playerId && (!type || b.type === type))
    .map(([v]) => Number(v));
}

function canAfford(res, cost) {
  return Object.entries(cost).every(([k, v]) => (res[k] || 0) >= v);
}

function pickBestOpenVertex(game) {
  let best = null;
  let bestScore = -1;
  for (const v of BOARD.vertices) {
    if (!isSettlementSpotOpen(game, v.id)) continue;
    const score = pipValue(game, v.id);
    if (score > bestScore) {
      bestScore = score;
      best = v.id;
    }
  }
  return best;
}

function pickRoadFromVertex(game, playerId, vertexId) {
  const v = BOARD.vertices[vertexId];
  const openEdges = v.edgeIds.filter((eid) => !game.roads[eid]);
  if (openEdges.length === 0) return null;
  // Prefer the edge whose far end has the best future settlement potential.
  let best = openEdges[0];
  let bestScore = -1;
  for (const eid of openEdges) {
    const e = BOARD.edges[eid];
    const far = e.v1 === vertexId ? e.v2 : e.v1;
    const score = isSettlementSpotOpen(game, far) ? pipValue(game, far) : 0;
    if (score > bestScore) {
      bestScore = score;
      best = eid;
    }
  }
  return best;
}

function pickExpansionRoad(game, playerId) {
  const edges = myEdges(game, playerId);
  const candidateVertices = new Set();
  for (const e of edges) {
    candidateVertices.add(e.v1);
    candidateVertices.add(e.v2);
  }
  for (const [v, b] of Object.entries(game.buildings)) {
    if (b.playerId === playerId) candidateVertices.add(Number(v));
  }
  let best = null;
  let bestScore = -1;
  for (const vid of candidateVertices) {
    const v = BOARD.vertices[vid];
    for (const eid of v.edgeIds) {
      if (game.roads[eid]) continue;
      const e = BOARD.edges[eid];
      const far = e.v1 === vid ? e.v2 : e.v1;
      const score = isSettlementSpotOpen(game, far) ? pipValue(game, far) + 1 : 0.5;
      if (score > bestScore) {
        bestScore = score;
        best = eid;
      }
    }
  }
  return best;
}

function pickRobberTarget(game, playerId) {
  let best = null;
  let bestScore = -1;
  for (const tile of BOARD.tiles) {
    if (tile.id === game.robberTileId) continue;
    const opponents = new Set();
    for (const v of BOARD.vertices.filter((vv) => vv.tileIds.includes(tile.id))) {
      const b = game.buildings[v.id];
      if (b && b.playerId !== playerId) opponents.add(b.playerId);
    }
    if (opponents.size === 0) continue;
    const num = game.tileNumber[tile.id];
    const score = (num ? PIPS[num] || 0 : 0) + opponents.size;
    if (score > bestScore) {
      bestScore = score;
      best = { tileId: tile.id, opponents: [...opponents] };
    }
  }
  if (!best) {
    const fallback = BOARD.tiles.find((t) => t.id !== game.robberTileId);
    return { tileId: fallback.id, targetPlayerId: null };
  }
  const targetPlayerId = best.opponents[Math.floor(Math.random() * best.opponents.length)];
  return { tileId: best.tileId, targetPlayerId };
}

export function chooseCatanAction(game, playerId) {
  if (game.phase === "setup1" || game.phase === "setup2") {
    const expectedSettlements = game.phase === "setup1" ? 1 : 2;
    const mine = mySettlementVertices(game, playerId);
    if (mine.length < expectedSettlements) {
      const vertexId = pickBestOpenVertex(game);
      return { type: "buildSettlement", vertexId };
    }
    const myRoadCount = myEdges(game, playerId).length;
    const expectedRoads = expectedSettlements;
    if (myRoadCount < expectedRoads) {
      const lastVertex = mine[mine.length - 1];
      const edgeId = pickRoadFromVertex(game, playerId, lastVertex);
      return { type: "buildRoad", edgeId };
    }
    return null;
  }

  if (game.phase === "roll") {
    return { type: "rollDice" };
  }

  if (game.pendingRobber) {
    const { tileId, targetPlayerId } = pickRobberTarget(game, playerId);
    return { type: "moveRobber", tileId, targetPlayerId };
  }

  const res = game.resources[playerId];

  const settlements = mySettlementVertices(game, playerId, "settlement");
  if (settlements.length > 0 && canAfford(res, COST.city)) {
    const best = settlements.reduce((a, b) => (pipValue(game, b) > pipValue(game, a) ? b : a));
    return { type: "buildCity", vertexId: best };
  }

  if (canAfford(res, COST.settlement)) {
    // Any vertex reachable via one of my own roads, two-away-or-less from a
    // road end, that's still a legal open spot.
    let bestVertex = null;
    let bestScore = -1;
    for (const e of myEdges(game, playerId)) {
      for (const far of [e.v1, e.v2]) {
        if (!isSettlementSpotOpen(game, far)) continue;
        const score = pipValue(game, far);
        if (score > bestScore) {
          bestScore = score;
          bestVertex = far;
        }
      }
    }
    if (bestVertex !== null) {
      return { type: "buildSettlement", vertexId: bestVertex };
    }
  }

  if (canAfford(res, COST.road)) {
    const edgeId = pickExpansionRoad(game, playerId);
    if (edgeId !== null) return { type: "buildRoad", edgeId };
  }

  if (canAfford(res, COST.devCard) && game.devDeck.length > 0 && Math.random() < 0.6) {
    return { type: "buyDevCard" };
  }

  // Nothing affordable — try a bank trade to work toward something.
  const need = ["settlement", "road", "city", "devCard"].find((k) => !canAfford(res, COST[k]));
  if (need) {
    const shortfall = Object.entries(COST[need]).find(([r, q]) => (res[r] || 0) < q);
    if (shortfall) {
      const [wanted] = shortfall;
      const surplus = RESOURCES.filter((r) => r !== wanted).sort((a, b) => (res[b] || 0) - (res[a] || 0))[0];
      const rate = bestRateFor(game, playerId, surplus);
      if ((res[surplus] || 0) >= rate) {
        return { type: "bankTrade", give: surplus, giveQty: rate, get: wanted };
      }
    }
  }

  return { type: "endTurn" };
}

export function chooseCatanDiscard(game, playerId) {
  const need = game.mustDiscard[playerId];
  if (!need) return null;
  const res = { ...game.resources[playerId] };
  const discard = {};
  let remaining = need;
  const order = [...RESOURCES].sort((a, b) => res[b] - res[a]);
  for (const r of order) {
    if (remaining <= 0) break;
    const take = Math.min(res[r], remaining);
    if (take > 0) {
      discard[r] = take;
      remaining -= take;
    }
  }
  return discard;
}

export function chooseCatanTradeResponse(game, playerId) {
  const trade = game.pendingTrade;
  if (!trade || trade.fromPlayerId === playerId) return null;
  const res = game.resources[playerId];
  const canFulfil = canAfford(res, trade.want);
  if (!canFulfil) return false;
  // Accept if what we're offered is worth at least as much (card-count-wise)
  // as what's asked, with a little randomness so AIs aren't purely greedy.
  const giveCount = Object.values(trade.give).reduce((a, b) => a + b, 0);
  const wantCount = Object.values(trade.want).reduce((a, b) => a + b, 0);
  return giveCount >= wantCount && Math.random() < 0.7;
}
