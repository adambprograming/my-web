'use client'
// Styles
import './loader.styles.scss'
// React Functions
import { useEffect } from 'react'

const Loader = () => {
    useEffect(() => {
        window.addEventListener('load',
          () => {
          const loader = document.getElementById('splash-screen');
          if (loader)
            loader.classList.add('loaded')
            setTimeout(() => {loader.remove()}, 1000)
          })
      }, []);
  return (
    <div id="splash-screen">
        <div className='loader'>
            <div className="loader-line-1"></div>
            <div className="loader-line-2"></div>
            <div className="loader-line-3"></div>
        </div>
    </div>
  )
}

export default Loader