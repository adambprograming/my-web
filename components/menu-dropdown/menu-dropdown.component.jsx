'use client'
// Styles
import './menu-dropdown.styles.scss'
// React Functions
import { useContext, useState } from 'react';
// Context
import { LanguageContext } from "../../context/lang.context";

const MenuDropdown = () => {
  const [activeMenu, setActiveMenu] = useState(false);
    const { languageDict } = useContext(LanguageContext)
    const handleMenuClick = () => {
        setActiveMenu(!activeMenu);
    };
    return (
    <nav className='nav'>
      <div className="menu-icon" onClick={function() {
        document.getElementsByClassName('menu-icon').item(0).classList.toggle('active');
        document.getElementsByClassName('line-1').item(0).classList.remove('no-animation')
        document.getElementsByClassName('line-2').item(0).classList.remove('no-animation')
        document.getElementsByClassName('line-3').item(0).classList.remove('no-animation')
        handleMenuClick()
      }}>
        <div className="line-1 no-animation"></div>
        <div className="line-2 no-animation"></div>
        <div className="line-3 no-animation"></div>
      </div>
      <ul className={`dropdown ${activeMenu === true ? "active" : ""}`}>
        <li className='dropdown-item'><a href="#article-education"><h5>{languageDict.article_header.menu.education}</h5></a></li>
        <li className='dropdown-item'><a href="#article-techstack"><h5>{languageDict.article_header.menu.techstack}</h5></a></li>
        <li className='dropdown-item'><a href="#article-contact"><h5>{languageDict.article_header.menu.contact}</h5></a></li>
      </ul>
    </nav>
  )
}

export default MenuDropdown