import React from 'react'
import { content } from '../config'
import './TwoWays.css'

const TwoWays = () => {
  return (
    <section className="two-ways section">
      <div className="container">
        <div className="two-ways-header text-center">
          <h2 className="two-ways-title">{content.twoWays.title}

            <span className='text-gradient'>{content.twoWays.subtitle}</span>
          </h2>
          <p className="two-ways-description">{content.twoWays.description}</p>
        </div>
        <div className="ways-grid">
          <div className="way-card circle-card">
            <div className="card-header">
              <div className="card-icon circle-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  <line x1="12" y1="11" x2="12" y2="11"></line>
  <line x1="8" y1="11" x2="8" y2="11"></line>
</svg>
              </div>
              <h3 className="card-h2">{content.twoWays.circle.title}</h3>
            </div>
            <p className="card-description">{content.twoWays.circle.description}</p>
            <div className="card-features">
              {content.twoWays.circle.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-dot"></span>
                  {feature}
                </div>
              ))}
            </div>
            <div className="card-stats">
              <div className="stat-item">
                <div className="stat-label">Coming Soon...</div>
             
              </div>
            </div>
          </div>
          
          <div className="way-card spark-card">
            <div className="card-header">
              <div className="card-icon spark-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
</svg>
              </div>
              <h3 className="card-h2">{content.twoWays.spark.title}</h3>
            </div>
            <p className="card-description">{content.twoWays.spark.description}</p>
            
            <div className="card-features">
              {content.twoWays.spark.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-dot"></span>
                  {feature}
                </div>
              ))}
            </div>
            <div className="card-stats">
              <div className="stat-item">
                <div className="stat-label">Coming Soon...</div>
             
              </div>
            </div>


           
          </div>
        </div>
        
      <div className="ways-bottom">
  <div className="bottom-features">

    {/* Feature 1 */}
    <div className="bottom-feature">
      <div className="bottom-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h4 className="bottom-feature-title">Scientifically Backed Matching</h4>
      <p className="bottom-feature-description">
        Our algorithm uses proven compatibility metrics.
      </p>
    </div>

    {/* Feature 2 */}
    <div className="bottom-feature">
      <div className="bottom-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="currentColor"/>
        </svg>
      </div>
      <h4 className="bottom-feature-title">Meaningful Connections</h4>
      <p className="bottom-feature-description">
        Go beyond the surface and build real relationships.
      </p>
    </div>

    {/* Feature 3 */}
    <div className="bottom-feature">
      <div className="bottom-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="currentColor"/>
        </svg>
      </div>
      <h4 className="bottom-feature-title">Privacy-First Design</h4>
      <p className="bottom-feature-description">
        You control your data. We never sell or share it.
      </p>
    </div>

    {/* Feature 4 */}
    <div className="bottom-feature">
      <div className="bottom-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="currentColor"/>
        </svg>
      </div>
      <h4 className="bottom-feature-title">Premium Experience</h4>
      <p className="bottom-feature-description">
        A clean, ad-free interface focused on you.
      </p>
    </div>

  </div>
</div>
      </div>
    </section>
  )
}

export default TwoWays
