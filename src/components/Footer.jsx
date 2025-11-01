import React from 'react'
import { content } from '../config'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-sections">
            {content.footer.sections.map((section, index) => (
              <div key={index} className="footer-section">
                <h4 className="footer-title">{section.title}</h4>
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="footer-link">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer-bottom">
          
            <div className="footer-copyright">
              © 2025 Lynkr. All rights reserved.
            </div>
              <div className="footer-copyright">
             Made with <span className='love'>♥</span> for meaningful connections
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
