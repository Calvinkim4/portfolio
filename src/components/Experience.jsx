import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div className='container-div'>
                <h1 className='component-title'>Experiences</h1>
                <h2 className='exp-title'>Java Developer- Freelance Mobile Development</h2>							                     
                <h2 className='exp-title'>2015- Present</h2>					          
                <h3 className='exp-desc'>Developed 4 mobile applications using LIBGDX and Java</h3>
                <h3 className='exp-desc'>Coded android games on Android studio; built applications with gradle</h3>
                <h3 className='exp-desc'>Deployed two games on Android Play Store <span>(please see JumperFall & CircleVSquare)</span></h3>


                <h2 className='exp-title'>Jr. Software Engineer | Software Engineering Immersive </h2>
                <h2 className='exp-title'>March 2019-June 2019</h2>
                <h3 className='exp-desc'>Created and designed interactive responsive web/mobile applications using Javascript, HTML/CSS, React, and with RESTful API integration</h3>
                <h3 className='exp-desc'>Created databases using sequelize, postgresql and created endpoints/apis using ruby on rails/express</h3>
                <h3 className='exp-desc'><span>Collaborated with fellow engineers</span> to create and design multiple interactive web applications</h3>
                <h3 className='exp-desc'><span>Collaborated with ux-designers</span> to create and update user-friendly web apps</h3>

            </div>
        )
    }
}

export default Experience;