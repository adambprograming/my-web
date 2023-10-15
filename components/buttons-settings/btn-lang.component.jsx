"use client";
// Styles
import './buttons-settings.styles.scss'
// Public & Assets
import IconCz from "../../public/lang_cz.svg";
import IconEn from "../../public/lang_en.svg";
// Next Functions
import { usePathname } from "next/navigation";
import Image from "next/image";
import { redirect } from "next/navigation";
// React Functions
import { useContext, useEffect, useState } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

// Create btn that will change language of website
const LanguageBtn = () => {
  // Use Context
  const { languageDict, setLanguage, language } = useContext(LanguageContext);
  const [initLang, setInitLang] = useState()
  // Get other parts of pathname then language ('cz'/'en')
  const pathname = usePathname().split("/").slice(2);
  // This useEffect handle first load of page and set initial language based on url and also if client have 'cs' in languages, if not effect set lang of page to en
  useEffect(() => {
    // Set state of InitLang to Init lang of page bcs of proper btn Initial position
    setInitLang(document.documentElement.getAttribute('lang'))
    // If there is more languages check if it includes 'cs', if does and if lang of page is 'cz', make it 'en', else dont change anything
    if (navigator.languages != undefined){
      if (!navigator.languages.includes('cs') && document.documentElement.getAttribute('lang') === 'cz') {
        setInitLang('en')
        // Set atribute of html tag, lang to en
        document.documentElement.setAttribute("lang", "en");
        // Set language throught context to en
        setLanguage("en");
        // Change URL without re-render
        window.history.pushState('EN', undefined, '/en')
        // redirect to new URL without re-render
        redirect(`/en/${pathname}`, 'replace');

      }
      // If there is only one language and that's 'cs' and lang of page is 'cz', make it 'en', else dont change anything
    } else if (navigator.language !== 'cs' && document.documentElement.getAttribute('lang') === 'cz'){
      setInitLang('en')
      // Set atribute of html tag, lang to en
      document.documentElement.setAttribute("lang", "en");
      // Set language throught context to en
      setLanguage("en");
      // Change URL without re-render
      window.history.pushState('EN', undefined, '/en')
      // redirect to new URL without re-render
      redirect(`/en/${pathname}`, 'replace');
              setInitLang(document.documentElement.getAttribute('lang'))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  // Create btn handler
  const switchLang = () => {
    if (language == "cz") {
      // Set atribute of html tag, lang to en
      document.documentElement.setAttribute("lang", "en");
      // Set language throught context to en
      setLanguage("en");
      // Change URL without re-render
      window.history.pushState('EN', undefined, '/en')
      // redirect to new URL without re-render
      redirect(`/en/${pathname}`, 'replace');
    } else {
      // Set atribute of html tag, lang to cz
      document.documentElement.setAttribute("lang", "cz");
      // Set language throught context to cz
      setLanguage("cz");
      // Change URL without re-render
      window.history.pushState('CZ', undefined, '/cz')
      // redirect to new URL without re-render
      redirect(`/cz/${pathname}`, 'replace')
    }
  };

  return (
    <label className="switch" aria-label={languageDict.article_header.buttons.button_lang_aria_label} >
        <input type="checkbox" onClick={switchLang}/>
        <span className={`${initLang=='en' ? ('slider-en') : ('slider')}`}></span>
        <Image className="left-icon-btn" src={IconCz} alt={languageDict.article_header.buttons.icon_lang_cz_alt} />
        <Image className="right-icon-btn" src={IconEn} alt={languageDict.article_header.buttons.icon_lang_en_alt} />       
    </label>
  );
};

export default LanguageBtn;
