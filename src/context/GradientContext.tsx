import React, { createContext, useState } from "react";

interface ImageColors {
    primary: string;
    secundary: string;
}

interface ContextProps {
    colors: ImageColors;
    prevColors: ImageColors;
    setMainColors: (colors: ImageColors)=>void;
    setPrevMainColors: (colors: ImageColors)=>void;
}

export const GradientContext = createContext({} as ContextProps);

export const GradientProvider =({children}: any) => {

    const [colors, setColors] = useState<ImageColors>({
        primary: 'transparent',
        secundary: 'transparent'
    });

    const [prevColors, setprevColors] = useState<ImageColors>({
        primary: 'transparent',
        secundary: 'transparent'
    });

    const setMainColors = (colors: ImageColors) => {
        setColors( colors );
    }
    const setPrevMainColors = (colors: ImageColors) => {
        setprevColors( colors );
    }

    return (
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors
        }}>
            {children}
        </GradientContext.Provider>
    )
}