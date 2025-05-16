import { useContextHangManData } from "@/context";
import { categorias } from "@/utils/categories";
import { useCallback, useEffect, useRef, useState } from "react";

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
    incorrectGuesses,
    setIncorrectGuesses,
    correctGuesses,
    setCorrectGuesses,
    remainingAttempts,
    setRemainingAttempts,
    noChancesLeft,
    setNoChancesLeft,
    gameWon,
    setGameWon,
    gameOver,
    setGameOver,
    duplicateGuess,
    setDuplicateGuess,
  } = useContextHangManData();
  const [secondsLeft, setSecondsLeft] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  }

  const startCount = useCallback(() => {
    if (!isActive && secondsLeft > 0) {
      setIsActive(true);
    }
  }, [isActive, secondsLeft]);

  function pauseCount() {
    setIsActive(false);
  }

  /* function resetCount() {
    setIsActive(false);
    setSecondsLeft(60 * 5);
  }; */

  useEffect(() => {
    if (play) {
      startCount();
    }
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft((prev) => {
          if (prev <= 1) {
            clearInterval(intervalRef.current!);
            setIsActive(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isActive, play]);

  function startGame() {
    const selectedCategory =
      categorias[Math.floor(Math.random() * categorias.length)];
    const chosenWord =
      selectedCategory.palavras[
        Math.floor(Math.random() * selectedCategory.palavras.length)
      ];

    setCategory(selectedCategory);
    setWord(chosenWord);
    setPlay(true);
  }

  useEffect(() => {
    if (secondsLeft === 0 && isActive) {
      setNoChancesLeft(true);
    }
  }, [secondsLeft, isActive]);

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
    setGameOver,
    duplicateGuess,
    setDuplicateGuess,
    startCount,
    pauseCount,
    formatTime,
    secondsLeft,
    isActive,
  };
}
