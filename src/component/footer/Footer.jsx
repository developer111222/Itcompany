import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>At IT Company, we are a team of passionate professionals dedicated to delivering innovative solutions that empower businesses to thrive in the digital age. .</p>
      </div>
      <div className="footer-section">
        <h3>Services</h3>
        <ul>
          <li>Web Development</li>
          <li>Mobile App Development</li>
          <li>Cloud Services</li>
          <li>IT Consulting</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Contact Us</h3>
        <address>
          123 Tech Street<br/>
          Tech City, TX 12345<br/>
          Phone: (123) 456-7890<br/>
          Email: info@itcompany.com
        </address>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 IT Company. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
