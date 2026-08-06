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
import { createGame, applyAction, legalMoves } from "./uno.js";
import { chooseAIAction } from "./ai.js";

const MAX_SEATS = 4;
const AI_NAMES = ["Robo Red", "Ana Bot", "Circuit Sam", "Byte Betty"];

function getPlayerId() {
  let id = sessionStorage.getItem("uno_player_id");
  if (!id) {
    id = nanoid(10);
    sessionStorage.setItem("uno_player_id", id);
  }
  return id;
}

function emptySeats() {
  return Array.from({ length: MAX_SEATS }, (_, i) => ({
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

function seatsFromObj(obj) {
  const seats = emptySeats();
  if (!obj) return seats;
  Object.values(obj).forEach((s) => {
    if (s && typeof s.seat === "number") seats[s.seat] = s;
  });
  return seats;
}

// Host-authoritative multiplayer room built on Firebase Realtime Database.
// The first client to write `hostId` for a room becomes host: it owns the
// Uno engine, applies both local and remote requests, drives AI turns, and
// writes the resulting state, which Realtime Database pushes to everyone
// else automatically. No custom backend server — just RTDB.
export function useRoom(roomCode, playerName, mode) {
  const [seats, setSeats] = useState(emptySeats());
  const [game, setGame] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [connected, setConnected] = useState(false);
  const [presenceCount, setPresenceCount] = useState(0);

  const playerId = useRef(getPlayerId()).current;
  const isHostRef = useRef(false);
  const gameRef = useRef(null);

  useEffect(() => {
    isHostRef.current = isHost;
  }, [isHost]);
  useEffect(() => {
    gameRef.current = game;
  }, [game]);

  const roomRef = roomCode ? ref(db, `rooms/${roomCode}`) : null;
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
      set(gamePathRef, gameObj);
    },
    [gamePathRef]
  );

  const hostClaimSeat = useCallback(
    (currentSeats, seatIndex, { forPlayerId, forName, ai }) => {
      if (currentSeats[seatIndex].playerId || currentSeats[seatIndex].isAI) return currentSeats;
      const next = currentSeats.map((s) => ({ ...s }));
      next[seatIndex] = ai
        ? { seat: seatIndex, playerId: `ai-${seatIndex}`, name: AI_NAMES[seatIndex], isAI: true }
        : { seat: seatIndex, playerId: forPlayerId, name: forName, isAI: false };
      return next;
    },
    []
  );

  const hostVacateSeat = useCallback((currentSeats, seatIndex) => {
    const next = currentSeats.map((s) => ({ ...s }));
    next[seatIndex] = { seat: seatIndex, playerId: null, name: null, isAI: false };
    return next;
  }, []);

  const hostStartGame = useCallback(
    (currentSeats) => {
      const taken = currentSeats.filter((s) => s.playerId);
      if (taken.length < 2) return null;
      if (mode === "teams" && taken.length !== 4) return null;
      const players = taken
        .sort((a, b) => a.seat - b.seat)
        .map((s) => ({ id: s.playerId, name: s.name, isAI: s.isAI }));
      return createGame({ players, mode });
    },
    [mode]
  );

  const hostApplyAction = useCallback(
    (currentGame, actingPlayerId, action) => {
      if (!currentGame) return currentGame;
      try {
        const result = applyAction(currentGame, actingPlayerId, action);
        return { ...result.game };
      } catch (err) {
        console.warn("Illegal action ignored:", err.message);
        return currentGame;
      }
    },
    []
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
        setSeats((prev) => {
          const next = hostClaimSeat(prev, seatIndex, { forPlayerId: playerId, forName: playerName, ai });
          writeSeats(next);
          return prev;
        });
      } else {
        sendRequest("seat", { seatIndex, forPlayerId: playerId, forName: playerName, ai });
      }
    },
    [hostClaimSeat, playerId, playerName, writeSeats, sendRequest]
  );

  const vacateSeat = useCallback(
    (seatIndex) => {
      if (isHostRef.current) {
        setSeats((prev) => {
          const next = hostVacateSeat(prev, seatIndex);
          writeSeats(next);
          return prev;
        });
      } else {
        sendRequest("vacate", { seatIndex });
      }
    },
    [hostVacateSeat, writeSeats, sendRequest]
  );

  const startGame = useCallback(() => {
    if (isHostRef.current) {
      setSeats((prev) => {
        const g = hostStartGame(prev);
        if (g) writeGame(g);
        return prev;
      });
    } else {
      sendRequest("start", {});
    }
  }, [hostStartGame, writeGame, sendRequest]);

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
        setGame((prev) => {
          const next = hostApplyAction(prev, playerId, action);
          writeGame(next);
          return prev;
        });
      } else {
        sendRequest("action", { forPlayerId: playerId, action });
      }
    },
    [hostApplyAction, playerId, writeGame, sendRequest]
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

    setSeats(emptySeats());
    setGame(null);
    setIsHost(false);

    const unsubSeats = onValue(seatsPathRef, (snap) => setSeats(seatsFromObj(snap.val())));
    const unsubGame = onValue(gamePathRef, (snap) => setGame(snap.val()));

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
        setSeats((prev) => {
          const next = hostClaimSeat(prev, payload.seatIndex, payload);
          writeSeats(next);
          return prev;
        });
      } else if (kind === "vacate") {
        setSeats((prev) => {
          const next = hostVacateSeat(prev, payload.seatIndex);
          writeSeats(next);
          return prev;
        });
      } else if (kind === "start") {
        setSeats((prev) => {
          const g = hostStartGame(prev);
          if (g) writeGame(g);
          return prev;
        });
      } else if (kind === "reset") {
        writeGame(null);
      } else if (kind === "action") {
        setGame((prev) => {
          const next = hostApplyAction(prev, payload.forPlayerId, payload.action);
          writeGame(next);
          return prev;
        });
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
    const current = game.players[game.currentPlayerIndex];
    if (!current?.isAI) return;
    const timer = setTimeout(() => {
      const next = hostApplyAction(game, current.id, chooseAIAction(game, current.id));
      writeGame(next);
    }, 900);
    return () => clearTimeout(timer);
  }, [isHost, game, hostApplyAction, writeGame]);

  return {
    playerId,
    isHost,
    connected,
    seats,
    game,
    presenceCount,
    requestSeat,
    vacateSeat,
    startGame,
    resetGame,
    sendAction,
    myLegalMoves: game ? legalMoves(game, playerId) : [],
  };
}
