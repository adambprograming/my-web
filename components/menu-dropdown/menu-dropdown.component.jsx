'use client'
// Styles
import './menu-dropdown.styles.scss'
// Public & Assets
import MenuLight from "../../public/menu_light.svg";
import MenuDark from "../../public/menu_dark.svg"
// Next Functions
import Image from 'next/image';
// React Functions
import { useContext } from 'react';
import { useState } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
import { ColorThemeContext } from '../../context/color-theme.context';

const MenuDropdown = () => {
  const [activeMenu, setActiveMenu] = useState(false);
    const { languageDict } = useContext(LanguageContext)
    const { isDarkTheme } = useContext(ColorThemeContext)
    const handleMenuClick = () => {
        setActiveMenu(!activeMenu);
      
  
    };
    return (
    <nav className='container-menu' onClick={handleMenuClick}>
        {isDarkTheme ? (
          <Image
            className='menu-icon'
            src={MenuDark}
            alt={languageDict.article_header.menu.icon_alt}
          />
        ) : (
          <Image
            className='menu-icon'
            src={MenuLight}
            alt={languageDict.article_header.menu.icon_alt}
          />
        )}
            <ul className={`dropdown ${activeMenu === true ? "active" : ""}`}>
                <li className='dropdown-item'><a href="#article-education"><h5>{languageDict.article_header.menu.education}</h5></a></li>
                <li className='dropdown-item'><a href="#article-techstack"><h5>{languageDict.article_header.menu.techstack}</h5></a></li>
                <li className='dropdown-item'><a href="#article-contact"><h5>{languageDict.article_header.menu.contact}</h5></a></li>
            </ul>
    </nav>
  )
}

export default MenuDropdown