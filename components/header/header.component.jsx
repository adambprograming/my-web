'use client'
// Public & Assets
import Menu from "../../public/menu.svg"
// Next Functions
import Image from 'next/image'
import Link from 'next/link'
// Context
import { useContext } from "react";
import { LanguageContext } from "../../context/lang.context";
// Componenets
import ColorThemeBtn from '../btn-color-theme/btn-color-theme.component'
import LanguageBtn from "../btn-lang/btn-lang.component"


const Header = () => {
  const { languageDict } = useContext(LanguageContext)
    return (
      <header className="header">
        <ColorThemeBtn />
        <LanguageBtn />
        {languageDict.meta.description}
      </header>
    );
  };
  
  export default Header;