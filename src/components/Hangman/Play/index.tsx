import { useHangMan } from "@/components/hooks/useHangMan";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { BiPause } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { FcAlarmClock, FcClock, FcStart } from "react-icons/fc";
import { IoIosPause } from "react-icons/io";
import { PiClockFill } from "react-icons/pi";
import { ClockLoader } from "react-spinners";

export function PlayScreenHangMan() {
  const {
    category,
    word,
    currentGuess,
    setCurrentGuess,
    handleGuess,
    duplicateGuess,
    remainingAttempts,
    noChancesLeft,
    gameOver,
    gameWon,
    guessedLetters,
    isActive,
    secondsLeft,
    startCount,
    pauseCount,
    formatTime,
  } = useHangMan();

  return (
    <div>
      <div className="min-sm:flex max-sm:flex-col justify-between items-center">
        <h1>Categoria: {category && category.categoria}</h1>
        {noChancesLeft && secondsLeft === 0 && (
          <h1 className="text-red-500">
            Você não tem mais chances! Chute a palavra inteira
          </h1>
        )}
        {duplicateGuess && <h1 className="text-red-500">Letra já chutada</h1>}
        {gameWon && (
          <h1 className="text-green-500">Parabéns! Você ganhou! 🎉🎉</h1>
        )}
        {gameOver && (
          <h1 className="text-red-500">Você perdeu! A palavra era: {word}</h1>
        )}
        <div className="flex flex-col gap-6 items-center">
          <div>
            <h1 className="text-2xl flex items-center gap-2 font-light text-emerald-500">
              <ClockLoader size={30} color="green" /> Tempo restante:{" "}
              {formatTime(secondsLeft)}
            </h1>
            {secondsLeft !== 0 && (
              <Button onClick={isActive ? pauseCount : startCount}>
                {isActive ? <IoIosPause size={34} /> : <FaPlay size={34} />}
              </Button>
            )}
          </div>
          {remainingAttempts > 0 && (
            <h1 className="text-2xl text-slate-600 font-light">
              Tentativas restantes: {remainingAttempts}
            </h1>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center mt-4">
        <div className="flex">
          {word?.split("").map((char, index) => {
            const isGuessed = guessedLetters.includes(char.toLowerCase());
            return (
              <div
                key={index}
                className={`w-10 h-10 border border-black inline-flex items-center justify-center text-xl font-bold ${
                  isGuessed || gameWon || gameOver
                    ? `bg-white ${
                        gameOver ? "text-red-500" : "text-indigo-500"
                      }`
                    : "bg-transparent text-transparent"
                }`}
              >
                {char.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div className="flex mt-10 justify-center w-full gap-2 items-center">
          <Input
            value={currentGuess}
            className="min-sm:w-1/2 max-sm:w-full border-purple-500"
            onChange={(e) => setCurrentGuess(e.target.value)}
            maxLength={noChancesLeft ? 100 : 1}
          />
          <Button
            className="font-light text-sm"
            onClick={() =>
              gameWon || gameOver ? window.location.reload() : handleGuess()
            }
          >
            {gameWon
              ? "Ganhar novamente!"
              : gameOver
              ? "Ganhar a próxima!"
              : "Chutar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
