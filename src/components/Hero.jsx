import React from 'react'
import { content } from '../config'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="feature-badge">
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

            <span>Research-Driven Human Connection</span>
          </div>
          <h1 className="hero-title">
            {content.hero.title}<br />
            <span className="hero-subtitle">{content.hero.subtitle}</span>
          </h1>
          <p className="hero-description">
            {content.hero.description}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" style={{ backgroundColor: '#e8dcc6',color: '#2D3748' }}>
              {content.hero.primaryButton}
            </button>
            <button className="btn btn-outline">
              {content.hero.secondaryButton}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
