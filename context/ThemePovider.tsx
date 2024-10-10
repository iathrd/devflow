"use client";
import React, { useContext, createContext, useState, useEffect } from "react";

interface ThemeContextType {
    mode: "light" | "dark";
    setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const handleThemeChange = () => {
        if (mode === "dark") {
            setMode("light");
            document.body.classList.add("light");
        } else {
            setMode("dark");
            document.body.classList.remove("light");
        }
    };

    // useEffect(() => {
    //     handleThemeChange();
    // }, [mode]);

    return (
        <ThemeContext.Provider value={{ mode, setMode }}>
            {children}
        </ThemeContext.Provider>
    )

}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    return context;
}
