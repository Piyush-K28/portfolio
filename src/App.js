import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
