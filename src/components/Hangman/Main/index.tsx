import { useHangMan } from "@/components/hooks/useHangMan";
import { Button } from "@/components/ui/button";
import { useContextHangManData } from "@/context";

export function MainScreenHangMan() {
  const { startGame } = useHangMan();
  return (
    <div className="flex max-sm:flex-col min-sm:flex-row gap-4 w-full justify-between items-center">
      <div className="min-sm:w-1/2 max-sm:w-full flex justify-center">
        <img
          src="/hangman_ofc.jpg"
          className="rounded-2xl shadow-2xl shadow-indigo-300
            max-sm:h-72 
            max-sm:w-72
            min-sm:h-11/12 min-sm:w-11/12
            min-md:h-9/12 min-md:w-9/12  
            max-sm:mb-10"
          alt="hangman"
        />
      </div>

      <div className="min-sm:w-1/2 max-sm:w-full">
        <div className="max-sm:mb-10 min-sm:mb-24 flex flex-col items-center animate-bounce">
          <h1 className="text-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
            Jogar nunca foi tão divertido!
          </h1>

          <p className="text-base font-light">
            Descubra o que acontece quando você jogar HangMe.
          </p>
        </div>
        <Button
          className="w-full shadow-2xl hover:shadow-fuchsia-500 transition duration-300 hover:bg-gradient-to-r from-pink-500 to-indigo-500 text-lg p-6 cursor-pointer"
          onClick={startGame}
        >
          BORA JOGAR
        </Button>
      </div>
    </div>
  );
}
