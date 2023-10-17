"use client";
// Styles
import "./page.scss";
// Public & Assets
import ProfileImage from "../../public/profil_picture.svg";
import EducationBackgroundImage from "../../public/background_education.svg"
import ContactBackgroundImage from "../../public/background_contact.svg"
// Next functions
import Image from "next/image";
import dynamic from "next/dynamic";
// React functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Components
// const SectionEducation = dynamic(
//   () =>
//     import("../../components/section-education/section-education.component"),
//   { ssr: false }
// );
// const SectionTechstack = dynamic(
//   () =>
//     import("../../components/section-techstack/section-techstack.component"),
//   { ssr: false }
// );
// const SectionContact = dynamic(
//   () => import("../../components/section-contact/section-contact.component"),
//   { ssr: false }
// );
import SectionEducation from "../../components/section-education/section-education.component";
import SectionContact from "../../components/section-contact/section-contact.component";
import SectionTechstack from "../../components/section-techstack/section-techstack.component";

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
          src={ProfileImage}
          alt={languageDict.article_hero.profile_picture_alt}
        />
      </article>
      <article id="article-education">
        <Image 
          className="education-bg-img"
          src={EducationBackgroundImage}
          alt='background'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <aside className="aside-education">
          {languageDict.article_education.aside}
        </aside>
        <SectionEducation />
      </article>
      <article id="article-techstack">
        <SectionTechstack />
        <aside className="aside-techstack">
          {languageDict.article_techstack.aside}
        </aside>
      </article>
      <article id="article-contact">
        <Image 
          priority={true}
          className="contact-bg-img"
          src={ContactBackgroundImage}
          alt='background'
          fill
          style={{
            objectFit: 'cover',
          }}
        />
        <aside className="aside-contact">
          {languageDict.article_contact.aside}
        </aside>
        <SectionContact />
      </article>
    </main>
  );
}
