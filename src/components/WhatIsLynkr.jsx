import React from 'react'
import './WhatIsLynkr.css'

const WhatIsLynkr = () => {
  return (
    <section className="what-is-lynkr section">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">
            What is <span className="highlight">Lynkr</span>
          </h2>
          <p className="section-subtitle">
            A research-driven connection platform for<br />
            authentic human relationships.
          </p>
        </div>
        <div className="content-wrapper">
          <p className="description">
            Unlike social media platforms that focus on likes and followers, Lynkr is designed to 
            facilitate meaningful connections. Every interaction is a step toward building authentic 
            relationships that matter.
          </p>
          <div className="action-buttons">
            <a href="#features" className="btn btn-outline">Explore the features</a>
            <a href="#demo" className="btn-link">Learn more about Lynkr</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatIsLynkr
