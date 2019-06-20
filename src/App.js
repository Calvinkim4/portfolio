import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import Skills from './components/Skills';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Intro />
      <nav className='nav-bar'>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </nav>

      <div className='fixed-links-div'>
        <a href='https://github.com/Calvinkim4' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faGithub} className='fixed-links'size="3x" /></a>
        <a href='https://www.linkedin.com/in/calvinkim4/' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faLinkedin} className='fixed-links' size="3x" /></a>
        <a href='https://docdro.id/E8pF5pB' rel="noopener noreferrer" target="_blank"><FontAwesomeIcon icon={faFileInvoice} className='fixed-links' size="3x" /></a>
      </div>

      <About />
      <Skills />
`     <Projects />
      <Contact />
    </div>
  );
}

export default App;
