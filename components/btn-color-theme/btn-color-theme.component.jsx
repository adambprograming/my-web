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
import { LanguageContext } from "../../context/lang.context";

// Create btn that will change color theme of website
const ColorThemeBtn = () => {
  // Use Context
  const { isDarkTheme, setDarkTheme } = useContext(ColorThemeContext);
  const { languageDict } = useContext(LanguageContext)
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
      aria-label={languageDict.article_header.buttons.button_themes_aria_label}
      className="toggle-button"
      onClick={switchTheme}
    >
      {isDarkTheme ? (
        <Image src={IconNight} alt={languageDict.article_header.buttons.icon_dark_theme_alt} />
      ) : (
        <Image src={IconDay} alt={languageDict.article_header.buttons.icon_light_theme_alt} />
      )}
    </button>
  );
};

export default ColorThemeBtn;
