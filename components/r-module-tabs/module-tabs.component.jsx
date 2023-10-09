'use-client'
// Styles
import "./module-tabs.styles.scss";
// Next Functions
import Image from "next/image";
// React Functions
import { useState } from "react";

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
  return (
    <div className="module-cards">
      {/* Menu */}
      <div className="tab-menu">
        {/* map throught iconSets and make X Images in each label */}
        {icons.map((iconSet, indexIconSet) => (
          <label onClick={() => setActiveTab(indexIconSet)} key={indexIconSet}>
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
        <h4 className="g-enable-text-selection">{topics[activeTab].title}</h4>
        <p className="g-enable-text-selection">{topics[activeTab].content}</p>
        <h4 className="g-enable-text-selection">
          {topics[activeTab].projects.title}
        </h4>
        <h2 className="g-enable-text-selection">
          {topics[activeTab].projects.content}
        </h2>
      </div>
    </div>
  );
};

export default ModuleTabs;