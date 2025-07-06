import React from "react";
import "./Experience.css";

function Experience() {
  const experiences = [
    {
      company: "TechCorp Solutions",
      role: "Frontend Developer Intern",
      description:
        "Developed reusable React components and improved application performance by 20% through code optimization and lazy loading techniques."
    },
    {
      company: "Innova Labs",
      role: "Junior React Developer",
      description:
        "Collaborated with cross-functional teams to design and implement responsive UI using React, Tailwind CSS, and TypeScript for a SaaS analytics platform."
    },
    {
      company: "DigitalCrafts",
      role: "Web Development Intern",
      description:
        "Assisted in building landing pages, conducted A/B testing, and enhanced accessibility standards across the company website using semantic HTML and ARIA."
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <h2 className="experience-title">Professional Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="card-face card-front">
                <h3 className="company-name">{exp.company}</h3>
                <p className="role">{exp.role}</p>
              </div>
              <div className="card-face card-back">
                <p className="description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;