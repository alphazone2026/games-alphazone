import { useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import { useRoom, useRoomMeta } from "../game/useRoom.js";
import Lobby from "../components/Lobby.jsx";
import GameBoard from "../components/GameBoard.jsx";
import Flip7Board from "../components/Flip7Board.jsx";
import BattleshipBoard from "../components/BattleshipBoard.jsx";
import CatanBoard from "../components/CatanBoard.jsx";
import TicketToRideBoard from "../components/TicketToRideBoard.jsx";

const VALID_GAMES = ["uno", "flip7", "battleship", "catan", "tickettoride"];

const GAME_LABELS = {
  uno: { classic: "Uno", teams: "Uno Teams" },
  flip7: { default: "Flip 7" },
  battleship: { default: "Battleship" },
  catan: { default: "Catan" },
  tickettoride: { default: "Ticket to Ride NSW" },
};

const BOARDS = {
  flip7: Flip7Board,
  battleship: BattleshipBoard,
  catan: CatanBoard,
  tickettoride: TicketToRideBoard,
};

export default function Room() {
  const { roomCode } = useParams();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const requestedGame = params.get("game");
  const urlGameId = VALID_GAMES.includes(requestedGame) ? requestedGame : "uno";
  const urlVariant = urlGameId === "uno" ? (params.get("variant") === "teams" ? "teams" : "classic") : undefined;

  // The room's real game/variant, once Firebase confirms it, wins over the
  // URL's ?game= — protects joiners from a stale/missing/wrong query param
  // (e.g. joining by typed code, which can't know the game in advance).
  const meta = useRoomMeta(roomCode);
  const metaLoaded = meta !== undefined;
  const gameId = meta?.gameId && VALID_GAMES.includes(meta.gameId) ? meta.gameId : urlGameId;
  const variant = gameId === "uno" ? (meta?.variant || urlVariant) : undefined;

  const name = sessionStorage.getItem("uno_player_name");

  const room = useRoom(metaLoaded ? roomCode : null, name, { gameId, variant });

  useEffect(() => {
    if (!name) navigate("/");
  }, [name, navigate]);

  if (!name || !metaLoaded) return null;

  const label = gameId === "uno" ? GAME_LABELS.uno[variant] : GAME_LABELS[gameId].default;
  const Board = BOARDS[gameId] || GameBoard;

  return (
    <div className="min-h-screen tabletop text-slate-100 flex flex-col items-center px-4 py-8">
      <div className="w-full max-w-5xl flex items-center justify-between mb-6 wood-panel rounded-xl px-4 py-2.5">
        <button className="text-amber-100/70 hover:text-amber-50 text-sm" onClick={() => navigate("/")}>
          &larr; Leave
        </button>
        <div className="text-center">
          <div className="text-2xl font-bold tracking-widest text-amber-50" style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
            {roomCode}
          </div>
          <div className="text-xs text-amber-100/50">{label}</div>
        </div>
        <div className="text-xs text-amber-100/50 w-16 text-right">{room.connected ? "online" : "connecting…"}</div>
      </div>

      {!room.game || room.game.status === "finished" ? (
        <Lobby room={room} gameId={gameId} variant={variant} />
      ) : (
        <Board room={room} />
      )}
    </div>
  );
}
