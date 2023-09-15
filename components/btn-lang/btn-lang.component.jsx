"use client";
// Public & Assets
import IconCz from "../../public/lang_cz.svg";
import IconEn from "../../public/lang_en.svg";
// Next Functions
import { usePathname } from "next/navigation";
import Image from "next/image";
import { redirect } from "next/navigation";
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

// Create btn that will change language of website
const LanguageBtn = () => {
  // Use Context
  const { languageDict, setLanguage, language } = useContext(LanguageContext);
  // Get other parts of pathname then language ('cz'/'en')
  const pathname = usePathname().split("/").slice(2);
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
    <button
      aria-label={languageDict.article_header.buttons.button_lang_aria_label}
      className="toggle-button"
      onClick={switchLang}
    >
      {languageDict.lang == "en" ? (
        <Image src={IconEn} alt={languageDict.article_header.buttons.icon_lang_en_alt} />
      ) : (
        <Image src={IconCz} alt={languageDict.article_header.buttons.icon_lang_cz_alt} />
      )}
    </button>
  );
};

export default LanguageBtn;
