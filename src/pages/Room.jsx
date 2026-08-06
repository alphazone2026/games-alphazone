import { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useRoom } from "../game/useRoom.js";
import Lobby from "../components/Lobby.jsx";
import GameBoard from "../components/GameBoard.jsx";

export default function Room() {
  const { roomCode } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const mode = params.get("mode") === "teams" ? "teams" : "classic";
  const name = sessionStorage.getItem("uno_player_name");

  const room = useRoom(roomCode, name, mode);

  useEffect(() => {
    if (!name) navigate("/");
  }, [name, navigate]);

  if (!name) return null;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-3xl flex items-center justify-between mb-6">
        <button className="text-slate-400 hover:text-slate-200 text-sm" onClick={() => navigate("/")}>
          &larr; Leave
        </button>
        <div className="text-center">
          <div className="text-2xl font-bold tracking-widest">{roomCode}</div>
          <div className="text-xs text-slate-500">{mode === "teams" ? "Uno Teams" : "Uno"}</div>
        </div>
        <div className="text-xs text-slate-500 w-16 text-right">{room.connected ? "online" : "connecting…"}</div>
      </div>

      {!room.game || room.game.status === "finished" ? (
        <Lobby room={room} mode={mode} />
      ) : (
        <GameBoard room={room} />
      )}
    </div>
  );
}
