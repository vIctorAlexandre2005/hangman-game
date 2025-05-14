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
  const [wrongCount, setWrongCount] = useState<number>(5);
  const [thereIsNoChances, setThereIsNoChances] = useState(false);
  const [winner, setWinner] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [letterGuessed, setLetterGuessed] = useState<boolean>(false);

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

  function handleGuess() {
    const normalizedGuess = currentGuess.toLowerCase();

    if (
      !word ||
      correctGuesses.includes(normalizedGuess) ||
      wrongGuesses.includes(normalizedGuess)
    ) {
      setLetterGuessed(true);
      setCurrentGuess("");
      return;
    };
    setLetterGuessed(false);
    setGuessedLetters([...guessedLetters, normalizedGuess]);

    if (word.includes(normalizedGuess)) {
      setCorrectGuesses([...correctGuesses, normalizedGuess]); // se a letra está na palavra, adiciona à lista de letras corretas
    } else {
      setWrongGuesses([...wrongGuesses, normalizedGuess]); // se a letra não está na palavra, adiciona à lista de letras erradas
      setWrongCount(wrongCount - 1); // decrementa o número de tentativas restantes
    }

    if (wrongCount <= 1) {
      setThereIsNoChances(true);
    }

    // Fase de chutes
    if (normalizedGuess === word && thereIsNoChances) {
      console.log("Você acertou a palavra!");
      setThereIsNoChances(false);
      setWinner(true);
      return;
    }

    if (normalizedGuess !== word && thereIsNoChances) {
      setThereIsNoChances(false);
      setIsGameOver(true);
      return;
    };

    setWrongCount(wrongCount - 1);
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
    wrongCount,
    setWrongCount,
    thereIsNoChances,
    setThereIsNoChances,
    winner,
    setWinner,
    isGameOver,
    letterGuessed,
  };
}
