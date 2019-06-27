import React, { Component } from 'react';
import './Skills.css';

class Skills extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div id="skills" className='container-div'>
                <h1 className='component-title'>Skills</h1>
                <div className='bar-container'>
                    <i className="devicon-java-plain-wordmark colored icons"></i>
                    <i className="devicon-html5-plain-wordmark colored icons"></i>
                    <i className="devicon-css3-plain-wordmark colored icons"></i>
                    <i className="devicon-javascript-plain colored icons"></i>
                    <i className="devicon-react-original-wordmark colored icons"></i>
                    <i className="devicon-sequelize-plain-wordmark colored icons"></i>
                    <i className="devicon-express-original-wordmark colored icons"></i>
                    <i className="devicon-postgresql-plain-wordmark colored icons"></i>
                    <i className="devicon-nodejs-plain-wordmark colored icons"></i>
                    <i className="devicon-rails-plain-wordmark colored icons"></i>
                    <i className="devicon-git-plain-wordmark colored icons"></i>
                    <i className="devicon-github-plain-wordmark colored icons"></i>
                    <i className="devicon-bitbucket-plain-wordmark colored icons"></i>
                </div>
            </div>
            
        )
    }
}

export default Skills;