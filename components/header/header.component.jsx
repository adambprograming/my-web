"use client";
// Public & Assets
import Menu from "../../public/menu.svg";
import LogoLightTheme from "../../public/LOGO Light.svg";
import LogoDarkTheme from "../../public/LOGO Dark.svg";
// Next Functions
import Image from "next/image";
import Link from "next/link";
// React Functions
import { useContext } from "react";
// Context
import { ColorThemeContext } from "../../context/color-theme.context";
import { LanguageContext } from "../../context/lang.context";
// Componenets
import ColorThemeBtn from "../btn-color-theme/btn-color-theme.component";
import LanguageBtn from "../btn-lang/btn-lang.component";

const Header = () => {
  const { languageDict } = useContext(LanguageContext);
  const { isDarkTheme } = useContext(ColorThemeContext);
  return (
    <header className="article_header">
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
      <nav className="container-menu">
        <Image src={Menu} alt={languageDict.article_header.menu.icon_alt} />
      </nav>
    </header>
  );
};

export default Header;
