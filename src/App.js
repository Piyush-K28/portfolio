import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <ScrollProgress />
    </div>
  );
}

export default App;
