import React from 'react'
import { content } from '../config'
import './WhatIsLynkr.css'

const WhatIsLynkr = () => {
  return (
    <section className="what-is-lynkr section">
      <div className="container">
        <div className="what-is-content">
          <div className="what-is-text">
            <div className="feature-badge" style={{ color: "#4A5568" }}>
              {/* Add this SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="badge-icon"
              >
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>

              <span style={{ color: "#4A5568" }}>Introduction</span>
            </div>

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
