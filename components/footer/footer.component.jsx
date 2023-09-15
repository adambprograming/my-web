'use client'
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const Footer = () => {
    const { languageDict } = useContext(LanguageContext)
  return (
    <footer className="article_footer">
      <p>{languageDict.article_footer.copyright}</p>
    </footer>
  );
};

export default Footer;
