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
};
