import { useHangMan } from "@/components/hooks/useHangMan";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function PlayScreenHangMan() {
  const { randomCategory, randomWord } = useHangMan();
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [inputLetter, setInputLetter] = useState("");

  const handleGuess = () => {
    const letter = inputLetter.toLowerCase();

    if (letter && !guessedLetters.includes(letter)) {
      setGuessedLetters([...guessedLetters, letter]);
    }

    setInputLetter(""); // Limpa o input
  };
  return (
    <div>
      <h1>Categoria: {randomCategory.categoria}</h1>
      {randomWord.split("").map((char, idx) => (
        <div
          className={`w-10 h-10 border text-center border-black inline-block ${guessedLetters.includes(char.toLowerCase()) ? "bg-gray-300" : ""}`}
          key={idx}
        >
          {char.toUpperCase()}
        </div>
      ))}
      <Input
        value={inputLetter}
        onChange={(e) => setInputLetter(e.target.value)}
        maxLength={1}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleGuess();
          }
        }}
        className="w-10 h-10 border text-center border-black inline-block"
      />
      <Button onClick={handleGuess}>Adivinhar</Button>
    </div>
  );
}
