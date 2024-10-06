import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  // default configuration
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

// Custom hook
export default function useTheme() {
  return useContext(ThemeContext);
}
