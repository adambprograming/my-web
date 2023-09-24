'use client'
// Styles
import "./section-education.styles.scss";
// React Functions
import { useState } from "react";
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const SectionEducation = () => {
  const [activeTab, setActiveTab] = useState();
  const { languageDict } = useContext(LanguageContext)
  const topics = languageDict.article_education.main

  const handleTabClick = (index) => {
    if (index == activeTab){
        setActiveTab()
    } else {
        setActiveTab(index);
    }
  };

  return (
    <section className="education-container">
      {topics.map((topic, index) => (
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
      ))}
    </section>
  );
};

export default SectionEducation;
