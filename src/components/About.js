import React from "react";
import "./About.css";

function About() {
  const skills = [
    "React", "TypeScript", "Next.js", "Tailwind CSS", "Jest", "GIT", "Bitbucket"
  ];

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
            <button className="resume-btn">View Resume</button>
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