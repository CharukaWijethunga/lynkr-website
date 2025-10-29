import React from 'react'
import { content } from '../config'
import './ConnectionPowered.css'

const ConnectionPowered = () => {
  return (
    <section className="connection-powered section">
      <div className="container">
        <div className="connection-content">
          <h2 className="connection-title">
            {content.connectionPowered.title}<br />
            <span className="title-accent">{content.connectionPowered.subtitle}</span>
          </h2>
          <p className="connection-description">
            {content.connectionPowered.description}
          </p>
          <div className="connection-features">
            {content.connectionPowered.features.map((feature, index) => (
              <div key={index} className="feature-badge">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ConnectionPowered
