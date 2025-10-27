import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            The Science of<br />
            <span className="hero-highlight">Real Connection.</span>
          </h1>
          <p className="hero-subtitle">
            We don't build apps. We build bridges — powered by<br />
            research, design and the authentic human connection.
          </p>
          <div className="hero-buttons">
            <a href="#learn" className="btn btn-primary">Learn more</a>
            <a href="#demo" className="btn btn-secondary">Get a demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
