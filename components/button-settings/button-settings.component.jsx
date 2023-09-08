'use client'

import IconDay from "../../public/theme_day.svg";
import IconNight from "../../public/theme_night.svg";
import Image from "next/image";
import { useState } from 'react'

const ThemeToggleBtn = () => {
  const [isDarkTheme, setDarkTheme] = useState(false)

  const switchTheme = () => {
    if (!isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
    setDarkTheme(!isDarkTheme)
  }

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

export default ThemeToggleBtn;
