// Styles
import './section-contact.styles.scss'
// Public & Assets
import IconTel from "../svgs/contact_tel.component";
import IconMail from "../svgs/contact_mail.component";
import IconGithub from "../svgs/contact_github.component";
import IconLinkedin from "../svgs/contact_linkedin.component";
// Next Functions
import Link from 'next/link';
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const SectionContact = () => {
  const { languageDict } = useContext(LanguageContext)
  const copyTel = () => {
    navigator.clipboard.writeText(languageDict.article_contact.main.contact.phone)
  }
  const copyMail = () => {
    navigator.clipboard.writeText(languageDict.article_contact.main.contact.email)
  }

  return (
    <section className="contact-container">
        <div className='contact-job-description'>
          <header className='contact-job-description-header'><h4>{languageDict.article_contact.main.job_demand.title}</h4></header>
          <ul className='contact-job-description-content'>
            <li><h5>{languageDict.article_contact.main.job_demand.content[1].title}</h5><p>{languageDict.article_contact.main.job_demand.content[1].description}</p></li>
            <li><h5>{languageDict.article_contact.main.job_demand.content[2].title}</h5><p>{languageDict.article_contact.main.job_demand.content[2].description}</p></li>
            <li><h5>{languageDict.article_contact.main.job_demand.content[3].title}</h5><p>{languageDict.article_contact.main.job_demand.content[3].description}</p></li>
            <li><h5>{languageDict.article_contact.main.job_demand.content[4].title}</h5><p>{languageDict.article_contact.main.job_demand.content[4].description}</p></li>
          </ul>
        </div>
        <div className='contact-contacts'>
          <div className='contact-tel' onClick={copyTel}>
            <IconTel className='contact-tel-icon' alt={languageDict.article_contact.main.contact.alts.phone} />
            <h6>{languageDict.article_contact.main.contact.phone}</h6>
          </div>
          <div className='contact-mail' onClick={copyMail}>
            <IconMail className='contact-mail-icon' alt={languageDict.article_contact.main.contact.alts.email} />
            <h6>{languageDict.article_contact.main.contact.email}</h6>
          </div>
        </div>
        <div className='contact-links'>
          <Link href={languageDict.article_contact.main.contact.link_github}>
            <IconGithub className='contact-github-icon' alt={languageDict.article_contact.main.contact.alts.github} />
          </Link>
          <Link href={languageDict.article_contact.main.contact.link_linkedin}>
            <IconLinkedin className='contact-linkedin-icon' alt={languageDict.article_contact.main.contact.alts.linkedin} />
          </Link>
        </div>
    </section>
  );
};

export default SectionContact