import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/piyushrk" className="contact-link" target="_blank" rel="noopener noreferrer">
                piyushrk
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">Email:</span>
              <a href="mailto:piyush.khopade28@gmail.com" className="contact-link">
                piyush.khopade28@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <span className="contact-label">GitHub:</span>
              <a href="https://github.com/Piyush-K28" className="contact-link" target="_blank" rel="noopener noreferrer">
                Piyush-K28
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;