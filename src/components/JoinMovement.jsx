import React, { useState } from 'react'
import { content } from '../config'
import './JoinMovement.css'

// Your API Endpoint URL
const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw4lnyHcqFupL1X_T56sUmx-7pxfA9xvhU5VQNlKOgmJrmze7g8F6qe8kLS0R0oZueM/exec' 

const JoinMovement = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    product: ''
  })
  
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  // ... (handleInputChange and handleCardSelect are unchanged) ...
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCardSelect = (value) => {
    setFormData({
      ...formData,
      product: value
    })
  }


  // --- UPDATED handleSubmit FUNCTION ---
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.product) {
      setStatus({ 
        loading: false, 
        success: false, 
        error: 'Please select an option (Circle, Spark, or Both).' 
      })
      return
    }

    setStatus({ loading: true, success: false, error: null }) 

    // --- 1. GET USER LOCATION ---
    // Create a default value for location
    let userLocation = 'Location not provided';
    try {
      // Wrap the callback-based API in a Promise to use async/await
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          timeout: 10000 // Stop trying after 10 seconds
        });
      });
      // If successful, format the location
      userLocation = `${position.coords.latitude}, ${position.coords.longitude}`;

    } catch (error) {
      // This will catch errors or if the user denies permission
      console.warn(`Could not get location: ${error.message}`);
    }
    // --- End of Location Logic ---


    // --- 2. PREPARE DATA TO SEND ---
    const submittedTimestamp = new Date().toISOString();
    const dataToSend = {
      ...formData,
      submittedTimestamp: submittedTimestamp,
      location: userLocation // <--- ADDED LOCATION
    };

    console.log('Data being sent to Google Sheet:', dataToSend);

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })

      setStatus({ loading: false, success: true, error: null })
      setFormData({ email: '', name: '', product: '' }) 

    } catch (error) {
      console.error('Error submitting form:', error)
      setStatus({ loading: false, success: false, error: error.message })
    }
  }

  return (
    <section className="join-movement section">
      {/* ... rest of your JSX is unchanged ... */}
      
          <div className="container">
        <div className="movement-content">
          <h2 className="movement-title">{content.joinMovement.title}
            <span className='text-gradient'>
              {content.joinMovement.subtitle}
            </span>
          </h2>
          <p className="movement-description">{content.joinMovement.description}</p>
          
          <form className="movement-form" onSubmit={handleSubmit}>
            <div className="form-row">
              {/* Email and Name inputs remain the same */}
                <input
                type="text"
                name="name"
                placeholder={content.joinMovement.form.namePlaceholder}
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                required
              />
              
              <input
                type="email"
                name="email"
                placeholder={content.joinMovement.form.emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            
            </div>

            {/* Card Selection UI */}
            <div className="card-select-container">
              <label className="card-select-label">I am interested in:</label>
              <div className="card-options">
                <button
                  type="button" 
                  className={`card-select-btn ${formData.product === 'Circle' ? 'active' : ''}`}
                  onClick={() => handleCardSelect('Circle')}
                >
                  Circle
                </button>
                <button
                  type="button"
                  className={`card-select-btn ${formData.product === 'Spark' ? 'active' : ''}`}
                  onClick={() => handleCardSelect('Spark')}
                >
                  Spark
                </button>
                <button
                  type="button"
                  className={`card-select-btn ${formData.product === 'Both' ? 'active' : ''}`}
                  onClick={() => handleCardSelect('Both')}
                >
                  Both
                </button>
              </div>
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary form-submit"
              disabled={status.loading}
            >
              {status.loading 
                ? 'Submitting...' 
                : content.joinMovement.form.submitButton
              }
            </button>
            
            {/* Status messages */}
            {status.success && (
              <p className="form-success-message">Thanks for joining!</p>
            )}
            {status.error && (
              <p className="form-error-message">
                {status.error}
              </p>
            )}

            <div className='conditions'>By joining, you agree to our privacy policy. We'll never share your data.</div>
          </form>
          
         {/* ... rest of your component (stats, etc) ... */}
         <div className="movement-stats">
            <div className="stat-item">
              <div className="stat-value text-gradient">{content.joinMovement.stats.science}</div>
              <div className="stat-label">Approach</div>
            </div>
            <div className="stat-item">
              <div className="stat-value text-gradient">{content.joinMovement.stats.launch}</div>
              <div className="stat-label">Launch</div>
            </div>
            <div className="stat-item">
              <div className="stat-value text-gradient">{content.joinMovement.stats.access}</div>
              <div className="stat-label">Beta</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default JoinMovement