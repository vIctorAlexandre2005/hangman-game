import { useContextHangManData } from "@/context";
import { categorias } from "@/utils/categories";
import { useState } from "react";

export function useHangMan() {
  const {
    play,
    setPlay,
    category,
    word,
    setCategory,
    setWord,
    guessedLetters,
    setGuessedLetters,
  } = useContextHangManData();

  function startGame() {
    const newCategory =
      categorias[Math.floor(Math.random() * categorias.length)];
    const newWord =
      newCategory.palavras[
        Math.floor(Math.random() * newCategory.palavras.length)
      ];

    setCategory(newCategory);
    setWord(newWord);
    setPlay(true);
  }

  const [currentGuess, setCurrentGuess] = useState(""); // <- estado local para input

  const handleGuess = () => {
    const normalizedGuess = currentGuess.toLowerCase();

    // Ignora se já foi chutada ou é vazia
    if (normalizedGuess && !guessedLetters.includes(normalizedGuess)) {
      setGuessedLetters([...guessedLetters, normalizedGuess]);
    }

    setCurrentGuess(""); // limpa input após chute
  };

  return {
    play,
    setPlay,
    category,
    word,
    startGame,
    currentGuess,
    setCurrentGuess,
    handleGuess,
    guessedLetters,
    setGuessedLetters,
  };
}
