import { useContext } from "react";
import { CustomThemeContext } from "../contexts/customThemeContext";

export const useCustomTheme = () => {
  return useContext(CustomThemeContext);
};