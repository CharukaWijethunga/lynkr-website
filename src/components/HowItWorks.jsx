import React from 'react'
import { content } from '../config'
import './HowItWorks.css'

const HowItWorks = () => {
  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-header text-center">
          <div className="section-label">Process</div>
          <h2 className="section-title">
            {content.howItWorks.title}<br />
            <span className="title-accent">{content.howItWorks.subtitle}</span>
          </h2>
        </div>
        <div className="steps-grid">
          {content.howItWorks.steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{step.number}</div>
              <div className="step-icon">
                {index === 0 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7.5V9M15 11.5C15.8 11.5 16.5 12.2 16.5 13S15.8 14.5 15 14.5 13.5 13.8 13.5 13 14.2 11.5 15 11.5M5 12C5.8 12 6.5 12.7 6.5 13.5S5.8 15 5 15 3.5 14.3 3.5 13.5 4.2 12 5 12Z" fill="currentColor"/>
                  </svg>
                )}
                {index === 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
                  </svg>
                )}
                {index === 2 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
                  </svg>
                )}
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
