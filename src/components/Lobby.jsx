export default function Lobby({ room, gameId, variant }) {
  const { seats, playerId, isHost, requestSeat, vacateSeat, startGame, resetGame, game, canStart } = room;

  const isTeams = gameId === "uno" && variant === "teams";
  const mySeat = seats.find((s) => s.playerId === playerId);
  const takenCount = seats.filter((s) => s.playerId).length;

  return (
    <div className="w-full max-w-3xl">
      {game?.status === "finished" && (
        <div className="bg-emerald-900/40 border border-emerald-700 rounded-xl p-4 mb-6 text-center">
          <div className="text-lg font-semibold">{game.log[game.log.length - 1]}</div>
          <button
            className="mt-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-sm font-semibold"
            onClick={resetGame}
          >
            Back to lobby
          </button>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {seats.map((seat) => {
          const isMe = seat.playerId === playerId;
          return (
            <div
              key={seat.seat}
              className={`rounded-xl p-4 flex items-center justify-between ${
                seat.playerId ? "wood-panel" : "felt-panel border-dashed border-2 border-emerald-100/10"
              } ${isTeams ? (seat.seat % 2 === 0 ? "ring-1 ring-sky-500/40" : "ring-1 ring-orange-500/40") : ""}`}
            >
              <div>
                <div className={`text-xs ${seat.playerId ? "text-amber-100/50" : "text-emerald-50/40"}`}>
                  Seat {seat.seat + 1}
                  {isTeams && (
                    <span className={seat.seat % 2 === 0 ? "text-sky-400" : "text-orange-400"}>
                      {" "}
                      · Team {seat.seat % 2 === 0 ? "A" : "B"}
                    </span>
                  )}
                </div>
                <div className={`font-semibold ${seat.playerId ? "text-amber-50" : "text-emerald-50/40"}`}>
                  {seat.name || "Empty"}
                  {seat.isAI && <span className="ml-2 text-xs bg-slate-700 px-2 py-0.5 rounded-full">AI</span>}
                  {isMe && <span className="ml-2 text-xs bg-indigo-600 px-2 py-0.5 rounded-full">You</span>}
                </div>
              </div>

              {!seat.playerId ? (
                <div className="flex gap-2">
                  <button
                    className="text-xs rounded-lg bg-indigo-600 hover:bg-indigo-500 px-3 py-1.5 disabled:opacity-30"
                    disabled={!!mySeat}
                    onClick={() => requestSeat(seat.seat, false)}
                  >
                    Sit here
                  </button>
                  <button
                    className="text-xs rounded-lg bg-slate-700 hover:bg-slate-600 px-3 py-1.5"
                    onClick={() => requestSeat(seat.seat, true)}
                  >
                    Fill AI
                  </button>
                </div>
              ) : (
                (isMe || seat.isAI) && (
                  <button
                    className="text-xs rounded-lg bg-slate-700 hover:bg-slate-600 px-3 py-1.5"
                    onClick={() => vacateSeat(seat.seat)}
                  >
                    {isMe ? "Stand up" : "Remove"}
                  </button>
                )
              )}
            </div>
          );
        })}
      </div>

      <div className="text-center space-y-2">
        {!mySeat && <p className="text-emerald-50/60 text-sm">Pick a seat to join the game.</p>}
        {isTeams && takenCount < 4 && (
          <p className="text-emerald-50/60 text-sm">Uno Teams needs all 4 seats filled (real players or AI).</p>
        )}
        {gameId === "flip7" && takenCount < 3 && (
          <p className="text-emerald-50/60 text-sm">Flip 7 needs at least 3 players (real players or AI).</p>
        )}
        {gameId === "battleship" && takenCount < 2 && (
          <p className="text-emerald-50/60 text-sm">Battleship needs at least 2 players (real players or AI).</p>
        )}
        {gameId === "catan" && takenCount < 3 && (
          <p className="text-emerald-50/60 text-sm">Catan needs 3-4 players (real players or AI).</p>
        )}
        {gameId === "tickettoride" && takenCount < 2 && (
          <p className="text-emerald-50/60 text-sm">Ticket to Ride NSW needs at least 2 players (real players or AI).</p>
        )}
        {canStart && !isHost && (
          <p className="text-emerald-50/60 text-sm">Waiting for the room host to start the game.</p>
        )}
        {isHost && (
          <button
            className="rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed px-6 py-3 font-semibold"
            disabled={!canStart}
            onClick={startGame}
          >
            Start game
          </button>
        )}
      </div>
    </div>
  );
}
