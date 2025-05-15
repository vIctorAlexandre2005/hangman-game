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

  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(5);
  const [noChancesLeft, setNoChancesLeft] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [duplicateGuess, setDuplicateGuess] = useState<boolean>(false);

  function startGame() {
    const selectedCategory =
      categorias[Math.floor(Math.random() * categorias.length)];
    const chosenWord =
      selectedCategory.palavras[Math.floor(Math.random() * selectedCategory.palavras.length)];

    setCategory(selectedCategory);
    setWord(chosenWord);
    setPlay(true);
  }

  function handleGuess() {
    const guess = currentGuess.toLowerCase();

    if (
      !word ||
      correctGuesses.includes(guess) ||
      incorrectGuesses.includes(guess)
    ) {
      setDuplicateGuess(true);
      setCurrentGuess("");
      return;
    }
    setDuplicateGuess(false);
    setGuessedLetters([...guessedLetters, guess]);

    if (word.includes(guess)) {
      const updatedCorrectGuesses = [...correctGuesses, guess];
      setCorrectGuesses(updatedCorrectGuesses);

      const uniqueWordLetters = [...new Set(word.toLowerCase().split(""))];
      const allLettersGuessed = uniqueWordLetters.every((letter) =>
        updatedCorrectGuesses.includes(letter)
      );

      if (allLettersGuessed && !noChancesLeft) {
        setGameWon(true);
        return;
      }
    } else {
      setIncorrectGuesses([...incorrectGuesses, guess]);
      setRemainingAttempts(remainingAttempts - 1);
    }

    if (remainingAttempts <= 1) {
      setNoChancesLeft(true);
    }

    if (guess === word && noChancesLeft) {
      setNoChancesLeft(false);
      setGameWon(true);
      return;
    }

    if (guess !== word && noChancesLeft) {
      setNoChancesLeft(false);
      setGameOver(true);
      return;
    }

    setRemainingAttempts(remainingAttempts - 1);
    setCurrentGuess("");
  }

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
    incorrectGuesses,
    setIncorrectGuesses,
    remainingAttempts,
    setRemainingAttempts,
    noChancesLeft,
    setNoChancesLeft,
    gameWon,
    setGameWon,
    gameOver,
    duplicateGuess,
  };
}
