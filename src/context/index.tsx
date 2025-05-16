import {
  Category,
  defaultValueHangManProps,
  HangManProps,
} from "@/interface/HangMan";
import { createContext, useContext, ReactNode, useState, useRef } from "react";

const HangManProvider = createContext<HangManProps>(defaultValueHangManProps);

const HangManContext = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<Category | null>(null); // categoria da palavra a ser adivinhada
  const [word, setWord] = useState<string | null>(null); // palavra a ser adivinhada
  const [play, setPlay] = useState(false); // controla quando o jogo começa e termina
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]); // letras chutadas
  const [currentGuess, setCurrentGuess] = useState(""); // <- estado local para input
  const [incorrectGuesses, setIncorrectGuesses] = useState<string[]>([]); // letras erradas
  const [correctGuesses, setCorrectGuesses] = useState<string[]>([]); // letras corretas
  const [remainingAttempts, setRemainingAttempts] = useState<number>(5); // tentativas
  const [noChancesLeft, setNoChancesLeft] = useState(false); // controla quando o jogador é obrigado a chutar
  const [gameWon, setGameWon] = useState(false); // controla quando o jogador ganha
  const [gameOver, setGameOver] = useState(false); // controla quando o jogador perde
  const [duplicateGuess, setDuplicateGuess] = useState<boolean>(false); // controla quando o jogador chuta uma letra duplicada

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
