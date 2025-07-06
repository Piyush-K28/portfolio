import React, { useState } from "react";
import "./About.css";

function About() {
  const [isResumeLoading, setIsResumeLoading] = useState(false);

  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Jest", "GIT", "Bitbucket"
  ];

  const handleResumeClick = async () => {
    setIsResumeLoading(true);
    
    try {
      // Check if resume file exists
      const response = await fetch('/Piyush_Khopade_Resume.pdf', { method: 'HEAD' });
      
      if (response.ok) {
        // File exists, open it in a new tab
        window.open('/Piyush_Khopade_Resume.pdf', '_blank');
      } else {
        // File doesn't exist, show alert with instructions
        alert('Resume not found! Please add your resume PDF to the public folder as "Piyush_Khopade_Resume.pdf"');
      }
    } catch (error) {
      // Fallback: try to open it anyway (might work if file exists)
      window.open('/Piyush_Khopade_Resume.pdf', '_blank');
    } finally {
      setIsResumeLoading(false);
    }
  };

  return (
    <section id="about" className="hero">
      <div className="hero-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src="/logo192.png" alt="Piyush Khopade" />
          </div>
          <div className="hero-text">
            <h1 className="hero-name">Hi, I'm Piyush Khopade 👋</h1>
            <p className="hero-title">Frontend Developer | React | TypeScript | Tailwind</p>
            <button 
              className="resume-btn" 
              onClick={handleResumeClick}
              disabled={isResumeLoading}
            >
              {isResumeLoading ? 'Loading...' : 'View Resume'}
            </button>
          </div>
        </div>
        
        <div className="skills-section">
          <h2 className="skills-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;