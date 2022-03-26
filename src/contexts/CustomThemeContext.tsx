import React, { createContext } from "react";

import { DefaultTheme } from "styled-components";
import usePersistedState from "../hooks/usePersistedState";

import dark from './../styles/themes/dark';
import light from './../styles/themes/light';

interface CustomThemeContext {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const CustomThemeContext = createContext<CustomThemeContext>(
  {} as CustomThemeContext
);

export const CustomThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', dark);

  // TODO Refactor this using useCallback
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <CustomThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </CustomThemeContext.Provider>
  );
};
