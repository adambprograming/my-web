'use-client'
// Styles
import "./slide-show.styles.scss";
// React Functions
import { useEffect, useState } from "react";
// Components
import Card from "../r-card/card.component";

// PARAMETERS
// arrows (boolean) true = right and left button to swipe between slides
// useFullWidth (boolean) true = if there is space for show all tabs, all tabs will be visible
// swipe (boolean) true = can swipe between slides by hovering slide
// moreVisibleTabs (boolean) true = listen for resize and make more tabs visible at once if it fits
// topics (list) content for slide-show

const SlideShow = ({ arrows, useFullWidth, swipe, moreVisibleTabs, topics }) => {
  // State for first active tab - if more tabs are active this one is first one (left firstActive ...Active right)
  const [firstActiveTab, setFirstActiveTab] = useState(0);
  // State for how many Tabs will be visible at once
  const [visibleTabs, setVisibleTabs] = useState(1);
  // State for slide ability, if false and useFullWidth param is true, then arrows dissapear and all tabs be visible
  const [isSlideable, setIsSlideable] = useState(true)
  // Number of Elements (tabs)
  const numOfElements = topics.length;
  // Index of last element
  const lastElement = topics.length - 1;
  // Index of first element
  const firstElement = 0;
  // This effect set minHeight of slide-show to maxHeight of all slides
  useEffect(() => {
    const handleMinHeightSlideShow = () => {
      const content = document.querySelectorAll('.slide-show .slides .slide')
      const listOfHeights = []
      // Use for index for all slides and push all heights to list above
      for (let index = 0; index < content.length; index++) {
        listOfHeights.push(content[index].scrollHeight)
      }
      // choose biggest height
      const minHeight = Math.max(...listOfHeights)
      // Set biggest height as min-height of slide-show
      document.querySelector('.slide-show').style.minHeight = minHeight + 'px';
    }
    // first handleMinHeightSlideShow on load
    window.addEventListener('load',
      () => {
        const slide = document.querySelector('.slide-show .slides .slide');
        if (slide){
          handleMinHeightSlideShow()
        }
      }
    )
    // handleMinHeightSlideShow on resize
    window.addEventListener("resize", handleMinHeightSlideShow);
    return () => {
      window.removeEventListener("resize", handleMinHeightSlideShow);
    };
  });
  // This useEffect listen for resize of window to change visibleTabs State
  useEffect(() => {
    if (moreVisibleTabs) {
      const handleSlideShowResize = () => {
        // Width of space for slides
        const widthOfSlides = document.querySelector(".slide-show .slides").scrollWidth;
        // Width of each slide
        const widthOfSlide = document.querySelector(".slide-show .slides .slide").scrollWidth;
        // aspectRatio is how many slides can fit to slides space
        const aspectRatio = Math.floor(widthOfSlides / (widthOfSlide + 10));
        setVisibleTabs(aspectRatio);
        // If aspect ratio is equal or more than number of tabs and useFullWidth param is true, then use full width to show all tabs and OFF slideshow
        if (aspectRatio >= numOfElements && useFullWidth) {
          setIsSlideable(false)
        } else {
          setIsSlideable(true)
        }
      };
      // first handleSlideShowResize on load
      window.addEventListener('load',
        () => {
          const slide = document.querySelector('.slide-show .slides .slide');
          if (slide){
            handleSlideShowResize()
          }
        }
      )
      // handleSlideShowResize on resize
      window.addEventListener("resize", handleSlideShowResize);
      return () => {
        window.removeEventListener("resize", handleSlideShowResize);
      };
    }
  });
  // What happend if i click right arrow
  const handleRightArrow = () => {
    // if active tab is last element make it first element
    if (firstActiveTab === lastElement) {
      setFirstActiveTab(firstElement);
    } else {
      setFirstActiveTab(firstActiveTab + 1);
    }
  };
  // What happend if i click left arrow
  const handleLeftArrow = () => {
    // if active tab is first element make it last element
    if (firstActiveTab === firstElement) {
      setFirstActiveTab(lastElement);
    } else {
      setFirstActiveTab(firstActiveTab - 1);
    }
  };

  // handle Slides logic
  const handleSlides = (index) => {
    // If eneugh space for all tabs and useFullWidth param is true, show all
    if ((visibleTabs >= numOfElements) && useFullWidth) {
      return 'active'
      // If visibleTabs <= 1 render one or IF visibleTabs >= 2 but there is not eneugh tabs to have two render and two behind (right and left) render just one
    } else if (visibleTabs <= 1 || (visibleTabs >= 2 && numOfElements <= 3)) {
      if (index === firstActiveTab) {
        return 'active'
      } else if ((index === firstActiveTab - 1) || (firstActiveTab === firstElement && index === lastElement)) {
        return 'left'
      } else if ((index === firstActiveTab + 1) || (firstActiveTab === lastElement && index === firstElement)) {
        return 'right'
      } else {
        return 'else'
      }
      // If visibleTabs === 2 render two, but it needs minimal 2 more to be behind (right and left), IF visibleTabs >= 3 but there is not eneugh tabs to have three render and two behind (right and left) render just two
    } else if (visibleTabs === 2  || (visibleTabs >= 3 && numOfElements <= 4)) {
      if (index === firstActiveTab) {
        return 'active-2-1'
      } else if ((index === firstActiveTab + 1) || (firstActiveTab === lastElement && index === firstElement)) {
        return 'active-2-2'
      } else if ((index === firstActiveTab - 1) || (firstActiveTab === firstElement && index === lastElement)) {
        return 'left-2'
      } else if ((index === firstActiveTab + 2) || (firstActiveTab === lastElement && index === firstElement + 1) || (firstActiveTab + 1 === lastElement && index === firstElement)) {
        return 'right-2'
      } else {
        return 'else'
      }
    } else if (visibleTabs === 3  || (visibleTabs >= 4 && numOfElements <= 5)) {
      if (index === firstActiveTab) {
        return 'active-3-1'
      } else if ((index === firstActiveTab + 1) || (firstActiveTab === lastElement && index === firstElement)) {
        return 'active-3-2'
      } else if ((index === firstActiveTab + 2) || (firstActiveTab === lastElement && index === firstElement + 1) || (firstActiveTab + 1 === lastElement && index === firstElement)) {
        return 'active-3-3'
      } else if ((index === firstActiveTab - 1) || (firstActiveTab === firstElement && index === lastElement)) {
        return 'left-3'
      } else if ((index === firstActiveTab + 3) || (firstActiveTab === lastElement && index === firstElement + 2) || (firstActiveTab + 1 === lastElement && index === firstElement + 1) || (firstActiveTab + 2 === lastElement && index === firstElement) || (firstActiveTab + 1 === lastElement && index === firstElement + 1)) {
        return 'right-3'
      } else {
        return 'else'
      }
    } else if (visibleTabs === 4 || (visibleTabs >= 5 && numOfElements <= 6)) {
      if (index === firstActiveTab) {
        return 'active-4-1'
      } else if ((index === firstActiveTab + 1) || (firstActiveTab === lastElement && index === firstElement)) {
        return 'active-4-2'
      } else if ((index === firstActiveTab + 2) || (firstActiveTab === lastElement && index === firstElement + 1) || (firstActiveTab + 1 === lastElement && index === firstElement)) {
        return 'active-4-3'
      } else if ((index === firstActiveTab + 3) || (firstActiveTab === lastElement && index === firstElement + 2) || (firstActiveTab + 1 === lastElement && index === firstElement + 1) || (firstActiveTab + 2 === lastElement && index === firstElement) || (firstActiveTab + 1 === lastElement && index === firstElement + 1)) {
        return 'active-4-4'
      } else if ((index === firstActiveTab - 1) || (firstActiveTab === firstElement && index === lastElement)) {
        return 'left-4'
      } else if ((index === firstActiveTab + 4) || (firstActiveTab === lastElement && index === firstElement + 3) || (firstActiveTab + 1 === lastElement && index === firstElement + 2) || (firstActiveTab + 2 === lastElement && index === firstElement + 1) || (firstActiveTab + 3 === lastElement && index === firstElement)) {
        return 'right-4'
      } else {
        return 'else'
      }
    } else if (visibleTabs >= 5) {
      if (index === firstActiveTab) {
        return 'active-5-1'
      } else if ((index === firstActiveTab + 1) || (firstActiveTab === lastElement && index === firstElement)) {
        return 'active-5-2'
      } else if ((index === firstActiveTab + 2) || (firstActiveTab === lastElement && index === firstElement + 1) || (firstActiveTab + 1 === lastElement && index === firstElement)) {
        return 'active-5-3'
      } else if ((index === firstActiveTab + 3) || (firstActiveTab === lastElement && index === firstElement + 2) || (firstActiveTab + 1 === lastElement && index === firstElement + 1) || (firstActiveTab + 2 === lastElement && index === firstElement) || (firstActiveTab + 1 === lastElement && index === firstElement + 1)) {
        return 'active-5-4'
      } else if ((index === firstActiveTab + 4) || (firstActiveTab === lastElement && index === firstElement + 3) || (firstActiveTab + 1 === lastElement && index === firstElement + 2) || (firstActiveTab + 2 === lastElement && index === firstElement + 1) || (firstActiveTab + 3 === lastElement && index === firstElement)) {
        return 'active-5-5'
      } else if ((index === firstActiveTab - 1) || (firstActiveTab === firstElement && index === lastElement)) {
        return 'left-5'
      } else if ((index === firstActiveTab + 5) || (firstActiveTab === lastElement && index === firstElement + 4) || (firstActiveTab + 1 === lastElement && index === firstElement + 3) || (firstActiveTab + 2 === lastElement && index === firstElement + 2) || (firstActiveTab + 3 === lastElement && index === firstElement + 1) || (firstActiveTab + 4 === lastElement && index === firstElement)) {
        return 'right-5'
      } else {
        return 'else'
      }
    }
  }
  return (
    <div className={`slide-show`}>
      {arrows && isSlideable && 
      <div className="left-arrow-btn" onClick={handleLeftArrow} ><span className="left-arrow" ></span></div>
      }
      <div className="slides">
        {topics.map((topic, index) => (
          <Card
            className={`slide ${handleSlides(index)}`}
            topic={topic}
            key={index}
          />
        ))}
      </div>
      {arrows && isSlideable && 
      <div className="right-arrow-btn" onClick={handleRightArrow} ><span className="right-arrow" ></span></div>
      }
    </div>
  );
};

export default SlideShow;