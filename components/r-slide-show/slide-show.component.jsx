// Styles
import './slide-show.styles.scss'
// React Functions
import { useEffect, useState } from 'react';
// Components
import Card from '../r-card/card.component'

// PARAMETERS
// arrows (boolean) true = right and left button to swipe between slides
// swipe (boolean) true = can swipe between slides by hovering slide
// moreVisibleTabs (boolean) true = listen for resize and make more tabs visible at once if it fits
// topics (list) content for slide-show

const SlideShow = ({arrows, swipe, moreVisibleTabs, topics}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState('right')
  const [visibleTabs, setVisibleTabs] = useState(1)
  const numOfElements = topics.length
  const lastElement = topics.length - 1
  const firstElement = 0
  // This useEffect listen for resize of window to change visibleTabs State
  useEffect(() => {
    if (moreVisibleTabs) {
      const handleResize = () => {
        const widthOfSlides = document.querySelector('.slides').scrollWidth
        const widthOfSlide = document.querySelector('.slide').scrollWidth
        const aspectRatio = Math.round(widthOfSlides / widthOfSlide)
        if (aspectRatio > numOfElements) {
          setVisibleTabs(numOfElements)
        } else {
          setVisibleTabs(aspectRatio)
        }
      }
      window.addEventListener('resize', handleResize)
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  })

  const handleRightArrow = () => {
    setDirection('right')
    if (activeTab === lastElement) {
      setActiveTab(firstElement)
    } else {
      setActiveTab(activeTab+1)
    }
  }
  const handleLeftArrow = () => {
    setDirection('left')
    if (activeTab === firstElement) {
      setActiveTab(lastElement)
    } else {
      setActiveTab(activeTab-1)
    }
  }
  return (
    <div className={`slide-show`}>
        {arrows && 
          <span className='left-arrow' onClick={handleLeftArrow}></span>
        }
        <div className='slides'>
          {topics.map((topic, index) => (
            <Card className={`slide ${index === activeTab ? (`active`) : (direction === 'right' ? (index === activeTab-1 || activeTab === firstElement && index === lastElement ? ('left') : (index === activeTab+1 || activeTab === lastElement && index === firstElement ? ('right') : ('else'))) : (index === activeTab+1 || activeTab === lastElement && index === firstElement ? ('right') : (index === activeTab-1 || activeTab === firstElement && index === lastElement ? ('left') : ('else'))))}`} topic={topic} key={index} />
          ))}
        </div>
        {arrows && 
          <span className='right-arrow' onClick={handleRightArrow}></span>
        }
    </div>
  )
}

export default SlideShow