import { useEffect, useRef, useState } from "react";

// Tracks which ids in `currentIds` are new since the last render, and keeps
// each flagged as "just appeared" for `durationMs`. Works off state itself
// rather than the local action that caused it, so a settlement, shot, or
// dealt card animates onto the table the same way for every viewer — not
// just the player who triggered it.
export function useAppearAnimation(currentIds, durationMs = 420) {
  const knownRef = useRef(new Set());
  const [justAppeared, setJustAppeared] = useState(() => new Set());
  const key = [...new Set(currentIds)].sort().join("|");

  useEffect(() => {
    const ids = new Set(currentIds);
    const fresh = [...ids].filter((id) => !knownRef.current.has(id));
    knownRef.current = ids;
    if (fresh.length === 0) return;
    setJustAppeared((prev) => new Set([...prev, ...fresh]));
    const timers = fresh.map((id) =>
      setTimeout(() => {
        setJustAppeared((prev) => {
          if (!prev.has(id)) return prev;
          const next = new Set(prev);
          next.delete(id);
          return next;
        });
      }, durationMs)
    );
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, durationMs]);

  return justAppeared;
}
