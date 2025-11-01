import React, { useState } from 'react'
import { content } from '../config'
import './JoinMovement.css'

// Your API Endpoint URL from SheetDB or Google Apps Script
const API_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzESYhOInpraurJPxsdsejAzCPlbKazlViGft_sPNZNxsSpIFJnFQCIrfLJLqHwXfSL/exec' 

const JoinMovement = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    location: ''
  })
  
  // Add state to track form submission status
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ loading: true, success: false, error: null }) 

    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors', // <--- ADD THIS LINE
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      // WARNING: 'no-cors' mode means you CANNOT read the response.
      // We have to just *assume* it was successful.
      // You can't check response.ok or response.json().
      
      setStatus({ loading: false, success: true, error: null })
      setFormData({ email: '', name: '', location: '' }) // Clear the form

    } catch (error) {
      // This .catch() will still work for *network* errors 
      // (e.g., user is offline)
      console.error('Error submitting form:', error)
      setStatus({ loading: false, success: false, error: error.message })
    }
  }

  return (
    <section className="join-movement section">
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
              {/* ... your inputs ... */}
              <input
                type="email"
                name="email"
                placeholder={content.joinMovement.form.emailPlaceholder}
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                required
              />
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
                type="text"
                name="location"
                placeholder={content.joinMovement.form.locationPlaceholder}
                value={formData.location}
                onChange={handleInputChange}
                className="form-input"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn btn-primary form-submit"
              disabled={status.loading} // Disable button while loading
            >
              {status.loading 
                ? 'Submitting...' 
                : content.joinMovement.form.submitButton
              }
            </button>
            
            {/* Show success or error messages */}
            {status.success && (
              <p className="form-success-message">Thanks for joining!</p>
            )}
            {status.error && (
              <p className="form-error-message">
                Something went wrong. Please try again.
                {status.error}
              </p>
         
            )}
          </form>
          
         <div className="movement-stats">
            <div className="stat-item">
              <div className="stat-value text-gradient">{content.joinMovement.stats.science}</div>
              <div className="stat-label">Approach</div>
            </div>
            <div className="stat-item">
              <div className="stat-value text-gradient">{content.joinMovement.stats.launch}</div>
              <div className="stat-label">Launch</div>
            </div>
            <div className="stat-item text-gradient">
              <div className="stat-value">{content.joinMovement.stats.access}</div>
              <div className="stat-label">Beta</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JoinMovement