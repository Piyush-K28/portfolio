import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <h1>Piyush Khopade</h1>
        </div>
        <ul className="navbar-menu">
          <li><a href="#about" className="navbar-link">About</a></li>
          <li><a href="#projects" className="navbar-link">Projects</a></li>
          <li><a href="#contact" className="navbar-link">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;