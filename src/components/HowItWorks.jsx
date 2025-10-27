import React from 'react'
import './HowItWorks.css'

const HowItWorks = () => {
  const steps = [
    {
      icon: '●',
      title: 'Share Your Story',
      description: 'Tell us about yourself, your interests, and what you\'re looking for in meaningful connections.'
    },
    {
      icon: '●',
      title: 'Get Thoughtful Matches',
      description: 'Our algorithm considers compatibility beyond surface-level traits to suggest genuine connections.'
    },
    {
      icon: '●',
      title: 'Make Real Connections',
      description: 'Engage in meaningful conversations and build authentic relationships that last.'
    }
  ]

  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">
            How Lynkr Creates<br />
            <span className="highlight">Real Connections</span>
          </h2>
        </div>
        <div className="steps-grid grid grid-3">
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-icon">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="bottom-text">
            Ready to start building meaningful connections? Join thousands who've found their tribe.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
