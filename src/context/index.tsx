import {
  Category,
  defaultValueHangManProps,
  HangManProps,
} from "@/interface/HangMan";
import { createContext, useContext, ReactNode, useState } from "react";

const HangManProvider = createContext<HangManProps>(defaultValueHangManProps);

const HangManContext = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [word, setWord] = useState<string | null>(null);
  const [play, setPlay] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState(""); // <- estado local para input
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]);
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]);
  const [remainingAttempts, setRemainingAttempts] = useState<number>(5);
  const [noChancesLeft, setNoChancesLeft] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [duplicateGuess, setDuplicateGuess] = useState<boolean>(false);

  return (
    <HangManProvider.Provider
      value={{
        play,
        setPlay,
        category,
        setCategory,
        setWord,
        word,
        guessedLetters,
        setGuessedLetters,
        currentGuess,
        setCurrentGuess,
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
      }}
    >
      {children}
    </HangManProvider.Provider>
  );
};

export const useContextHangManData = () => useContext(HangManProvider);
export default HangManContext;
