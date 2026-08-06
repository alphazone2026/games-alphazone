import { useCallback, useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import { supabase } from "../lib/supabaseClient.js";
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

function emptySeats(mode) {
  return Array.from({ length: MAX_SEATS }, (_, i) => ({
    seat: i,
    playerId: null,
    name: null,
    isAI: false,
  }));
}

// Host-authoritative multiplayer room built on a Supabase Realtime channel.
// The client that joined presence first acts as host: it owns the Uno
// engine, applies both local and remote actions, drives AI turns, and
// broadcasts the resulting state. No database or server process needed.
export function useRoom(roomCode, playerName, mode) {
  const [seats, setSeats] = useState(emptySeats(mode));
  const [game, setGame] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [connected, setConnected] = useState(false);
  const [presenceIds, setPresenceIds] = useState([]);

  const playerId = useRef(getPlayerId()).current;
  const channelRef = useRef(null);
  const stateRef = useRef({ seats: emptySeats(mode), game: null });

  const broadcastState = useCallback(() => {
    const ch = channelRef.current;
    if (!ch) return;
    ch.send({
      type: "broadcast",
      event: "sync",
      payload: { seats: stateRef.current.seats, game: stateRef.current.game },
    });
  }, []);

  const setSeatsAndSync = useCallback(
    (updater) => {
      stateRef.current.seats = typeof updater === "function" ? updater(stateRef.current.seats) : updater;
      setSeats(stateRef.current.seats);
      broadcastState();
    },
    [broadcastState]
  );

  const setGameAndSync = useCallback(
    (updater) => {
      stateRef.current.game = typeof updater === "function" ? updater(stateRef.current.game) : updater;
      setGame(stateRef.current.game);
      broadcastState();
    },
    [broadcastState]
  );

  // Host: claim an open seat for a human, or toggle AI fill on an open seat.
  const hostClaimSeat = useCallback(
    (seatIndex, { forPlayerId, forName, ai }) => {
      setSeatsAndSync((prev) => {
        const next = prev.map((s) => ({ ...s }));
        if (next[seatIndex].playerId || next[seatIndex].isAI) return prev;
        if (ai) {
          next[seatIndex] = { seat: seatIndex, playerId: `ai-${seatIndex}`, name: AI_NAMES[seatIndex], isAI: true };
        } else {
          next[seatIndex] = { seat: seatIndex, playerId: forPlayerId, name: forName, isAI: false };
        }
        return next;
      });
    },
    [setSeatsAndSync]
  );

  const hostVacateSeat = useCallback(
    (seatIndex) => {
      setSeatsAndSync((prev) => {
        const next = prev.map((s) => ({ ...s }));
        next[seatIndex] = { seat: seatIndex, playerId: null, name: null, isAI: false };
        return next;
      });
    },
    [setSeatsAndSync]
  );

  const hostStartGame = useCallback(() => {
    const taken = stateRef.current.seats.filter((s) => s.playerId);
    if (taken.length < 2) return;
    if (mode === "teams" && taken.length !== 4) return;
    const players = taken
      .sort((a, b) => a.seat - b.seat)
      .map((s) => ({ id: s.playerId, name: s.name, isAI: s.isAI }));
    setGameAndSync(createGame({ players, mode }));
  }, [mode, setGameAndSync]);

  const hostApplyAction = useCallback(
    (actingPlayerId, action) => {
      const current = stateRef.current.game;
      if (!current) return;
      try {
        const result = applyAction(current, actingPlayerId, action);
        setGameAndSync({ ...result.game });
      } catch (err) {
        console.warn("Illegal action ignored:", err.message);
      }
    },
    [setGameAndSync]
  );

  // Send an action. Host applies directly; guests ask the host via broadcast.
  const sendAction = useCallback(
    (action) => {
      if (isHost) {
        hostApplyAction(playerId, action);
      } else {
        channelRef.current?.send({
          type: "broadcast",
          event: "request-action",
          payload: { playerId, action },
        });
      }
    },
    [isHost, hostApplyAction, playerId]
  );

  const requestSeat = useCallback(
    (seatIndex, ai) => {
      if (isHost) {
        hostClaimSeat(seatIndex, { forPlayerId: playerId, forName: playerName, ai });
      } else {
        channelRef.current?.send({
          type: "broadcast",
          event: "request-seat",
          payload: { seatIndex, playerId, playerName, ai },
        });
      }
    },
    [isHost, hostClaimSeat, playerId, playerName]
  );

  const vacateSeat = useCallback(
    (seatIndex) => {
      if (isHost) {
        hostVacateSeat(seatIndex);
      } else {
        channelRef.current?.send({ type: "broadcast", event: "request-vacate", payload: { seatIndex } });
      }
    },
    [isHost, hostVacateSeat]
  );

  const startGame = useCallback(() => {
    if (isHost) hostStartGame();
    else channelRef.current?.send({ type: "broadcast", event: "request-start", payload: {} });
  }, [isHost, hostStartGame]);

  const hostResetGame = useCallback(() => {
    setGameAndSync(null);
  }, [setGameAndSync]);

  const resetGame = useCallback(() => {
    if (isHost) hostResetGame();
    else channelRef.current?.send({ type: "broadcast", event: "request-reset", payload: {} });
  }, [isHost, hostResetGame]);

  useEffect(() => {
    if (!roomCode) return;
    const channel = supabase.channel(`uno-room-${roomCode}`, {
      config: { presence: { key: playerId }, broadcast: { self: false } },
    });
    channelRef.current = channel;

    channel.on("presence", { event: "sync" }, () => {
      const state = channel.presenceState();
      const ids = Object.keys(state)
        .map((id) => ({ id, joinedAt: state[id][0]?.joinedAt || 0 }))
        .sort((a, b) => a.joinedAt - b.joinedAt);
      setPresenceIds(ids.map((x) => x.id));
      const hostId = ids[0]?.id;
      setIsHost(hostId === playerId);
    });

    channel.on("broadcast", { event: "sync" }, ({ payload }) => {
      stateRef.current = { seats: payload.seats, game: payload.game };
      setSeats(payload.seats);
      setGame(payload.game);
    });

    // Host-only handlers for guest requests.
    channel.on("broadcast", { event: "request-seat" }, ({ payload }) => {
      if (!isHostRef.current) return;
      hostClaimSeat(payload.seatIndex, { forPlayerId: payload.playerId, forName: payload.playerName, ai: payload.ai });
    });
    channel.on("broadcast", { event: "request-vacate" }, ({ payload }) => {
      if (!isHostRef.current) return;
      hostVacateSeat(payload.seatIndex);
    });
    channel.on("broadcast", { event: "request-start" }, () => {
      if (!isHostRef.current) return;
      hostStartGame();
    });
    channel.on("broadcast", { event: "request-action" }, ({ payload }) => {
      if (!isHostRef.current) return;
      hostApplyAction(payload.playerId, payload.action);
    });
    channel.on("broadcast", { event: "request-reset" }, () => {
      if (!isHostRef.current) return;
      hostResetGame();
    });

    channel.subscribe(async (status) => {
      if (status === "SUBSCRIBED") {
        await channel.track({ joinedAt: Date.now() });
        setConnected(true);
        broadcastState();
      }
    });

    return () => {
      supabase.removeChannel(channel);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [roomCode]);

  // Keep a ref mirror of isHost for use inside stable broadcast handlers above.
  const isHostRef = useRef(isHost);
  useEffect(() => {
    isHostRef.current = isHost;
  }, [isHost]);

  // Host drives AI turns.
  useEffect(() => {
    if (!isHost || !game || game.status !== "playing") return;
    const current = game.players[game.currentPlayerIndex];
    if (!current?.isAI) return;
    const timer = setTimeout(() => {
      const action = chooseAIAction(game, current.id);
      hostApplyAction(current.id, action);
    }, 900);
    return () => clearTimeout(timer);
  }, [isHost, game, hostApplyAction]);

  return {
    playerId,
    isHost,
    connected,
    seats,
    game,
    presenceCount: presenceIds.length,
    requestSeat,
    vacateSeat,
    startGame,
    resetGame,
    sendAction,
    myLegalMoves: game ? legalMoves(game, playerId) : [],
  };
}
