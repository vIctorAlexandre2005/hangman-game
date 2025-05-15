import { MainScreenHangMan } from "@/components/Hangman/Main";
import { PlayScreenHangMan } from "@/components/Hangman/Play";
import { useHangMan } from "@/components/hooks/useHangMan";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";

export default function Home() {
  const { play } = useHangMan();
  return (
    <div className="h-screen w-full bg-gradient-to-r from-indigo-500 to-pink-500 animate-gradient">
      <div className="fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <div className="w-full flex items-center p-4 justify-center">
          <Card className="
            p-4 shadow-2xl
            max-sm:w-full 
            min-sm:w-full 
            min-md:w-11/12
            min-lg:w-8/12
            "
          >
            <h1 className="text-4xl text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
              HangMan
            </h1>
            {play ? <PlayScreenHangMan /> : <MainScreenHangMan />}
          </Card>
        </div>
      </div>
    </div>
  );
}
