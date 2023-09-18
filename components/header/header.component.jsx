"use client";
// Styles
import './header.styles.scss'
// Public & Assets
import LogoLightTheme from "../../public/logo_light.svg";
import LogoDarkTheme from "../../public/logo_dark.svg";
// Next Functions
import Image from "next/image";
import Link from "next/link";
// React Functions
import { useContext } from "react";
// Context
import { ColorThemeContext } from "../../context/color-theme.context";
import { LanguageContext } from "../../context/lang.context";
// Componenets
import ColorThemeBtn from "../buttons-settings/btn-color-theme.component";
import LanguageBtn from "../buttons-settings/btn-lang.component";
import MenuDropdown from '../menu-dropdown/menu-dropdown.component';

const Header = () => {
  const { languageDict } = useContext(LanguageContext);
  const { isDarkTheme } = useContext(ColorThemeContext);
  return (
    <header className="article-header">
      <div className="container-button">
        <ColorThemeBtn />
        <LanguageBtn />
      </div>
      <div className="container-logo">
        {isDarkTheme ? (
          <Image
            src={LogoDarkTheme}
            alt={languageDict.article_header.logo_alt}
          />
        ) : (
          <Image
            src={LogoLightTheme}
            alt={languageDict.article_header.logo_alt}
          />
        )}
      </div>
      <MenuDropdown />
    </header>
  );
};

export default Header;
