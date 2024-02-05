import React, { useEffect, useRef, useState } from 'react';
import '../styles/ProjectsSection.css';

import project1_icon from '../assets/inforge_logo.png';
// import project2_icon from '../assets/tbi_coaching.png';
// import project3_icon from '../assets/react.png';

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 0.35,
    });

    const currentRef = containerRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [containerRef]);

  return (
    <div id="project" className='projects' ref={containerRef}>
      <h1 className='title-project-section'>Projects</h1>
      <div className="projects-container">
        <div className="project-wrap">
          <div className={`project-card-left ${isVisible ? 'visible' : ''}`}>
            <img src={project1_icon} alt="Project 1 Logo" />
          </div>
        </div>

        <div className="project-wrap">
          <div className={`project-card-right ${isVisible ? 'visible' : ''}`}>
            <img src={project1_icon} alt="Project 1 Logo" />
          </div>
        </div>

        <div className="project-wrap">
          <div className={`project-card-left ${isVisible ? 'visible' : ''}`}>
            <img src={project1_icon} alt="Project 1 Logo" />
          </div>
        </div>

        <div className="project-wrap">
          <div className={`project-card-right ${isVisible ? 'visible' : ''}`}>
            <h3>More Mini-Projects...</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
