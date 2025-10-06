import React from "react";
import NavPage from './NavPage/Navpage.js'
import About from './About/About.js'
import Projects from './Projects/Projects.js'
import Contact from './Contact/Contact.js'
import Biography from './Biography/Biography.js'
import './App.css';

function App() {
  return (
   <div className="App">
    <NavPage />
    <About />
    <Biography />
    <Projects />
    <Contact />
   </div>
  );
}

export default App;
