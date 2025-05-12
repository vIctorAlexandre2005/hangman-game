import { useContextHangManData } from "@/context";
import { categorias } from "@/utils/categories";
import { useState } from "react";

export function useHangMan() {
  const { play, setPlay } = useContextHangManData();

    function randomChooseCategory() {
        const result = categorias[Math.floor(Math.random() * categorias.length)];
        console.log(result);
        return result;
    };

    const randomCategory = randomChooseCategory();
    function randomChooseWord() {
        const words = randomCategory.palavras;
        const result = words[Math.floor(Math.random() * words.length)];
        console.log(result);
        return result;
    }
    const randomWord = randomChooseWord();
    console.log(randomCategory);
    console.log(randomWord);


  return { play, setPlay, randomCategory, randomWord };
}
