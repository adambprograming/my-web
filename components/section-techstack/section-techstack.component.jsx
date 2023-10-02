'use-client'
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
import IconTs from "../../public/techstack_ts.svg";
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Components
import ModuleTabs from "../module-tabs/module-tabs.component";


const SectionTechstack = () => {
  const { languageDict } = useContext(LanguageContext);
  const topics = languageDict.article_techstack.main;
  const icons = [[IconHtml, IconCss, IconSass], IconJs, IconReact, IconNextjs, [IconGit, IconGithub], IconPython, IconFigma, IconTs]
  const alts = languageDict.article_techstack.alts;

  return (
    <section id="techstack-container">
      <ModuleTabs topics={topics} icons={icons} alts={alts} />
    </section>
  );
};

export default SectionTechstack;
