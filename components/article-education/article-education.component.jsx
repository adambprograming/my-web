'use client'
//  Styles
import "./article-education.styles.scss";
// Public & Assets
import EducationBackgroundImage from "../../public/background_education.jpg"
// Next Functionalities
import Image from "next/image";
// React functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Componenets
import SectionEducation from "../../components/section-education/section-education.component";

const ArticleEducation = () => {
  const { languageDict } = useContext(LanguageContext);
  return (
    <article id="article-education">
      <Image
        priority
        className="education-bg-img"
        src={EducationBackgroundImage}
        alt="background"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <aside className="aside-education">
        {languageDict.article_education.aside}
      </aside>
      <SectionEducation />
    </article>
  );
};

export default ArticleEducation;
