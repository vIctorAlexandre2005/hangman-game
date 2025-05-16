import { Dispatch, SetStateAction } from 'react';

export interface Category {
   categoria: string;
   palavras: string[];
}

export interface HangManProps {
   play: boolean;
   setPlay: Dispatch<SetStateAction<boolean>>;
   category: Category | null;
   word: string | null;
   setCategory: Dispatch<SetStateAction<Category | null>>;
   setWord: Dispatch<SetStateAction<string | null>>;
   guessedLetters: string[];
   setGuessedLetters: Dispatch<SetStateAction<string[]>>;
   currentGuess: string;
   setCurrentGuess: Dispatch<SetStateAction<string>>;
   incorrectGuesses: string[];
   setIncorrectGuesses: Dispatch<SetStateAction<string[]>>;
   correctGuesses: string[];
   setCorrectGuesses: Dispatch<SetStateAction<string[]>>;
   remainingAttempts: number;
   setRemainingAttempts: Dispatch<SetStateAction<number>>;
   noChancesLeft: boolean;
   setNoChancesLeft: Dispatch<SetStateAction<boolean>>;
   gameWon: boolean;
   setGameWon: Dispatch<SetStateAction<boolean>>;
   gameOver: boolean;
   setGameOver: Dispatch<SetStateAction<boolean>>;
   duplicateGuess: boolean;
   setDuplicateGuess: Dispatch<SetStateAction<boolean>>;
}

export const defaultValueHangManProps: HangManProps = {
   play: false,
   setPlay: () => {},
   category: null,
   setCategory: () => {},
   word: null,
   setWord: () => {},
   guessedLetters: [],
   setGuessedLetters: () => {},
   currentGuess: '',
   setCurrentGuess: () => {},
   incorrectGuesses: [],
   setIncorrectGuesses: () => {},
   correctGuesses: [],
   setCorrectGuesses: () => {},
   remainingAttempts: 5,
   setRemainingAttempts: () => {},
   noChancesLeft: false,
   setNoChancesLeft: () => {},
   gameWon: false,
   setGameWon: () => {},
   gameOver: false,
   setGameOver: () => {},
   duplicateGuess: false,
   setDuplicateGuess: () => {},
};
