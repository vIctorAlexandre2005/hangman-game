import { Dispatch, SetStateAction } from 'react';

export interface HangManProps {
   play: boolean;
   setPlay: Dispatch<SetStateAction<boolean>>;
}

export const defaultValueHangManProps: HangManProps = {
   play: false,
   setPlay: () => {},
};
