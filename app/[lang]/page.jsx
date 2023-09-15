'use client'
// Styles
import './page.scss'
// Public & Assets
import ProfilPicture from "../../public/profil_picture.svg";
// Next functions
import Image from 'next/image'
// React functions
import { useContext } from 'react'
// Context
import { LanguageContext } from '../../context/lang.context'


export default function Home() {
  const { languageDict } = useContext(LanguageContext)
  return (
    <main className='main'>
      <article className='article_hero'>
        <div>
          <h5>{languageDict.article_hero.main.name}</h5>
          <h2>{languageDict.article_hero.main.proffesion}</h2>
          <h6>{languageDict.article_hero.main.level}</h6>
        </div>
        <Image src={ProfilPicture} alt={languageDict.article_hero.profile_picture_alt} />
      </article>
      <hr />
      <article className='article_education'>
        <aside>
          {languageDict.article_education.aside}
        </aside>
        <div>
        </div>
      </article>
      <hr />
      <article className='article_techstack'>
        <aside>
        {languageDict.article_techstack.aside}
        </aside>
      </article>
      <hr />
      <article className='article_contact'>
        <aside>
        {languageDict.article_contact.aside}
        </aside>
      </article>
    </main>
  )
}