import { useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import {
  ref,
  onValue,
  set,
  remove,
  push,
  runTransaction,
  onDisconnect,
  child,
  onChildAdded,
} from "firebase/database";
import { db } from "../lib/firebaseClient.js";
import * as uno from "./uno.js";
import { chooseAIAction } from "./ai.js";
import * as flip7 from "./flip7.js";
import { chooseFlip7Action } from "./flip7ai.js";
import * as battleship from "./battleship.js";
import { chooseBattleshipAction } from "./battleshipai.js";

const AI_NAMES = ["Robo Red", "Ana Bot", "Circuit Sam", "Byte Betty", "Volt Vinny", "Chip Chan", "Data Dana", "Pixel Pete"];

const EMPTY_ARRAY_MARKER = "__emptyArray__";

// Firebase Realtime Database silently drops keys whose value is an empty
// array/object (there's nothing to store, so the key just doesn't come
// back). Flip 7 hands start as [] each round, which made the whole `hands`
// object vanish entirely and crash the board. Swap empty arrays for a
// marker object on the way out, and back again on the way in.
function sanitizeForFirebase(value) {
  if (Array.isArray(value)) {
    if (value.length === 0) return { [EMPTY_ARRAY_MARKER]: true };
    return value.map(sanitizeForFirebase);
  }
  if (value && typeof value === "object") {
    const out = {};
    for (const k of Object.keys(value)) out[k] = sanitizeForFirebase(value[k]);
    return out;
  }
  return value;
}

function desanitizeFromFirebase(value) {
  if (value && typeof value === "object") {
    if (value[EMPTY_ARRAY_MARKER]) return [];
    if (Array.isArray(value)) return value.map(desanitizeFromFirebase);
    const out = {};
    for (const k of Object.keys(value)) out[k] = desanitizeFromFirebase(value[k]);
    return out;
  }
  return value;
}

// Registry so useRoom doesn't need to know the rules of any specific game —
// it just needs to create/apply/query state and ask "whose AI move is this".
const ENGINES = {
  uno: {
    createGame: (players, variant) => uno.createGame({ players, mode: variant }),
    applyAction: uno.applyAction,
    legalMoves: uno.legalMoves,
    chooseAI: chooseAIAction,
    canStart: (taken, variant) => (variant === "teams" ? taken.length === 4 : taken.length >= 2),
    maxSeats: 4,
  },
  flip7: {
    createGame: (players) => flip7.createGame({ players }),
    applyAction: flip7.applyAction,
    legalMoves: flip7.legalActions,
    chooseAI: chooseFlip7Action,
    canStart: (taken) => taken.length >= flip7.MIN_PLAYERS,
    maxSeats: flip7.MAX_PLAYERS,
  },
  battleship: {
    createGame: (players) => battleship.createGame({ players }),
    applyAction: battleship.applyAction,
    legalMoves: battleship.legalTargets,
    chooseAI: chooseBattleshipAction,
    canStart: (taken) => taken.length >= battleship.MIN_PLAYERS,
    maxSeats: battleship.MAX_PLAYERS,
  },
};

function getPlayerId() {
  let id = sessionStorage.getItem("uno_player_id");
  if (!id) {
    id = nanoid(10);
    sessionStorage.setItem("uno_player_id", id);
  }
  return id;
}

function emptySeats(maxSeats) {
  return Array.from({ length: maxSeats }, (_, i) => ({
    seat: i,
    playerId: null,
    name: null,
    isAI: false,
  }));
}

function seatsToObj(seats) {
  const obj = {};
  seats.forEach((s) => (obj[s.seat] = s));
  return obj;
}

function seatsFromObj(obj, maxSeats) {
  const seats = emptySeats(maxSeats);
  if (!obj) return seats;
  Object.values(obj).forEach((s) => {
    if (s && typeof s.seat === "number" && s.seat < maxSeats) seats[s.seat] = s;
  });
  return seats;
}

function claimSeat(currentSeats, seatIndex, { forPlayerId, forName, ai }) {
  if (currentSeats[seatIndex].playerId || currentSeats[seatIndex].isAI) return currentSeats;
  const next = currentSeats.map((s) => ({ ...s }));
  next[seatIndex] = ai
    ? { seat: seatIndex, playerId: `ai-${seatIndex}`, name: AI_NAMES[seatIndex % AI_NAMES.length], isAI: true }
    : { seat: seatIndex, playerId: forPlayerId, name: forName, isAI: false };
  return next;
}

function vacateSeatIn(currentSeats, seatIndex) {
  const next = currentSeats.map((s) => ({ ...s }));
  next[seatIndex] = { seat: seatIndex, playerId: null, name: null, isAI: false };
  return next;
}

function buildStartedGame(engine, currentSeats, variant) {
  const taken = currentSeats.filter((s) => s.playerId);
  if (!engine.canStart(taken, variant)) return null;
  const players = taken.sort((a, b) => a.seat - b.seat).map((s) => ({ id: s.playerId, name: s.name, isAI: s.isAI }));
  return engine.createGame(players, variant);
}

function applyActionSafe(engine, currentGame, actingPlayerId, action) {
  if (!currentGame) return currentGame;
  try {
    const result = engine.applyAction(currentGame, actingPlayerId, action);
    return { ...result.game };
  } catch (err) {
    console.warn("Illegal action ignored:", err.message);
    return currentGame;
  }
}

// Host-authoritative multiplayer room built on Firebase Realtime Database.
// The first client to write `hostId` for a room becomes host: it owns the
// game engine (looked up from ENGINES by gameId), applies both local and
// remote requests, drives AI turns, and writes the resulting state, which
// Realtime Database pushes to everyone else automatically. No custom
// backend server — just RTDB.
//
// The host never derives its next write from React state directly (state
// updates land async, and Firebase can echo a write back into our own
// `onValue` listener before the click handler's own setState calls have
// settled, which — if the host read from the setState updater's `prev` —
// could stomp the fresh echoed value with a stale one). Instead the host
// always reads from `seatsRef`/`gameRefValue` ref mirrors that are updated
// synchronously by the onValue listeners themselves.
export function useRoom(roomCode, playerName, { gameId = "uno", variant } = {}) {
  const engine = ENGINES[gameId];
  const maxSeats = engine.maxSeats;

  const [seats, setSeats] = useState(() => emptySeats(maxSeats));
  const [game, setGame] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [connected, setConnected] = useState(false);
  const [presenceCount, setPresenceCount] = useState(0);

  const playerId = useRef(getPlayerId()).current;
  const isHostRef = useRef(false);
  const seatsRef = useRef(emptySeats(maxSeats));
  const gameRefValue = useRef(null);

  useEffect(() => {
    isHostRef.current = isHost;
  }, [isHost]);

  const seatsPathRef = roomCode ? ref(db, `rooms/${roomCode}/seats`) : null;
  const gamePathRef = roomCode ? ref(db, `rooms/${roomCode}/game`) : null;
  const hostPathRef = roomCode ? ref(db, `rooms/${roomCode}/hostId`) : null;
  const requestsPathRef = roomCode ? ref(db, `rooms/${roomCode}/requests`) : null;
  const presencePathRef = roomCode ? ref(db, `rooms/${roomCode}/presence`) : null;

  const writeSeats = useCallback(
    (seatsArr) => {
      if (!seatsPathRef) return;
      set(seatsPathRef, seatsToObj(seatsArr));
    },
    [seatsPathRef]
  );

  const writeGame = useCallback(
    (gameObj) => {
      if (!gamePathRef) return;
      set(gamePathRef, gameObj === null ? null : sanitizeForFirebase(gameObj));
    },
    [gamePathRef]
  );

  // Guests push a request; the host (whoever currently holds hostId) processes
  // and removes it. Requests left behind by a host that vanished mid-game are
  // picked up by whichever client claims host next.
  const sendRequest = useCallback(
    (kind, payload) => {
      if (!requestsPathRef) return;
      push(requestsPathRef, { kind, payload, playerId, at: Date.now() });
    },
    [requestsPathRef, playerId]
  );

  const requestSeat = useCallback(
    (seatIndex, ai) => {
      if (isHostRef.current) {
        writeSeats(claimSeat(seatsRef.current, seatIndex, { forPlayerId: playerId, forName: playerName, ai }));
      } else {
        sendRequest("seat", { seatIndex, forPlayerId: playerId, forName: playerName, ai });
      }
    },
    [playerId, playerName, writeSeats, sendRequest]
  );

  const vacateSeat = useCallback(
    (seatIndex) => {
      if (isHostRef.current) {
        writeSeats(vacateSeatIn(seatsRef.current, seatIndex));
      } else {
        sendRequest("vacate", { seatIndex });
      }
    },
    [writeSeats, sendRequest]
  );

  const startGame = useCallback(() => {
    if (isHostRef.current) {
      const g = buildStartedGame(engine, seatsRef.current, variant);
      if (g) writeGame(g);
    } else {
      sendRequest("start", {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [variant, writeGame, sendRequest]);

  const resetGame = useCallback(() => {
    if (isHostRef.current) {
      writeGame(null);
    } else {
      sendRequest("reset", {});
    }
  }, [writeGame, sendRequest]);

  const sendAction = useCallback(
    (action) => {
      if (isHostRef.current) {
        writeGame(applyActionSafe(engine, gameRefValue.current, playerId, action));
      } else {
        sendRequest("action", { forPlayerId: playerId, action });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [playerId, writeGame, sendRequest]
  );

  // Try to become host if nobody currently holds the slot.
  const tryClaimHost = useCallback(() => {
    if (!hostPathRef) return;
    runTransaction(hostPathRef, (current) => (current === null ? playerId : current)).then((result) => {
      const won = result.committed && result.snapshot.val() === playerId;
      setIsHost(won);
      if (won) {
        onDisconnect(hostPathRef).remove();
      }
    });
  }, [hostPathRef, playerId]);

  useEffect(() => {
    if (!roomCode) return;

    seatsRef.current = emptySeats(maxSeats);
    gameRefValue.current = null;
    setSeats(emptySeats(maxSeats));
    setGame(null);
    setIsHost(false);

    const unsubSeats = onValue(seatsPathRef, (snap) => {
      const next = seatsFromObj(snap.val(), maxSeats);
      seatsRef.current = next;
      setSeats(next);
    });
    const unsubGame = onValue(gamePathRef, (snap) => {
      const raw = snap.val();
      const next = raw === null ? null : desanitizeFromFirebase(raw);
      gameRefValue.current = next;
      setGame(next);
    });

    const unsubHost = onValue(hostPathRef, (snap) => {
      const hostId = snap.val();
      if (hostId === null) {
        tryClaimHost();
      } else {
        setIsHost(hostId === playerId);
      }
    });

    const presenceRef = child(presencePathRef, playerId);
    onDisconnect(presenceRef).remove();
    set(presenceRef, { name: playerName, at: Date.now() });
    const unsubPresence = onValue(presencePathRef, (snap) => {
      const val = snap.val();
      setPresenceCount(val ? Object.keys(val).length : 0);
    });

    const unsubConnInfo = onValue(ref(db, ".info/connected"), (snap) => setConnected(!!snap.val()));

    // Host-only: drain the request queue.
    const unsubRequests = onChildAdded(requestsPathRef, (snap) => {
      if (!isHostRef.current) return;
      const { kind, payload } = snap.val() || {};
      remove(child(requestsPathRef, snap.key));

      if (kind === "seat") {
        writeSeats(claimSeat(seatsRef.current, payload.seatIndex, payload));
      } else if (kind === "vacate") {
        writeSeats(vacateSeatIn(seatsRef.current, payload.seatIndex));
      } else if (kind === "start") {
        const g = buildStartedGame(engine, seatsRef.current, variant);
        if (g) writeGame(g);
      } else if (kind === "reset") {
        writeGame(null);
      } else if (kind === "action") {
        writeGame(applyActionSafe(engine, gameRefValue.current, payload.forPlayerId, payload.action));
      }
    });

    return () => {
      unsubSeats();
      unsubGame();
      unsubHost();
      unsubPresence();
      unsubConnInfo();
      unsubRequests();
      remove(presenceRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomCode]);

  // Host drives AI turns.
  useEffect(() => {
    if (!isHost || !game || game.status !== "playing") return;
    if (gameId === "flip7" && game.roundOver) return;
    const current = game.players[game.currentPlayerIndex];
    if (!current?.isAI) return;
    const timer = setTimeout(() => {
      writeGame(applyActionSafe(engine, gameRefValue.current, current.id, engine.chooseAI(game, current.id)));
    }, 900);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHost, game, writeGame]);

  // Flip 7: host auto-advances to the next round once every AI is ready,
  // after a short pause so players can read the round summary.
  useEffect(() => {
    if (gameId !== "flip7" || !isHost || !game || game.status !== "playing" || !game.roundOver) return;
    const humanCount = game.players.filter((p) => !p.isAI).length;
    if (humanCount > 0) return; // let a human click "Next round"
    const timer = setTimeout(() => {
      writeGame(applyActionSafe(engine, gameRefValue.current, game.players[0].id, { type: "nextRound" }));
    }, 2500);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId, isHost, game, writeGame]);

  // Host schedules AI reactions to a pending UNO call: the exposed player is
  // likely to call it for themselves, others have a smaller chance to catch
  // them, each after a random 2-4s "thinking" delay.
  const unoSignature =
    gameId === "uno" && game?.unoPending ? `${game.unoPending.playerId}:${game.discard.length}` : null;
  useEffect(() => {
    if (!isHost || !unoSignature) return;
    const aiPlayers = game.players.filter((p) => p.isAI);
    const pendingId = game.unoPending.playerId;
    const timers = aiPlayers.map((ai) => {
      const delay = 2000 + Math.random() * 2000;
      return setTimeout(() => {
        const current = gameRefValue.current;
        if (!current?.unoPending) return;
        if (`${current.unoPending.playerId}:${current.discard.length}` !== unoSignature) return;
        const isSelf = ai.id === pendingId;
        if (Math.random() < (isSelf ? 0.9 : 0.5)) {
          writeGame(applyActionSafe(engine, current, ai.id, { type: "callUno" }));
        }
      }, delay);
    });
    return () => timers.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHost, unoSignature, writeGame]);

  return {
    playerId,
    isHost,
    connected,
    seats,
    game,
    gameId,
    variant,
    maxSeats,
    canStart: engine.canStart(seats.filter((s) => s.playerId), variant),
    presenceCount,
    requestSeat,
    vacateSeat,
    startGame,
    resetGame,
    sendAction,
    myLegalMoves: game ? engine.legalMoves(game, playerId) : [],
  };
}
