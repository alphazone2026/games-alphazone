# Alphazone Games

Browser card games. First up: Uno and Uno Teams, 2-4 players, with AI bots filling any
seats real players don't take.

Live target: `games.alphazone.com.au`

## How multiplayer works

No custom backend server — the app is a static React build. Realtime sync between
players happens over a [Firebase Realtime Database](https://firebase.google.com/docs/database)
(just a JSON tree, no Cloud Functions), so it can be hosted as static files alongside
`alphazone-site` on regular PHP/cPanel-style hosting.

Each room is a node under `rooms/{roomCode}` in the database. Whichever browser tab
successfully claims `rooms/{roomCode}/hostId` (via an atomic transaction) becomes the
**host**: it runs the game engine, applies every move (its own and other players', the
latter arriving via a small `requests` queue in the same room node), drives the AI
turns, and writes the resulting state — which Realtime Database then pushes to
everyone else automatically. If the host disconnects, `hostId` is cleared
(`onDisconnect().remove()`) and the next client to notice claims it, picking up any
requests left in the queue.

## Setup

1. Create a free Firebase project at [console.firebase.google.com](https://console.firebase.google.com).
2. Add a **Web app** to the project (Project settings → General → Your apps) to get
   the config values below.
3. Enable **Realtime Database** (Build → Realtime Database → Create Database). Since
   there's no login system, set the rules to allow open read/write on the `rooms`
   path only:
   ```json
   {
     "rules": {
       "rooms": {
         "$roomCode": {
           ".read": true,
           ".write": true
         }
       },
       ".read": false,
       ".write": false
     }
   }
   ```
4. Copy `.env.example` to `.env` and fill in the `VITE_FIREBASE_*` values from step 2
   (`VITE_FIREBASE_DATABASE_URL` is the Realtime Database URL shown on its page, e.g.
   `https://your-project-default-rtdb.firebaseio.com`).
5. `npm install`
6. `npm run dev`

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
