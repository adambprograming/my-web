// Styles
import "./section-education.styles.scss";
// React Functions
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";
// Componenets
import ScaleInCards from "../r-scale-in-cards/scale-in-cards.component";

const SectionEducation = () => {
  const { languageDict } = useContext(LanguageContext)
  // Extract list from languageDict of topics
  const topics = languageDict.article_education.main

  return (
    <section id="education-container">
      <ScaleInCards topics={topics} />
    </section>
  );
};

export default SectionEducation;
