// SkillsSection.js
import React, { useState, useEffect } from 'react';
import '../styles/SkillsSection.css';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import html_icon from '../assets/html.svg';
import css_icon from '../assets/css.svg';
import js_icon from '../assets/javascript.svg';
import ruby_icon from '../assets/ruby.svg';
import react_icon from '../assets/react.png';
import gitbash_icon from '../assets/git_bash.svg';
import c_icon from '../assets/c_sharp.svg';
import apex_icon from '../assets/apex.webp';
import sf_icon from '../assets/salesforce.svg';
import nodejs_icon from '../assets/nodejs.svg';
import sql_icon from '../assets/sql.svg';
import soql_icon from '../assets/soql.png';
import mongodb_icon from '../assets/mongodb.svg';

const skillsData = [
    { title: 'HTML', icon: html_icon, nivel: 'Intermedio/Avanzado' },
    { title: 'CSS', icon: css_icon, nivel: 'Intermedio/Avanzado' },
    { title: 'JavaScript', icon: js_icon, nivel: 'Intermedio' },
    { title: 'Ruby', icon: ruby_icon, nivel: '' },
    { title: 'React JS', icon: react_icon, nivel: 'Intermedio' },
    { title: 'GIT Bash', icon: gitbash_icon, nivel: 'Principiante/Intermedio' },
    { title: 'C#', icon: c_icon, nivel: '' },
    { title: 'Apex', icon: apex_icon, nivel: 'Principiante/Intermedio' },
    { title: 'SalesForce', icon: sf_icon, nivel: 'Avanzado' },
    { title: 'Node.js', icon: nodejs_icon, nivel: 'Principiante' },
    { title: 'SQL', icon: sql_icon, nivel: 'Intermedio' },
    { title: 'SOQL', icon: soql_icon, nivel: 'Intermedio' },
    { title: 'MongoDB', icon: mongodb_icon, nivel: 'Principiante' }
];

const SkillsSection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 550);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 550);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % skillsData.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + skillsData.length) % skillsData.length);
    };

    const renderCircleIcons = (nivel) => {

        if (!nivel) {
            return <div>Coming Soon...</div>;
        }    

        const circleStyle = { fontSize: '1rem', margin: '0.25rem' };
        const tooltipText = nivel === 'Principiante/Intermedio' || nivel === 'Intermedio/Avanzado'
            ? `${nivel.split('/')[0]} - ${nivel.split('/')[1]}`
            : nivel;
    
        const circleColors = getCircleColors(nivel);
    
        return (
            <>
                {circleColors.map((color, i) => (
                    <React.Fragment key={i}>
                        <FontAwesomeIcon
                            icon={faCircle}
                            style={{ ...circleStyle, color }}
                            title={tooltipText}
                        />
                    </React.Fragment>
                ))}
            </>
        );
    };
    
    const getCircleColors = (nivel) => {
        switch (nivel) {
            case 'Avanzado':
                return ['#ff2b2b'];
            case 'Intermedio':
                return ['#f58042'];
            case 'Principiante':
                return ['#1fcf42'];
            case 'Principiante/Intermedio':
                return ['#1fcf42', '#f58042'];
            case 'Intermedio/Avanzado':
                return ['#f58042', '#ff2b2b'];
            default:
                return ['#fff']; // Default Color
        }
    };
    
    return (
        <div id="skills">
            <div className='title'>
                <h1>Skills</h1>
                <div className='icon-explain'>
                    {renderCircleIcons('Principiante', 0)}
                    {renderCircleIcons('Intermedio', 1)}
                    {renderCircleIcons('Avanzado', 2)}
                </div>
            </div>
            <div className="skills-container">
                {isMobile ? (
                    <div className='slider-section'>
                        <div className="slider-btn prev" onClick={handlePrev}>
                            &#8249;
                        </div>
                        <div key={currentIndex} className="skill-card">
                            <h3>{skillsData[currentIndex].title}</h3>
                            <img src={skillsData[currentIndex].icon} alt={skillsData[currentIndex].title} />
                            <div className="icons-container">
                                <div className="circle-icons-container">{renderCircleIcons(skillsData[currentIndex].nivel, currentIndex)}</div>
                            </div>
                        </div>
                        <div className="slider-btn next" onClick={handleNext}>
                            &#8250;
                        </div>
                    </div>
                ) : (
                    <div className="skills-section">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <h3>{skill.title}</h3>
                                <img src={skill.icon} alt={skill.title} />
                                <div className="icons-container">
                                    <div className="circle-icons-container">{renderCircleIcons(skill.nivel, index)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SkillsSection;
