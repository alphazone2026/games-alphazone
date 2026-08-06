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

Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on every push
to `master`, mirroring the same cPanel relay-upload trick used by `alphazone-site` and
`gilders-tms`. Docroot: `/home/hre8m7ym/games.alphazone.com.au`.

**Repo secrets required** (Settings → Secrets and variables → Actions):
- `GAMES_CPANEL_URL`, `GAMES_CPANEL_USER`, `GAMES_CPANEL_PASS` — same cPanel account as
  `alphazone-site` (`AZ_CPANEL_*` secrets there), just pointed at the games subdomain.
- `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_DATABASE_URL`,
  `VITE_FIREBASE_PROJECT_ID`, `VITE_FIREBASE_APP_ID` — same values as your local `.env`.

The app uses a hash router (`/#/room/ABCDE`) so no server-side URL rewriting is needed.

Manual build/upload (fallback if Actions is unavailable):
```bash
npm run build
```
Upload the contents of `dist/` to the subdomain's document root.

## Games

- **Uno** — classic rules, 2-4 players.
- **Uno Teams** — exactly 4 players seated in two teams of two (seats 1+3 vs 2+4);
  first player to empty their hand wins for their team.

More games planned — see the game selection screen on the home page.

## Fire Ash (single-player pilot)

`/fireash` is a from-scratch Phaser 3 recreation of the opening of the RPG Maker XP
fangame "Fire Ash" (Professor Oak intro → gender select → name entry → walk to Oak's
Lab), using real assets/tile data extracted from the original game, not placeholders.

- Game code: `src/game/fireash/fireash-game.js` (Phaser scenes) + `src/pages/FireAsh.jsx`
  (React wrapper that mounts/unmounts the Phaser instance on route enter/exit).
- Static assets (tilesets, portraits, map JSON): `public/fireash/assets/` — copied
  verbatim by Vite to `dist/fireash/assets/` on build, **not** part of the hashed
  `dist/assets/` bundle, so the deploy workflow uploads them with a separate step
  ("Upload Fire Ash assets") that preserves the subdirectory structure.
- The original source game lives outside this repo, in a separate Pokemon-mods
  project synced via `alphazone2026/pokemon-mods-sync`. Extending Fire Ash further
  (more maps/regions) means re-extracting `.rxdata` tile/event data from that project
  the same way this pilot's assets were extracted — this repo only has the exported
  PNGs/JSON, not the RPG Maker source.
- Collision/warps are a simplified reimplementation (exact-tile + required-facing-
  direction matching in `WARPS` in `fireash-game.js`), not a full port of RGSS engine
  behavior — good enough for the recreated opening area, but any new map added will
  need its own warp entries hand-verified against the real game's door/stair tiles.
- **Known issue:** GitHub Actions `push` triggers have not reliably fired for this
  repo's `deploy.yml` (workflow stayed `active` but two consecutive pushes didn't
  trigger a run). Workaround: `gh workflow run deploy.yml --repo alphazone2026/games-alphazone`
  to deploy manually until the cause is found.

## Known limitations (MVP)

- If the host disconnects mid-game, the game state is lost for that room (no
  persistence/reconnect-to-same-host yet).
- No accounts — names are per-tab only.
