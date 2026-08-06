// Static topology for the standard 19-tile Catan board: tile centers,
// shared vertices (settlement/city spots), shared edges (road spots), and
// a plausible port layout. Pure geometry — resource/number/player state
// lives in the engine, not here. Computed once and reused (same shape
// every game; only what's placed on it changes).

const SIZE = 100;

function axialToPixel(q, r) {
  const x = SIZE * (Math.sqrt(3) * q + (Math.sqrt(3) / 2) * r);
  const y = SIZE * (1.5 * r);
  return [x, y];
}

function hexCorners(cx, cy) {
  const corners = [];
  for (let i = 0; i < 6; i++) {
    const angleDeg = 60 * i - 30;
    const angleRad = (Math.PI / 180) * angleDeg;
    corners.push([cx + SIZE * Math.cos(angleRad), cy + SIZE * Math.sin(angleRad)]);
  }
  return corners;
}

function vKey(x, y) {
  return `${Math.round(x * 10)}_${Math.round(y * 10)}`;
}

function buildBoard() {
  const tiles = [];
  for (let q = -2; q <= 2; q++) {
    for (let r = -2; r <= 2; r++) {
      const s = -q - r;
      if (Math.abs(s) <= 2) {
        const [x, y] = axialToPixel(q, r);
        tiles.push({ id: tiles.length, q, r, x, y });
      }
    }
  }

  const vertexByKey = new Map();
  const vertices = [];
  const edgeByKey = new Map();
  const edges = [];

  for (const tile of tiles) {
    const corners = hexCorners(tile.x, tile.y).map(([x, y]) => {
      const key = vKey(x, y);
      let v = vertexByKey.get(key);
      if (!v) {
        v = { id: vertices.length, x, y, tileIds: [], edgeIds: [] };
        vertexByKey.set(key, v);
        vertices.push(v);
      }
      if (!v.tileIds.includes(tile.id)) v.tileIds.push(tile.id);
      return v;
    });

    for (let i = 0; i < 6; i++) {
      const a = corners[i];
      const b = corners[(i + 1) % 6];
      const ekey = a.id < b.id ? `${a.id}-${b.id}` : `${b.id}-${a.id}`;
      let e = edgeByKey.get(ekey);
      if (!e) {
        e = { id: edges.length, v1: Math.min(a.id, b.id), v2: Math.max(a.id, b.id), tileIds: [] };
        edgeByKey.set(ekey, e);
        edges.push(e);
        a.edgeIds.push(e.id);
        b.edgeIds.push(e.id);
      }
      if (!e.tileIds.includes(tile.id)) e.tileIds.push(tile.id);
    }
  }

  // Adjacent vertices (directly connected by one edge) — needed for the
  // settlement distance rule.
  const vertexNeighbors = vertices.map(() => new Set());
  for (const e of edges) {
    vertexNeighbors[e.v1].add(e.v2);
    vertexNeighbors[e.v2].add(e.v1);
  }

  // Boundary edges (touch only one tile) get ports. Walk them in angular
  // order around the board center and space 9 ports evenly.
  const boundaryEdges = edges.filter((e) => e.tileIds.length === 1);
  const center = { x: 0, y: 0 };
  boundaryEdges.sort((a, b) => {
    const va = vertices[a.v1],
      vb = vertices[a.v2];
    const ma = { x: (va.x + vb.x) / 2, y: (va.y + vb.y) / 2 };
    const vc = vertices[b.v1],
      vd = vertices[b.v2];
    const mb = { x: (vc.x + vd.x) / 2, y: (vc.y + vd.y) / 2 };
    return Math.atan2(ma.y - center.y, ma.x - center.x) - Math.atan2(mb.y - center.y, mb.x - center.x);
  });

  const PORT_TYPES = ["3:1", "wood", "3:1", "brick", "3:1", "ore", "3:1", "wheat", "sheep"];
  const ports = [];
  const step = boundaryEdges.length / PORT_TYPES.length;
  for (let i = 0; i < PORT_TYPES.length; i++) {
    const edge = boundaryEdges[Math.floor(i * step)];
    ports.push({ type: PORT_TYPES[i], edgeId: edge.id, v1: edge.v1, v2: edge.v2 });
  }

  return {
    tiles,
    vertices: vertices.map((v) => ({ id: v.id, x: v.x, y: v.y, tileIds: v.tileIds, edgeIds: v.edgeIds })),
    edges,
    vertexNeighbors: vertexNeighbors.map((set) => [...set]),
    ports,
  };
}

// Computed once at module load — same for every game.
export const BOARD = buildBoard();
