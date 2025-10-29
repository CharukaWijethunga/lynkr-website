import React, { useState } from 'react'
import { content } from '../config'
import './JoinMovement.css'

const JoinMovement = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    location: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="join-movement section">
      <div className="container">
        <div className="movement-content">
          <h2 className="movement-title">{content.joinMovement.title}</h2>
          <p className="movement-description">{content.joinMovement.description}</p>
          
          <form className="movement-form" onSubmit={handleSubmit}>
            <div className="form-row">
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
            <button type="submit" className="btn btn-primary form-submit">
              {content.joinMovement.form.submitButton}
            </button>
          </form>
          
          <div className="movement-stats">
            <div className="stat-item">
              <div className="stat-value">{content.joinMovement.stats.science}</div>
              <div className="stat-label">Approach</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">{content.joinMovement.stats.launch}</div>
              <div className="stat-label">Launch</div>
            </div>
            <div className="stat-item">
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
