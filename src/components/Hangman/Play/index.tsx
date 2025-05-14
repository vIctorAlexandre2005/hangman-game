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
    wrongGuesses,
    correctGuesses,
    wrongCount,
    thereIsNoChances,
    isGameOver,
    winner,
    letterGuessed,
  } = useHangMan();
  const { guessedLetters } = useContextHangManData();
  const sameWord =
    correctGuesses.includes(currentGuess) ||
    wrongGuesses.includes(currentGuess);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h1>Categoria: {category && category.categoria}</h1>
        {letterGuessed && <h1 className="text-red-500">Letra já chutada</h1>}
        {thereIsNoChances && <h1 className="text-red-500">Você não tem mais chances! Chute a palavra inteira</h1>}
        {winner && <h1 className="text-green-500">Parabéns! Você ganhou!</h1>}
        {wrongCount > 0 && <h1>Tentativas restantes: {wrongCount}</h1>}
        {isGameOver && (
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
                  isGuessed || winner || isGameOver
                    ? `bg-white ${isGameOver ? "text-red-500" : "text-black"}`
                    : "bg-gray-300 text-transparent"
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
            className="w-1/2"
            onChange={(e) => setCurrentGuess(e.target.value)}
            maxLength={thereIsNoChances ? 100 : 1}
          />
          <Button
            className="font-light text-sm"
            onClick={() =>
              winner || isGameOver ? window.location.reload() : handleGuess()
            }
          >
            {winner
              ? "Ganhar novamente!"
              : isGameOver
              ? "Ganhar a próxima!"
              : "Chutar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
