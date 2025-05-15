import { useHangMan } from "@/components/hooks/useHangMan";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useContextHangManData } from "@/context";

export function PlayScreenHangMan() {
  const {
    category,
    word,
    currentGuess,
    setCurrentGuess,
    handleGuess,
    incorrectGuesses,
    duplicateGuess,
    correctGuesses,
    remainingAttempts,
    noChancesLeft,
    gameOver,
    gameWon,
    guessedLetters,
  } = useHangMan();

  console.log('word', word);

  return (
    <div>
      <div className="min-sm:flex max-sm:flex-col justify-between items-center">
        <h1>Categoria: {category && category.categoria}</h1>
        {remainingAttempts > 0 && <h1>Tentativas restantes: {remainingAttempts}</h1>}
        {duplicateGuess && <h1 className="text-red-500">Letra já chutada</h1>}
        {noChancesLeft && <h1 className="text-red-500">Você não tem mais chances! Chute a palavra inteira</h1>}
        {gameWon && <h1 className="text-green-500">Parabéns! Você ganhou! 🎉🎉</h1>}
        {gameOver && (
          <h1 className="text-red-500">Você perdeu! A palavra era: {word}</h1>
        )}
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
                    ? `bg-white ${gameOver ? "text-red-500" : "text-indigo-500"}`
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
