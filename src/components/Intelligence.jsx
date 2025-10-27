import React from 'react'
import './Intelligence.css'

const Intelligence = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Research-Driven',
      description: 'Built on decades of relationship psychology research and behavioral science.'
    },
    {
      icon: '🧠',
      title: 'Privacy-First',
      description: 'Your data stays private. We use insights, not personal information, to make connections.'
    },
    {
      icon: '⚡',
      title: 'Meaningful Matches',
      description: 'Quality over quantity. Every match is carefully considered for long-term compatibility.'
    }
  ]

  return (
    <section className="intelligence section">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">
            Connection Powered by<br />
            <span className="highlight">Intelligence</span>
          </h2>
          <p className="section-subtitle">
            Our platform combines the latest research in psychology and human behavior<br />
            to create connections that matter.
          </p>
        </div>
        <div className="intelligence-content">
          <p className="intelligence-description">
            Using advanced algorithms and behavioral insights, we go beyond surface-level matching to understand 
            what makes relationships work. Our approach is grounded in scientific research and designed to foster 
            genuine human connections.
          </p>
          <div className="features-grid grid grid-3">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intelligence
