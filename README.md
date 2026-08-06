# Alphazone Games

Browser card games. First up: Uno and Uno Teams, 2-4 players, with AI bots filling any
seats real players don't take.

Live target: `games.alphazone.com.au`

## How multiplayer works

No custom backend server — the app is a static React build. Realtime sync between
players happens over a [Supabase](https://supabase.com) Realtime channel (broadcast +
presence only, no database tables required), so it can be hosted as static files
alongside `alphazone-site` on regular PHP/cPanel-style hosting.

The browser tab that joins a room first becomes the **host**: it runs the game engine,
applies every move (its own and other players'), drives the AI turns, and broadcasts
the resulting state to everyone else in the room. If the host's tab closes, the next
player to join becomes host for future rooms (mid-game host handoff isn't implemented
yet — see below).

## Setup

1. Create a free Supabase project at supabase.com (you only need the project URL and
   anon public key — no tables, no auth needed).
2. Copy `.env.example` to `.env` and fill in `VITE_SUPABASE_URL` and
   `VITE_SUPABASE_ANON_KEY`.
3. `npm install`
4. `npm run dev`

## Build & deploy

```bash
npm run build
```

Upload the contents of `dist/` to the `games.alphazone.com.au` subdomain's document
root. The app uses a hash router (`/#/room/ABCDE`) so no server-side URL rewriting is
needed on shared/PHP hosting.

## Games

- **Uno** — classic rules, 2-4 players.
- **Uno Teams** — exactly 4 players seated in two teams of two (seats 1+3 vs 2+4);
  first player to empty their hand wins for their team.

More games planned — see the game selection screen on the home page.

## Known limitations (MVP)

- If the host disconnects mid-game, the game state is lost for that room (no
  persistence/reconnect-to-same-host yet).
- No accounts — names are per-tab only.
