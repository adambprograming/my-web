'use client'
// Styles
import "./module-tabs.styles.scss";
// Next Functions
import Image from "next/image";
// React Functions
import { useState, useEffect } from "react";

// ModuleTabs is reusable component that takes three arguments = list of icons, list of alts to icons and list of content in the exact form
// [{
//     "title": "title",
//     "content": "content",
//     "projects": {
//       "title": "title of value",
//       "content": "value"
//     }
// }, ...]
// --height-tab-menu must be edited (read comment in css above variable declaration) and slider-NUMBER must be edited (read comment in css)
// edit bg-image and bg-image-color var in css as u need
const ModuleTabs = ({ topics, icons, alts }) => {
  const [activeTab, setActiveTab] = useState(0);
  // This hook set minHeight of tab-content to maxHeight of all tabs
  const handleModuleTabsResize = () => {
    // Select all slides
    const content = document.querySelectorAll('.module-cards .tab-content .tab')
    const listOfHeights = []
    // Use for index for all slides and push all heights to list above
    for (let index = 0; index < content.length; index++) {
      listOfHeights.push(content[index].scrollHeight)
    }
    // choose biggest height
    const minHeight = Math.max(...listOfHeights)
    // Set biggest height as min-height of slide-show
    document.querySelector('.module-cards .tab-content').style.minHeight = minHeight + 'px';
  }
  useEffect(() => {
    if (typeof window !== 'undefined') {
    // first handleModuleTabsResize on load
    const slide = document.querySelector('.module-cards .tab-content .tab');
      if (slide){
        handleModuleTabsResize()
      }
    }
  }, [])
  useEffect(() => {
    // handleModuleTabsResize on resize
    window.addEventListener("resize", handleModuleTabsResize);
    return () => {
      window.removeEventListener("resize", handleModuleTabsResize);
    };
  })

  return (
    <div className="module-cards">
      {/* Menu */}
      <div className="tab-menu-bg">
        <div className="tab-menu">
          {/* map throught iconSets and make X Images in each label */}
          {icons.map((iconSet, indexIconSet) => (
            <label
              onClick={() => setActiveTab(indexIconSet)}
              key={indexIconSet}
            >
              {/* if iconSet is list of more icons, map throught that set and  make Image for each Icon in that set */}
              {Array.isArray(iconSet) ? (
                iconSet.map((icon, indexIcon) => (
                  <Image
                    src={icon}
                    alt={alts[indexIconSet][indexIcon]}
                    key={indexIcon}
                  />
                ))
              ) : (
                <Image src={iconSet} alt={alts[indexIconSet]} />
              )}
            </label>
          ))}
          {/* slider (onClick moves to equivalent position) */}
          <span className={`menu-slider slider-${activeTab}`}>
            <span className="bottom-or-left"></span>
            <span className="top-or-right"></span>
          </span>
        </div>
          {/* slider fix (first two hide overflow of slider, second two create pseudo inside inverted corner on content side) */}
          <span className="menu-slider-fix">
            <span className="top-or-right-overlap"></span>
            <span className="bottom-or-left-overlap"></span>
            <span className="top-or-right-corner"></span>
            <span className="bottom-or-left-corner"></span>
          </span>
      </div>
      {/* Content */}
      <div className="tab-content">
        {topics.map((topic, index) => (
          <div
            className={`tab ${index === activeTab ? "active" : ""}`}
            key={index}
          >
            <h4 className="g-enable-text-selection">{topic.title}</h4>
            <p className="g-enable-text-selection">{topic.content}</p>
            <h4 className="g-enable-text-selection">{topic.projects.title}</h4>
            <h2 className="g-enable-text-selection">
              {topic.projects.content}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModuleTabs;
