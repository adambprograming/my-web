"use client";
// Styles
import "./page.scss";
// Public & Assets
import ProfilPicture from "../../public/profil_picture.svg";
// Next functions
import Image from "next/image";
// React functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Components
import SectionEducation from "../../components/section-education/section-education.component";

export default function Home() {
  const { languageDict } = useContext(LanguageContext);
  return (
    <main className="main">
      <article id="article-hero">
        <div className="content-container">
          <h5>{languageDict.article_hero.main.name}</h5>
          <h2>{languageDict.article_hero.main.proffesion}</h2>
          <h6>{languageDict.article_hero.main.level}</h6>
        </div>
        <Image
          className="profile-picture"
          src={ProfilPicture}
          alt={languageDict.article_hero.profile_picture_alt}
        />
      </article>
      <article id="article-education">
        <div className="article-bg-img"></div>
          <aside className="aside-education">{languageDict.article_education.aside}</aside>
          <SectionEducation />
      </article>
      <hr />
      <article id="article-techstack">
        <aside>{languageDict.article_techstack.aside}</aside>
      </article>
      <hr />
      <article id="article-contact">
        <aside>{languageDict.article_contact.aside}</aside>
      </article>
    </main>
  );
}
