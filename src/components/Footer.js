// Footer.js
import React from 'react';
import '../styles/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className="footer-container">

      <div className="social-icons">

        <a href="https://www.instagram.com/nachoporretta/" id='ig' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/NachoPorretta" id='tw' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.linkedin.com/in/ignacio-porretta-0a369417a" id='lk' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/nchp7" id='gh' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="your-whatsapp-profile-link" id='wp' target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

      <div className='creation'>Created By © nchp</div>
    </div>
  );
};

export default Footer;
