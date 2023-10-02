'use client'
// Styles
import "./section-education.styles.scss";
// React Functions
import { useState, useEffect } from "react";
import { useContext } from "react";
// Context
import { LanguageContext } from "../../context/lang.context";

const SectionEducation = () => {
  const [activeTab, setActiveTab] = useState();
  const { languageDict } = useContext(LanguageContext)
  // Extract list from languageDict of topics
  const topics = languageDict.article_education.main
  // Everytime activeTab change, remove max-height of all non-active tabs and set max-height of active tab to exactly needed height 
  useEffect(() => {
    // Remove max-height of all non-active tabs
    document.querySelectorAll('.education-tab:not(.active)').forEach((each) => {
      each.style.removeProperty('max-height')
    })
    // If there is active tab, set max-height to scrollHeight
    if (document.querySelector('.education-tab.active')){
      const height = document.querySelector('.education-tab.active').scrollHeight;
      document.querySelector('.education-tab.active').style.maxHeight = height + 'px';
    }
  }, [activeTab])
// Handle click at tab button
  const handleTabClick = (index) => {
    if (index == activeTab){
      // If i click on same tab button i need to setActiveTab to some unreal number bcs i need to change state of activeTab
        setActiveTab(999)
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
