import { useHangMan } from "@/components/hooks/useHangMan";
import { Button } from "@/components/ui/button";
import { useContextHangManData } from "@/context";

export function MainScreenHangMan() {
  const { play, setPlay } = useContextHangManData();
  return (
    <div className="flex gap-4 w-full justify-between items-center">
      <div className="w-1/2 flex justify-center">
        <img
          src="/hangman_ofc.jpg"
          height={400}
          width={400}
          className="rounded-2xl shadow-2xl shadow-indigo-300"
          alt="hangman"
        />
      </div>

      <div className="w-1/2">
        <div className="mb-24 flex flex-col items-center animate-bounce">
          <h1 className="text-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-transparent bg-clip-text">
            Jogar nunca foi tão divertido!
          </h1>

          <p className="text-base font-light">
            Descubra o que acontece quando você jogar HangMe.
          </p>
        </div>
        <Button
          className="w-full shadow-2xl hover:shadow-fuchsia-500 transition duration-300 hover:bg-gradient-to-r from-pink-500 to-indigo-500 text-lg p-6 cursor-pointer"
          onClick={() => setPlay(true)}
        >
          BORA JOGAR
        </Button>
      </div>
    </div>
  );
}
