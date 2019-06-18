import React, { Component } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

class About extends Component {
    render() {
        return(
            <ScrollAnimation animateIn="slideInRight" animateOut='slideOutRight' duration='.7'>
                <div id="about" className='container-div'>
                    <h1 className='component-title about-title'>About</h1>
                    <p className='about-desc'>I am a creative <span>Java & Front-End Developer</span> who enjoys building websites, games, and applications from the ground up. I am a lifelong learner who is passionate about learning new languages and frameworks within the development space. By learning Java on my own through online tutorials and textbooks, I was able to create a multiple android games and even deployed two of them on the Play Store. Whether it be mobile, web or even artificial intelligence, I would like to help build something useful and be a part of group of individuals who are driven and like-minded.</p>
                </div>
            </ScrollAnimation>
            
        )
    }
}

export default About;