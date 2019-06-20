import React, { Component } from 'react';

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
                <i class="devicon-java-plain-wordmark colored icons"></i>
                <i class="devicon-html5-plain-wordmark colored icons"></i>
                <i class="devicon-css3-plain-wordmark colored icons"></i>
                <i class="devicon-javascript-plain colored icons"></i>
                <i class="devicon-react-original-wordmark colored icons"></i>
                <i class="devicon-sequelize-plain-wordmark colored icons"></i>
                <i class="devicon-express-original-wordmark colored icons"></i>
                <i class="devicon-postgresql-plain-wordmark colored icons"></i>
                <i class="devicon-nodejs-plain-wordmark colored icons"></i>
                <i class="devicon-rails-plain-wordmark colored icons"></i>
                <i class="devicon-git-plain-wordmark colored icons"></i>
                <i class="devicon-github-plain-wordmark colored icons"></i>
                <i class="devicon-bitbucket-plain-wordmark colored icons"></i>
                </div>
            </div>
            
        )
    }
}

export default Skills;