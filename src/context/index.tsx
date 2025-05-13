import { Category, defaultValueHangManProps, HangManProps } from "@/interface/HangMan";
import { createContext, useContext, ReactNode, useState } from "react";

const HangManProvider = createContext<HangManProps>(defaultValueHangManProps);

const HangManContext = ({ children }: { children: ReactNode }) => {
  const [category, setCategory] = useState<Category | null>(null);
  const [word, setWord] = useState<string | null>(null);
  const [play, setPlay] = useState(false);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);


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
      }}
    >
      {children}
    </HangManProvider.Provider>
  );
};

export const useContextHangManData = () => useContext(HangManProvider);
export default HangManContext;
