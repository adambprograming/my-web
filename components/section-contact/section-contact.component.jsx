// Styles
import './section-contact.styles.scss'
// Next Functions
import Link from 'next/link';
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Components
import IconTel from "../svgs/contact_tel.component";
import IconMail from "../svgs/contact_mail.component";
import IconGithub from "../svgs/contact_github.component";
import IconLinkedin from "../svgs/contact_linkedin.component";
import SlideShow from '../r-slide-show/slide-show.component';

const SectionContact = () => {
  const { languageDict } = useContext(LanguageContext)
  const topics = languageDict.article_contact.main.job_demand.content
  const copyTel = () => {
    navigator.clipboard.writeText(languageDict.article_contact.main.contact.phone)
    document.querySelector(".contact-tel .tel-copied").classList.add('clicked')
    setTimeout( function() {
        document.querySelector(".contact-tel .tel-copied").classList.remove('clicked')
    }, 1000);
  }
  const copyMail = () => {
    navigator.clipboard.writeText(languageDict.article_contact.main.contact.email_copy)
    document.querySelector(".contact-mail .mail-copied").classList.add('clicked')
    setTimeout( function() {
        document.querySelector(".contact-mail .mail-copied").classList.remove('clicked')
    }, 1000);
  }
  return (
    <section className="contact-container">
        <div className='contact-job-description'>
          <header className='contact-job-description-header'><h4>{languageDict.article_contact.main.job_demand.title}</h4></header>
          <SlideShow arrows={true} useFullWidth={true} moreVisibleTabs={true} topics={topics} />
        </div>
        <div className='contacts'>
          <div className='contact-contacts'>
            <div className='contact-tel' onClick={copyTel}>
              <span className='tel-copied'><h6>Copied!</h6></span>
              <IconTel className='contact-tel-icon' alt={languageDict.article_contact.main.contact.alts.phone} />
              <h6>{languageDict.article_contact.main.contact.phone}</h6>
            </div>
            <div className='contact-mail' onClick={copyMail}>
              <span className='mail-copied'><h6>Copied!</h6></span>
              <IconMail className='contact-mail-icon' alt={languageDict.article_contact.main.contact.alts.email} />
              <h6>{languageDict.article_contact.main.contact.email}</h6>
            </div>
          </div>
          <div className='contact-links'>
            <Link href={languageDict.article_contact.main.contact.link_github} aria-label={languageDict.article_contact.main.contact.contact.link_github_arialabel}>
              <IconGithub className='contact-github-icon' alt={languageDict.article_contact.main.contact.alts.github} />
            </Link>
            <Link href={languageDict.article_contact.main.contact.link_linkedin} aria-label={languageDict.article_contact.main.contact.contact.link_linkedin_arialabel}>
              <IconLinkedin className='contact-linkedin-icon' alt={languageDict.article_contact.main.contact.alts.linkedin} />
            </Link>
          </div>
        </div>
    </section>
  );
};

export default SectionContact