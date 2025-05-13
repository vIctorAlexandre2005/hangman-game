import { useHangMan } from "@/components/hooks/useHangMan";
import { Input } from "@/components/ui/input";
import { useContextHangManData } from "@/context";

export function PlayScreenHangMan() {
  const { category, word } = useHangMan();
  const { guessedLetters, setGuessedLetters } = useContextHangManData();
  console.log("word", word);

  return (
    <div>
      <h1>Categoria: {category && category.categoria}</h1>
      <div className="flex">
        {word?.split("").map((char, index) => {
          const isGuessed = guessedLetters.includes(char.toLowerCase());

          return (
            <div
              key={index}
              className={`w-10 h-10 border border-black inline-flex items-center justify-center text-xl font-bold ${
                isGuessed
                  ? "bg-white text-black"
                  : "bg-gray-300 text-transparent"
              }`}
            >
              {char.toUpperCase()}
            </div>
          );
        })}
        <Input 
          value={guessedLetters}
          className="w-full mt-4"
          onChange={(e) => setGuessedLetters(e.target.value.split(", ").map(letter => letter.toLowerCase()))}
          maxLength={1}
        />
      </div>
    </div>
  );
}
