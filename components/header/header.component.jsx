"use client";
// Styles
import "./header.styles.scss";
// React Functions
import { useContext, useEffect, useState } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Componenets
import ColorThemeBtn from "../buttons-settings/btn-color-theme.component";
import LanguageBtn from "../buttons-settings/btn-lang.component";
import MenuDropdown from "../menu-dropdown/menu-dropdown.component";
import IconLogo from "../svgs/logo.component";

const Header = () => {
  const { languageDict } = useContext(LanguageContext);
  const [ windowWidth, setWindowWidth ] = useState(0)
  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    handleResize()
  }, [])
  useEffect(() => {
    // resize listeners
    window.addEventListener("resize", handleResize);
    return () => {
    window.removeEventListener("resize", handleResize);
    };
  })
  const handleLogoClick = () => {
    if (languageDict.lang == "en") {
      window.location.href = '/en'
    } else {
      window.location.href = '/cz'
    }
  }
  return (
    <header className="article-header">
      <div className="container-button">
        <ColorThemeBtn />
        <LanguageBtn />
      </div>
      <div className="container-logo">
        <IconLogo
          width={`${windowWidth >= 850 ? (141) : (94)}`}
          height={`${windowWidth >= 850 ? (133.5) : (89)}`}
          className="logo-icon"
          alt={languageDict.article_header.logo_alt}
          onClick={handleLogoClick}
        />
      </div>
      <div className="container-menu">
        <MenuDropdown />
      </div>
    </header>
  );
};

export default Header;
