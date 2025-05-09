import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-gradient">
      <div className="fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="w-full flex items-center justify-center">
          <Card className="w-2/3 p-4 shadow-2xl">
            <h1 className="text-4xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              HangMe
            </h1>
            <div className="flex gap-4 w-full justify-between items-center">
              <div className="w-1/2 flex justify-center">
                <img
                  src="/hangman_ofc.jpg"
                  height={400}
                  width={400}
                  className="rounded-2xl shadow-2xl shadow-indigo-300"
                  alt="hangme"
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
                <Button className="w-full shadow-2xl hover:shadow-fuchsia-500 transition duration-300 hover:bg-gradient-to-r from-pink-500 to-indigo-500 text-lg p-6 cursor-pointer">
                  BORA JOGAR
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
