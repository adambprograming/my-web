"use client";
// Public & Assets
import IconCz from "../../public/lang_cz.svg";
import IconEn from "../../public/lang_en.svg";
// Next Functions
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

// Create btn that will change language of website
const LanguageBtn = () => {
  // Use Context
  const { languageDict, setLanguage, language } = useContext(LanguageContext);
  const dict = languageDict;
  // Get other parts of pathname then language ('cz'/'en')
  const pathname = usePathname().split("/").slice(2);
  const router = useRouter();
  // Create btn handler
  const switchLang = () => {
    if (language == "cz") {
      // Set atribute of html tag, lang to en
      document.documentElement.setAttribute("lang", "en");
      // Set language throught context to en
      setLanguage("en");
      // Change URL, but pathname after lang part of pathname stay same
      router.push(`/en/${pathname}`);
    } else {
      // Set atribute of html tag, lang to cz
      document.documentElement.setAttribute("lang", "cz");
      // Set language throught context to cz
      setLanguage("cz");
      // Change URL, but pathname after lang part of pathname stay same
      router.push(`/cz/${pathname}`);
    }
  };

  return (
    <button
      aria-label="Toggle Dark Mode"
      className="toggle-button"
      onClick={switchLang}
    >
      {dict.lang == "en" ? (
        <Image src={IconEn} alt="Icon with EN flag meaning english language" />
      ) : (
        <Image src={IconCz} alt="Icon with CZ flag meaning czech language" />
      )}
    </button>
  );
};

export default LanguageBtn;
