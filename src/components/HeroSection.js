// HeroSection.js
import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact-me');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-section">
      <div className="hero-content">
        <div className="name">
          <h1>Nacho<br/> Porretta</h1>
        </div>
        <div className="right">
          <div className="role">
            <p>&lt; Full-Stack<br/> Developer /&gt;</p>
          </div>
          <div className="hero-button">
            <button className='hero-btn' onClick={scrollToContact}>Contact Me</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
