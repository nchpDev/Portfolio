// Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/Navbar.css';
import nchp_logo from '../assets/nchp_logo.png';

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuClicked, setMenuClicked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingDown = currentScrollPos > prevScrollPos;

      setVisible(!isScrollingDown || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {

    if (window.innerWidth > 600) {
      setVisible(!visible);
    } else {
      setMenuVisible(!menuVisible);
      setMenuClicked(!menuClicked);
      document.body.style.overflow = menuVisible ? 'auto' : 'hidden';
    }
  };

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navbar-container">
      <div className="logo-container">
          <a href="/" onClick={toggleMenu}>
            <img id='nchp-logo' src={nchp_logo} alt="Logo" />
          </a>
        </div>
        <div className={`nav-links ${menuClicked ? 'show' : ''}`}>
          <Link to="my-life" smooth={true} duration={500} onClick={toggleMenu}>
            About Me
          </Link>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>
            Skills
          </Link>
          <Link to="project" smooth={true} duration={500} onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="contact-me" smooth={true} duration={500} onClick={toggleMenu}>
            Contact Me
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuClicked ? '✕' : '☰'}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
