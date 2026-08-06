import { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useRoom } from "../game/useRoom.js";
import Lobby from "../components/Lobby.jsx";
import GameBoard from "../components/GameBoard.jsx";
import Flip7Board from "../components/Flip7Board.jsx";

const GAME_LABELS = {
  uno: { classic: "Uno", teams: "Uno Teams" },
  flip7: { default: "Flip 7" },
};

export default function Room() {
  const { roomCode } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const gameId = params.get("game") === "flip7" ? "flip7" : "uno";
  const variant = gameId === "uno" ? (params.get("variant") === "teams" ? "teams" : "classic") : undefined;
  const name = sessionStorage.getItem("uno_player_name");

  const room = useRoom(roomCode, name, { gameId, variant });

  useEffect(() => {
    if (!name) navigate("/");
  }, [name, navigate]);

  if (!name) return null;

  const label = gameId === "uno" ? GAME_LABELS.uno[variant] : GAME_LABELS.flip7.default;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button className="text-slate-400 hover:text-slate-200 text-sm" onClick={() => navigate("/")}>
          &larr; Leave
        </button>
        <div className="text-center">
          <div className="text-2xl font-bold tracking-widest">{roomCode}</div>
          <div className="text-xs text-slate-500">{label}</div>
        </div>
        <div className="text-xs text-slate-500 w-16 text-right">{room.connected ? "online" : "connecting…"}</div>
      </div>

      {!room.game || room.game.status === "finished" ? (
        <Lobby room={room} gameId={gameId} variant={variant} />
      ) : gameId === "flip7" ? (
        <Flip7Board room={room} />
      ) : (
        <GameBoard room={room} />
      )}
    </div>
  );
}
