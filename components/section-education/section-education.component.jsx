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

  const topics = [
    {
      title: languageDict.article_education.main.highschool.title,
      content: languageDict.article_education.main.highschool.content,
    },
    {
      title: languageDict.article_education.main.university.title,
      content: languageDict.article_education.main.university.content,
    },
    {
      title: languageDict.article_education.main.selfeducation.title,
      content: languageDict.article_education.main.selfeducation.content,
    },
  ];
  

  const handleTabClick = (index) => {
    if (index == activeTab){
        setActiveTab()
    } else {
        setActiveTab(index);
    }

  };
  return (
    <div className="tab-container">
      {topics.map((topic, index) => (
        <div className="tab" key={index}>
          <button
            onClick={() => handleTabClick(index)}
            className={`tab-button ${activeTab === index ? "active" : ""}`}
          >
            <h4>{topic.title}</h4>
          </button>
          <div className={`tab-content ${activeTab === index ? "active" : ""}`}>
            <p>{topic.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionEducation;
