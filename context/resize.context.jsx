"use client";
// React Functions
import { createContext, useEffect, useState } from "react";

// Create Context
export const ResizeContext = createContext({
  windowWidth: window.innerWidth,
});
// Create Provider
export const ResizeProvider = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
        const width = window.innerWidth
        setWindowWidth(width)
    }
    // resize listeners
    window.addEventListener("resize", handleResize);
    return () => {
    window.removeEventListener("resize", handleResize);
    };
  })

  const value = { windowWidth, setWindowWidth };
  return (
    <ResizeContext.Provider value={value}>
      {children}
    </ResizeContext.Provider>
  );
};
