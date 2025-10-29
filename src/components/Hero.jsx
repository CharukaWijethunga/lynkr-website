import React from 'react'
import { content } from '../config'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            {content.hero.title}<br />
            <span className="hero-subtitle">{content.hero.subtitle}</span>
          </h1>
          <p className="hero-description">
            {content.hero.description}
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">
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
