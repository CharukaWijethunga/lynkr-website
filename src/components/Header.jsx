import React from 'react'
import { content } from '../config'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-dot"></span>
            {content.header.logo}
          </div>
          <nav className="nav">
            {content.header.navigation.map((item, index) => (
              <a key={index} href="#" className="nav-link">{item}</a>
            ))}
          </nav>
          <button className="btn btn-primary">
            {content.header.ctaButton}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
