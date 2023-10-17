'use client'
//  Styles
import "./article-contact.styles.scss";
// Public & Assets
import ContactBackgroundImage from "../../public/background_contact.jpg"
// Next Functionalities
import Image from "next/image";
// React functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Componenets
import SectionContact from "../../components/section-contact/section-contact.component";

const ArticleContact = () => {
  const { languageDict } = useContext(LanguageContext);
  return (
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
  );
};

export default ArticleContact;
