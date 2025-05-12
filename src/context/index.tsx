import { defaultValueHangManProps, HangManProps } from "@/interface/HangMan";
import { createContext, useContext, ReactNode, useState } from "react";

const HangManProvider = createContext<HangManProps>(defaultValueHangManProps);

const HangManContext = ({ children }: { children: ReactNode }) => {
  const [play, setPlay] = useState(false);

  return (
    <HangManProvider.Provider
      value={{
        play,
        setPlay,
      }}
    >
      {children}
    </HangManProvider.Provider>
  );
};

export const useContextHangManData = () => useContext(HangManProvider);
export default HangManContext;
