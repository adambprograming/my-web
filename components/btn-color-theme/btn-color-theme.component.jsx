"use client";
// Public & Assets
import IconDay from "../../public/theme_day.svg";
import IconNight from "../../public/theme_night.svg";
// Next Functions
import Image from "next/image";
// React Functions
import { useContext } from "react";
// Context
import { ColorThemeContext } from "../../context/color-theme.context";

// Create btn that will change color theme of website
const ColorThemeBtn = () => {
  // Use Context
  const { isDarkTheme, setDarkTheme } = useContext(ColorThemeContext);
  // Create btn handler that will add or remove 'dark-theme' class from html tag
  const switchTheme = () => {
    if (!isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
    // Set opposite theme throught context
    setDarkTheme(!isDarkTheme);
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={switchTheme}
    >
      {isDarkTheme ? (
        <Image src={IconNight} alt="Icon with moon meaning dark mode" />
      ) : (
        <Image src={IconDay} alt="Icon with sun meaning sunlight" />
      )}
    </button>
  );
};

export default ColorThemeBtn;
