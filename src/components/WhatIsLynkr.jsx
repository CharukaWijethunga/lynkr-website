import React from 'react'
import { content } from '../config'
import './WhatIsLynkr.css'

const WhatIsLynkr = () => {
  return (
    <section className="what-is-lynkr section">
      <div className="container">
        <div className="what-is-content">
          <div className="what-is-text">
            <div className="section-label">About</div>
            <h2 className="what-is-title">{content.whatIsLynkr.title1}<span className='hero-subtitle'>{content.whatIsLynkr.title2}</span></h2>
            <p className="what-is-subtitle">{content.whatIsLynkr.subtitle}</p>
            <p className="what-is-description">{content.whatIsLynkr.description}</p>
            <div className="what-is-buttons">
              <button className="btn btn-primary">Learn More About Us</button>
              <button className="btn btn-secondary">Get Started Today</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsLynkr
