import React from 'react'
import './LynkrCore.css'

const LynkrCore = () => {
  return (
    <section className="lynkr-core section">
      <div className="container">
        <div className="section-header text-center mb-6">
          <h2 className="section-title">
            The <span className="highlight">Lynkr</span> Core
          </h2>
          <p className="section-subtitle">
            Behind every connection is intention. Lynkr digs into psychology,<br />
            emotion, and opportunity to help people meet in the right way at<br />
            the right time.
          </p>
        </div>
        <div className="core-visual">
          <div className="core-diagram">
            <div className="core-center">
              <div className="core-circle">
                <span>Psychology & Personality</span>
              </div>
            </div>
            <div className="core-connections">
              <div className="connection-item left">
                <div className="connection-circle">
                  <span>Compatibility Matching</span>
                </div>
              </div>
              <div className="connection-item right">
                <div className="connection-circle">
                  <span>Behavioral Insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="core-description">
            Our platform combines cutting-edge research in human psychology with intuitive design<br />
            to create connections that feel natural and meaningful.
          </p>
        </div>
      </div>
    </section>
  )
}

export default LynkrCore
