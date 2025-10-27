import React from 'react'
import './JoinMovement.css'

const JoinMovement = () => {
  return (
    <section className="join-movement section">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">
            Join the <span className="highlight">Movement</span>
          </h2>
          <p className="section-subtitle">
            Be part of a community that values authentic connections over superficial interactions.<br />
            Start building meaningful relationships today.
          </p>
        </div>
        
        <div className="signup-form-container">
          <form className="signup-form">
            <div className="form-row">
              <input 
                type="text" 
                placeholder="First Name" 
                className="form-input"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="form-input full-width"
              />
            </div>
            <div className="form-row">
              <select className="form-select">
                <option>What are you looking for?</option>
                <option>Friendship</option>
                <option>Professional Network</option>
                <option>Romantic Connection</option>
                <option>Community</option>
              </select>
              <select className="form-select">
                <option>Age Range</option>
                <option>18-25</option>
                <option>26-35</option>
                <option>36-45</option>
                <option>46+</option>
              </select>
              <select className="form-select">
                <option>Location</option>
                <option>New York</option>
                <option>Los Angeles</option>
                <option>Chicago</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Start Building Connections
            </button>
          </form>
        </div>
        
        <div className="movement-stats">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">10K+</div>
              <div className="stat-label">Active Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Connections Made</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">95%</div>
              <div className="stat-label">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinMovement
