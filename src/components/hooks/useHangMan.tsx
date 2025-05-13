import { useContextHangManData } from "@/context";
import { categorias } from "@/utils/categories";
import { useState } from "react";

export function useHangMan() {
  const { play, setPlay, category, word, setCategory, setWord } =
    useContextHangManData();

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

  return { play, setPlay, category, word, startGame };
}
