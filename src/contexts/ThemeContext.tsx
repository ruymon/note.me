import { createContext, useState, useContext } from "react";

type ThemeType = "light" | "hybrid" | "dark";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (type: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeProvider(Props) {
  const [theme, setTheme] = useState<ThemeType>("light");

  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      {Props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme () {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}