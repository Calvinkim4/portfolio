import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div id="projects" className='container-div'>
                <h1 className='component-title'>Projects</h1>
                <div className='project-container'>
                    <a href='http://haggle-app.surge.sh/' className='indiv-container'>
                        <img className='project-image' src='https://user-images.githubusercontent.com/10161700/59198522-edd8ae80-8b61-11e9-96f0-00425e7eda0c.png' alt='haggle' />
                        <div className='project-desc'>
                            <h4 className='project-name'>Haggle</h4>
                            <h5 className='project-name2'>Description: A marketplace to trade items</h5>
                        </div>
                    </a>
                    <a href='https://calvinkim4.github.io/Real-Life/' className='indiv-container'>
                        <img className='project-image' src='https://raw.githubusercontent.com/Calvinkim4/Real-Life/master/screenshot.png' alt='real life' />
                        <div className='project-desc'>
                            <h4 className='project-name'>Real Life</h4>
                            <h5 className='project-name2'>Description: Multiplayer game where each player is in a different economic class. Each turn is an opportunity to make or lose money</h5>
                        </div>

                    </a>
                    <a href='https://calvinkim4.github.io/superhero-react-app/' className='indiv-container'>
                        <img className='project-image' src='https://raw.githubusercontent.com/Calvinkim4/superhero-react-app/master/wireframe/screenshot.png' alt='marvel app' />
                        <div className='project-desc'>
                            <h2 className='project-name'>Marvel App</h2>
                            <h3 className='project-name2'>Description: A Marvel reference application where users can search up characters, comics, and events</h3>
                        </div>
                    </a>
                    <a href='http://best-l-i-f-e.surge.sh/' className='indiv-container'>
                        <img className='project-image' src='https://raw.githubusercontent.com/Calvinkim4/best-life/master/wireframes/screenshot.png' alt='best life' />
                        <div className='project-desc'>
                            <h2 className='project-name'>Best Life</h2>
                            <h3 className='project-name2'>Description: A calorie counter application where users can add entries of what they ate and its calories, as well as, exercises done and calories lost</h3>
                        </div>
                    </a>
                    <a href='https://epic-jones-4619fa.netlify.com/' className='indiv-container'>
                        <img className='project-image' src='https://user-images.githubusercontent.com/10161700/59555355-cd07c300-8f7e-11e9-97bb-681116c446c8.png' alt='made2fit' />
                        <div className='project-desc'>
                            <h2 className='project-name'>Made2Fit</h2>
                            <h3 className='project-name2'>Description: A clothing store that saves user's measurements</h3>
                        </div>
                    </a>
                    <a href='https://calvinkim4.github.io/high-card/' className='indiv-container'>
                        <img className='project-image' src='https://user-images.githubusercontent.com/10161700/59621767-f69b2880-90fd-11e9-99d0-1c1163caa1ba.png' alt='high card' />
                        <div className='project-desc'>
                            <h2 className='project-name'>High Card</h2>
                            <h3 className='project-name2'>Description: Game where the player with the highest card wins</h3>
                        </div>
                    </a>
                    <a href='https://calvinkim4.github.io/tic-tac-toe/' className='indiv-container'>
                        <img className='project-image' src='https://user-images.githubusercontent.com/10161700/59622832-af626700-9100-11e9-90ff-2b03c7645d93.png' alt='tic tac toe' />
                        <div className='project-desc'>
                            <h2 className='project-name'>Tic Tac Toe</h2>
                            <h3 className='project-name2'>Description: Game where player need to get 3 in a row to win</h3>
                        </div>
                    </a>
                    <a href='https://calvinkim4.github.io/pixart/' className='indiv-container'>
                        <img className='project-image' src='https://user-images.githubusercontent.com/10161700/59624156-0584d980-9104-11e9-9703-073386851bf8.png' alt='pixart' />
                        <div className='project-desc'>
                            <h2 className='project-name'>Pixart</h2>
                            <h3 className='project-name2'>Description: Application for drawing pixart</h3>
                        </div>
                    </a>
                </div>
            </div>
            
        )
    }
}

export default Header;