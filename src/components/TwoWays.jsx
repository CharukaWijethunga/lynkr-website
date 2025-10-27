import React from 'react'
import './TwoWays.css'

const TwoWays = () => {
  return (
    <section className="two-ways section">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">
            Two Ways to <span className="highlight">Connect</span>
          </h2>
          <p className="section-subtitle">
            Choose from two experiences, both powered by science and designed to<br />
            foster authentic connections.
          </p>
        </div>
        <div className="ways-grid grid grid-2">
          <div className="way-card lynkr-circle">
            <div className="way-header">
              <div className="way-icon">●</div>
              <h3 className="way-title">Lynkr Circle</h3>
            </div>
            <p className="way-description">
              Join intimate groups of like-minded individuals. Share experiences, 
              build lasting friendships, and create meaningful connections in a 
              supportive community environment.
            </p>
            <div className="way-features">
              <div className="feature-item">Small group connections</div>
              <div className="feature-item">Shared interest matching</div>
              <div className="feature-item">Community building</div>
              <div className="feature-item">Event coordination</div>
            </div>
            <div className="way-stats">
              <div className="stat">
                <div className="stat-number">You</div>
                <div className="stat-label">Personal</div>
              </div>
              <div className="stat">
                <div className="stat-number">Science</div>
                <div className="stat-label">Research</div>
              </div>
            </div>
            <div className="way-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="way-card lynkr-spark">
            <div className="way-header">
              <div className="way-icon spark-icon">●</div>
              <h3 className="way-title">Lynkr Spark</h3>
            </div>
            <p className="way-description">
              Discover one-on-one connections through thoughtful matching. 
              Build deeper relationships with individuals who share your values, 
              interests, and relationship goals.
            </p>
            <div className="way-features">
              <div className="feature-item">1:1 meaningful matches</div>
              <div className="feature-item">Compatibility scoring</div>
              <div className="feature-item">Conversation starters</div>
              <div className="feature-item">Relationship building</div>
            </div>
            <div className="way-stats spark-stats">
              <div className="stat">
                <div className="stat-number">157</div>
                <div className="stat-label">Matches</div>
              </div>
              <div className="stat">
                <div className="stat-number">4</div>
                <div className="stat-label">Active</div>
              </div>
              <div className="stat">
                <div className="stat-number">18</div>
                <div className="stat-label">Conversations</div>
              </div>
            </div>
            <a href="#spark" className="btn btn-primary spark-btn">Join Lynkr Spark</a>
          </div>
        </div>
        
        <div className="bottom-features grid grid-3">
          <div className="bottom-feature">
            <div className="bottom-icon">📊</div>
            <h4>Algorithmic Matching</h4>
            <p>Advanced compatibility algorithms</p>
          </div>
          <div className="bottom-feature">
            <div className="bottom-icon">🔒</div>
            <h4>Privacy First</h4>
            <p>Your data stays secure and private</p>
          </div>
          <div className="bottom-feature">
            <div className="bottom-icon">💬</div>
            <h4>Conversation Starters</h4>
            <p>Meaningful prompts to break the ice</p>
          </div>
          <div className="bottom-feature">
            <div className="bottom-icon">🎯</div>
            <h4>Intention Matching</h4>
            <p>Connect based on relationship goals</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TwoWays
