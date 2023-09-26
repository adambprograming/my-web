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
import IconTs from "../../public/techstack_ts.svg"
// Next Functions
import Image from "next/image";
// React Functions
import { useContext } from "react";
import { useState } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const SectionTechstack = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { languageDict } = useContext(LanguageContext);
  const alts = languageDict.article_techstack.alts
  const topics = languageDict.article_techstack.main;

  return (
    <section className="techstack-container">
      <div className="techstack-tab">
        <div className="techstack-menu">
          <span className={`techstack-slider slider-${activeTab}`}></span>
          <label onClick={() => setActiveTab(0)}>
            <Image src={IconHtml} alt={alts.html} />
            <Image src={IconCss} alt={alts.css} />
            <Image src={IconSass} alt={alts.sass} />
          </label>
          <label onClick={() => setActiveTab(1)}>
            <Image src={IconJs} alt={alts.js} />
          </label>
          <label onClick={() => setActiveTab(2)}>
            <Image src={IconReact} alt={alts.react} />
          </label>
          <label onClick={() => setActiveTab(3)}>
            <Image src={IconNextjs} alt={alts.nextjs} />
          </label>
          <label onClick={() => setActiveTab(4)}>
            <Image src={IconGit} alt={alts.git} />
            <Image src={IconGithub} alt={alts.github} />
          </label>
          <label onClick={() => setActiveTab(5)}>
            <Image src={IconPython} alt={alts.python} />
          </label>
          <label onClick={() => setActiveTab(6)}>
            <Image src={IconFigma} alt={alts.figma} />
          </label>
          <label onClick={() => setActiveTab(7)}>
            <Image src={IconTs} alt={alts.ts} />
          </label>
        </div>
      </div>
      {/* {topics.map((topic, index) => (
        <div className={`education-tab ${activeTab === index ? "active" : ""}`} key={index}>
          <button
            onClick={() => setActiveTab(index)}
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
