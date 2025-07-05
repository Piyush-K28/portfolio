import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      id: 1,
      icon: "🔗",
      title: "Theme Toggle Chrome Extension",
      description: "Toggle themes using React, Vite, and Manifest v3 APIs.",
      link: "https://github.com/Piyush-K28/theme-toggle-extension"
    },
    {
      id: 2,
      icon: "🪙",
      title: "CoinMart",
      description: "Crypto platform using Next.js, Tailwind, and Ethereum testnet.",
      link: "https://github.com/Piyush-K28/Coin-Mart.git"
    },
    {
      id: 3,
      icon: "🍎",
      title: "Fruit Detection with YOLOv5",
      description: "Real-time object detection system using Python, OpenCV, and ML.",
      link: "https://github.com/Piyush-K28/fruit-detection"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;