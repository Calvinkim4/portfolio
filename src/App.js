import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <Header />
      <nav className='nav-bar'>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </nav>
      <a id="About"><About /></a>
      <a id="Projects"><Projects /></a>
      <a id="Contact"><Contact /></a>

      <div className='fixed-links-div'>
        <a href='https://github.com/Calvinkim4' target="_blank"><FontAwesomeIcon icon={faFileInvoice} className='fixed-links'size="3x" /></a>
        <a href='https://www.linkedin.com/in/calvinkim4/' target="_blank"><FontAwesomeIcon icon={faLinkedin} className='fixed-links' size="3x" /></a>
        <a href='https://docdro.id/E8pF5pB' target="_blank"><FontAwesomeIcon icon={faGithub} className='fixed-links' size="3x" /></a>
      </div>
      {/* <About /> */}
      {/* <Contact /> */}
      {/* <Projects /> */}
      {/* <div className='background-img'> */}
        {/* <img src="https://media.giphy.com/media/ygAaR0n5RsyAM/giphy.gif" alt='background' /> */}
        {/* <img src="https://media.giphy.com/media/3ohhwEZqxzKbNUHzji/giphy.gif" alt='background' /> */}
        {/* <img src="https://media.giphy.com/media/mX1bWOEGPIAY1yhmKI/giphy.gif" alt='background' /> */}
        {/* <img src="https://wallpaperplay.com/walls/full/8/f/0/74385.jpg" alt='background' /> */}
        {/* <img src="https://img.wallpapersafari.com/desktop/1920/1080/4/15/VLQj8K.jpg" alt='background' /> */}
      {/* </div> */}
    </div>
  );
}

export default App;
