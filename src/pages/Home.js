// Home.js
import React from 'react';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/HeroSection.js';
import MyLife from '../components/MyLife.js';
import SkillsSection from '../components/SkillsSection.js';
import ProjectsSection from '../components/ProjectsSection.js';
import ContactSection from '../components/ContactSection.js';
import Footer from '../components/Footer.js';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-section">
      <Navbar />
      <HeroSection />
      <MyLife />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;