'use client'
// Import styles
import "./scale-in-cards.styles.scss";
// React Functions
import { useState, useEffect } from "react";

// ScaleInCards is reusable component that takes one argument = list in the exact form
// [{
//   "title": "value for card button",
//   "content": "value for card content"
// }, ...]
const ScaleInCards = ({topics}) => {
  const [activeTab, setActiveTab] = useState();
  // Everytime activeTab change, remove max-height of all non-active tabs and set max-height of active tab to exactly needed height
  useEffect(() => {
    // Remove max-height of all non-active tabs
    document.querySelectorAll("#scale-in-cards .card:not(.active)").forEach((each) => {
      each.style.removeProperty("max-height");
    });
    // If there is active tab, set max-height to scrollHeight
    if (document.querySelector("#scale-in-cards .card.active")) {
      const height = document.querySelector(
        "#scale-in-cards .card.active"
      ).scrollHeight;
      document.querySelector("#scale-in-cards .card.active").style.maxHeight =
        height + "px";
    }
  }, [activeTab]);
  // Handle click at tab button
  const handleTabClick = (index) => {
    if (index == activeTab) {
      // If i click on same tab button i need to setActiveTab to some unreal number bcs i need to change state of activeTab
      setActiveTab(999);
    } else {
      setActiveTab(index);
    }
  };
  return (
    <div id="scale-in-cards">
      {topics.map((topic, index) => (
        <div
          className={`card ${activeTab === index ? "active" : ""}`}
          key={index}
        >
          {/* Button, onClick scale in content of card */}
          <button
            onClick={() => handleTabClick(index)}
            className={`card-btn ${
              activeTab === index ? "active" : ""
            }`}
          >
            <h4>{topic.title}</h4>
          </button>
          <div
            className={`card-content ${
              activeTab === index ? "active" : ""
            }`}
          >
            <p className="g-enable-text-selection">{topic.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScaleInCards;
