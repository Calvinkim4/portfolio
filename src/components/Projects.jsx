import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div>
                <h1 className='component-title'>Projects</h1>
                <h2 className='project-name'>Real Life</h2>
                <h3 className='project-desc'>Description: Multiplayer game where each player is in a different economic class. Each turn is an opportunity to make or lose money</h3>
                <a href='https://calvinkim4.github.io/Real-Life/'><img className='project-image' src='https://raw.githubusercontent.com/Calvinkim4/Real-Life/master/screenshot.png' alt='real life' /></a>
                <h2 className='project-name'>Marvel App</h2>
                <h3 className='project-desc'>Description: A Marvel reference application where users can search up characters, comics, and events</h3>
                <a href='https://calvinkim4.github.io/superhero-react-app/'><img className='project-image' src='https://raw.githubusercontent.com/Calvinkim4/superhero-react-app/master/wireframe/screenshot.png' alt='marvel app' /></a>
                <h2 className='project-name'>Best Life</h2>
                <h3 className='project-desc'>Description: A calorie counter application where users can add entries of what they ate and its calories, as well as, exercises done and calories lost</h3>
                <a href='http://best-l-i-f-e.surge.sh/'><img className='project-image' src='https://raw.githubusercontent.com/Calvinkim4/best-life/master/wireframes/screenshot.png' alt='best life' /></a>
                <h2 className='project-name'>Made2Fit</h2>
                <h3 className='project-desc'>A clothing store that saves user's measurements</h3>
                <a href='https://epic-jones-4619fa.netlify.com/'><img className='project-image' src='https://user-images.githubusercontent.com/10161700/59555355-cd07c300-8f7e-11e9-97bb-681116c446c8.png' alt='made2fit' /></a>
            </div>
        )
    }
}

export default Header;