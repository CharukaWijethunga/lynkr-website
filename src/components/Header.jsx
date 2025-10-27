import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="logo">
            <span className="logo-icon">●</span>
            <span className="logo-text">Lynkr</span>
          </div>
     
          <a href="#signup" className="btn btn-primary">Join the Waitlist</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
