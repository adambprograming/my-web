'use client'
//  Styles
import "./article-techstack.styles.scss";
// React functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Componenets
import SectionTechstack from "../../components/section-techstack/section-techstack.component";

const ArticleTechstack = () => {
  const { languageDict } = useContext(LanguageContext);
  return (
    <article id="article-techstack">
    <SectionTechstack />
    <aside className="aside-techstack">
      {languageDict.article_techstack.aside}
    </aside>
  </article>
  );
};

export default ArticleTechstack;
