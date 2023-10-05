// Styles
import './card.styles.scss'

const Card = ({topic, className}) => {
  return (
    <div className={`card ${className}`}>
        <div className='title'>
          <h5 className='g-enable-text-selection'>
            {topic.title}
          </h5>
        </div>
        <div className='content'>
          <p className='g-enable-text-selection'>
            {topic.content}
          </p>
        </div>
    </div>
  )
}

export default Card