import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { customAlphabet } from "nanoid";

const makeCode = customAlphabet("ABCDEFGHJKLMNPQRSTUVWXYZ23456789", 5);

export default function Home() {
  const navigate = useNavigate();
  const [name, setName] = useState(() => sessionStorage.getItem("uno_player_name") || "");
  const [joinCode, setJoinCode] = useState("");

  function go(roomCode, gameId, variant) {
    if (!name.trim()) {
      alert("Enter your name first");
      return;
    }
    sessionStorage.setItem("uno_player_name", name.trim());
    // gameId/variant are just a best guess for a brand-new room's URL — the
    // room itself is the source of truth once it has a host (see useRoomMeta).
    const params = new URLSearchParams();
    if (gameId) params.set("game", gameId);
    if (variant) params.set("variant", variant);
    const qs = params.toString();
    navigate(`/room/${roomCode.toUpperCase()}${qs ? `?${qs}` : ""}`);
  }

  return (
    <div className="min-h-screen tabletop text-slate-100 flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-1 tracking-tight text-amber-50" style={{ textShadow: "0 2px 6px rgba(0,0,0,0.5)" }}>
        Alphazone Games
      </h1>
      <p className="text-emerald-50/60 mb-8">Card and board games, straight in your browser.</p>

      <div className="w-full max-w-md wood-panel rounded-xl p-6 space-y-6">
        <div>
          <label className="block text-sm text-amber-100/60 mb-1">Your name</label>
          <input
            className="w-full rounded-lg bg-black/30 border border-white/10 text-amber-50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={16}
            placeholder="e.g. Ben"
          />
        </div>

        <div>
          <div className="text-sm text-amber-100/60 mb-2">Create a new game</div>
          <div className="grid grid-cols-2 gap-3">
            <button
              className="rounded-lg bg-indigo-600 hover:bg-indigo-500 py-3 font-semibold transition"
              onClick={() => go(makeCode(), "uno", "classic")}
            >
              Uno
              <div className="text-xs font-normal text-indigo-200">2-4 players</div>
            </button>
            <button
              className="rounded-lg bg-fuchsia-600 hover:bg-fuchsia-500 py-3 font-semibold transition"
              onClick={() => go(makeCode(), "uno", "teams")}
            >
              Uno Teams
              <div className="text-xs font-normal text-fuchsia-200">4 players, 2v2</div>
            </button>
            <button
              className="rounded-lg bg-emerald-600 hover:bg-emerald-500 py-3 font-semibold transition col-span-2"
              onClick={() => go(makeCode(), "flip7")}
            >
              Flip 7
              <div className="text-xs font-normal text-emerald-200">3-8 players, push your luck</div>
            </button>
            <button
              className="rounded-lg bg-sky-600 hover:bg-sky-500 py-3 font-semibold transition"
              onClick={() => go(makeCode(), "battleship")}
            >
              Battleship
              <div className="text-xs font-normal text-sky-200">2-6 players, free-for-all</div>
            </button>
            <button
              className="rounded-lg bg-amber-700 hover:bg-amber-600 py-3 font-semibold transition"
              onClick={() => go(makeCode(), "catan")}
            >
              Catan
              <div className="text-xs font-normal text-amber-200">3-4 players, full rules</div>
            </button>
          </div>
        </div>

        <div className="border-t border-white/10 pt-5">
          <div className="text-sm text-amber-100/60 mb-2">Join a room with a code</div>
          <div className="flex gap-2">
            <input
              className="flex-1 rounded-lg bg-black/30 border border-white/10 text-amber-50 px-3 py-2 uppercase tracking-widest focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={joinCode}
              onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
              maxLength={5}
              placeholder="ABCDE"
            />
            <button
              className="rounded-lg bg-slate-700 hover:bg-slate-600 px-4 font-semibold transition disabled:opacity-40"
              disabled={joinCode.trim().length < 4}
              onClick={() => go(joinCode.trim())}
            >
              Join
            </button>
          </div>
          <p className="text-xs text-amber-100/40 mt-2">
            The room's game and mode are set by whoever created it — you'll join whatever they picked.
          </p>
        </div>
      </div>

      <div className="w-full max-w-md mt-6">
        <Link
          to="/fireash"
          className="block text-center rounded-lg bg-red-700 hover:bg-red-600 py-3 font-semibold transition"
        >
          Fire Ash
          <div className="text-xs font-normal text-red-200">Single-player pilot - not a room game yet</div>
        </Link>
      </div>

      <p className="text-emerald-50/30 text-xs mt-10">More games coming soon.</p>
    </div>
  );
}
