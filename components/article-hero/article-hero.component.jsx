'use client'
//  Styles
import "./article-hero.styles.scss";
// Public & Assets
import ProfileImage from "../../public/profil_picture.svg";
// Next Functionalities
import Image from "next/image";
// React functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const ArticleHero = () => {
  const { languageDict } = useContext(LanguageContext);
  return (
    <article id="article-hero">
      <div className="content-container">
        <h5>{languageDict.article_hero.main.name}</h5>
        <h2>{languageDict.article_hero.main.proffesion}</h2>
        <h6>{languageDict.article_hero.main.level}</h6>
      </div>
      <Image
        priority
        className="profile-picture"
        src={ProfileImage}
        alt={languageDict.article_hero.profile_picture_alt}
      />
    </article>
  );
};

export default ArticleHero;
