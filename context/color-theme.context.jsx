"use client";
// React Functions
import { createContext, useState } from "react";

// Create Context
export const ColorThemeContext = createContext({
  isDarkTheme: false,
});
// Create Provider
export const ColorThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const value = { isDarkTheme, setDarkTheme };
  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
};
