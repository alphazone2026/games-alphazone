import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn(
    "Supabase env vars missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env (see .env.example)."
  );
}

// Realtime broadcast/presence only — no database tables required, so the
// free Supabase project tier is enough to run the whole multiplayer layer.
export const supabase = createClient(url || "https://placeholder.supabase.co", anonKey || "placeholder", {
  realtime: { params: { eventsPerSecond: 20 } },
});
