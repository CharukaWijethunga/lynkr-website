import React from 'react'
import { content } from '../config'
import './LynkrCore.css'

const LynkrCore = () => {
  return (
    <section className="lynkr-core section">
      <div className="container">
        <div className="core-content">
          <h2 className="core-title">{content.lynkrCore.title}</h2>
          <p className="core-description">{content.lynkrCore.description}</p>
          <div className="core-visual">
            <div className="core-circle">
              <div className="core-center">
                <div className="core-dot"></div>
              </div>
              <div className="core-orbit orbit-1">
                <div className="orbit-dot"></div>
              </div>
              <div className="core-orbit orbit-2">
                <div className="orbit-dot"></div>
              </div>
              <div className="core-orbit orbit-3">
                <div className="orbit-dot"></div>
              </div>
            </div>
          </div>
          <div className="core-features">
            <div className="feature-item">
              <h4>Connection-First Design</h4>
              <p>Every feature is built to foster authentic human connections</p>
            </div>
            <div className="feature-item">
              <h4>Research-Based Approach</h4>
              <p>Grounded in decades of social psychology and neuroscience research</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LynkrCore
