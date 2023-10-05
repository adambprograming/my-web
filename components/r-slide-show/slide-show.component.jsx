// Styles
import './slide-show.styles.scss'
// React Functions
import { useState } from 'react';
// Components
import Card from '../r-card/card.component'

// Parameter TYPE can be 
// 'slider' (should have span arrow on both sides if number of cards is more than parameter num_of_visible_cards)
// or 'scroll' (horizontal scrolling allow)
// Parameter NUM_OF_VISIBLE_CARDS can be 1..*
// 
// 

const SlideShow = ({type, num_of_visible_cards, topics}) => {
  const [activeTab, setActiveTab] = useState(0)
  const [direction, setDirection] = useState('right')
  const lastElement = topics.length - 1
  const firstElement = 0
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
    <div className={`slide-show ${type}`}>
        {type === 'slide' && 
          <span className='left-arrow' onClick={handleLeftArrow}></span>
        }
        {topics.map((topic, index) => (
          <Card className={`slide-show-card ${index === activeTab ? (`active ${direction}`) : (direction === 'right' ? (index === activeTab-1 || activeTab === 0 && index === 3 ? ('else right') : ('else')) : (index === activeTab+1 || activeTab === 3 && index === 0 ? ('else left') : ('else')))}`} topic={topic} key={index} />
        ))}
        {type === 'slide' && 
          <span className='right-arrow' onClick={handleRightArrow}></span>
        }
    </div>
  )
}

export default SlideShow