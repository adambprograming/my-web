// Styles
import "./section-techstack.styles.scss";
// Public & Assets
import IconHtml from "../../public/techstack_html.svg";
import IconCss from "../../public/techstack_css.svg";
import IconSass from "../../public/techstack_scss.svg";
import IconJs from "../../public/techstack_js.svg";
import IconReact from "../../public/techstack_react.svg";
import IconNextjs from "../../public/techstack_nextjs.svg";
import IconGit from "../../public/techstack_git.svg";
import IconGithub from "../../public/techstack_github.svg";
import IconPython from "../../public/techstack_python.svg";
import IconFigma from "../../public/techstack_figma.svg";
// Next Functions
import Image from "next/image";
// React Functions
import { useContext } from "react";
import { useState } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const SectionTechstack = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { languageDict } = useContext(LanguageContext);
  const topics = languageDict.article_techstack.main;
//   const icons = [
//     IconHtml,
//     IconCss,
//     IconSass,
//     IconJs,
//     IconReact,
//     IconNextjs,
//     IconGit,
//     IconGithub,
//     IconPython,
//     IconFigma,
//   ];
  const handleTabClick = (index) => {
    if (index == activeTab) {
      setActiveTab();
    } else {
      setActiveTab(index);
    }
  };

  return (
    <section className="techstack-container">
      <div className="techstack-tab">
        <div className="techstack-menu">
          <button>
            <Image src={IconHtml} alt={languageDict.article_techstack.alts.html} />
            <Image src={IconCss} alt={languageDict.article_techstack.alts.css} />
            <Image src={IconSass} alt={languageDict.article_techstack.alts.sass} />
          </button>
          <button>
            <Image src={IconJs} alt={languageDict.article_techstack.alts.js} />
          </button>
          <button>
            <Image src={IconReact} alt={languageDict.article_techstack.alts.react} />
          </button>
          <button>
            <Image src={IconNextjs} alt={languageDict.article_techstack.alts.nextjs} />
          </button>
          <button>
            <Image src={IconGit} alt={languageDict.article_techstack.alts.git} />
            <Image src={IconGithub} alt={languageDict.article_techstack.alts.github} />
          </button>
          <button>
            <Image src={IconPython} alt={languageDict.article_techstack.alts.python} />
          </button>
          <button>
            <Image src={IconFigma} alt={languageDict.article_techstack.alts.figma} />
          </button>
        </div>
      </div>
      {/* {topics.map((topic, index) => (
        <div className={`education-tab ${activeTab === index ? "active" : ""}`} key={index}>
          <button
            onClick={() => handleTabClick(index)}
            className={`education-tab-button ${activeTab === index ? "active" : ""}`}
          >
            <h4>{topic.title}</h4>
          </button>
          <div className={`education-tab-content ${activeTab === index ? "active" : ""}`}>
            <p className="g-enable-text-selection">{topic.content}</p>
          </div>
        </div>
      ))} */}
    </section>
  );
};

export default SectionTechstack;
