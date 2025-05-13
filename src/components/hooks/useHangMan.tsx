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
    currentGuess,
    setCurrentGuess,
  } = useContextHangManData();

  const [wrongGuesses, setWrongGuesses] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);

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
  };

  const handleGuess = () => {
    const normalizedGuess = currentGuess.toLowerCase();

    if (
      !word || correctGuesses.includes(normalizedGuess) ||
      wrongGuesses.includes(normalizedGuess)
    ) {
      setCurrentGuess("");
      return;
    }

    setGuessedLetters([...guessedLetters, normalizedGuess]);

    if (word.includes(normalizedGuess)) {
      // Se a letra está na palavra, não faz nada
      setCorrectGuesses([...guessedLetters, normalizedGuess]);
    } else {
      setWrongGuesses([...wrongGuesses, normalizedGuess]);
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
    correctGuesses,
    setCorrectGuesses,
    wrongGuesses,
    setWrongGuesses,
  };
};
