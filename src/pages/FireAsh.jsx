import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { startFireAshGame, stopFireAshGame } from "../game/fireash/fireash-game.js";

export default function FireAsh() {
  const containerRef = useRef(null);
  const gameRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    startFireAshGame(containerRef.current).then((game) => {
      if (cancelled) {
        stopFireAshGame(game);
        return;
      }
      gameRef.current = game;
    });
    return () => {
      cancelled = true;
      stopFireAshGame(gameRef.current);
      gameRef.current = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col items-center py-6 px-4">
      <div className="w-full max-w-2xl flex items-center justify-between mb-4">
        <Link to="/" className="text-sm text-slate-400 hover:text-slate-200">&larr; Back to games</Link>
        <h1 className="text-lg font-semibold">Fire Ash (single-player pilot)</h1>
        <div className="w-24" />
      </div>
      <div ref={containerRef} className="rounded-lg overflow-hidden shadow-xl" />
      <p className="text-slate-500 text-xs mt-4 max-w-md text-center">
        Early single-player pilot only - no multiplayer, no save, and only the
        opening area (intro, Pallet House, Oak's Lab) is built out so far.
      </p>
    </div>
  );
}
