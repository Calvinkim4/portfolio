import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import { defaults } from 'react-chartjs-2';

defaults.global.defaultColor = 'black';
defaults.global.defaultFontColor = 'black';
defaults.global.defaultFontFamily = 'Teko';
defaults.global.defaultFontSize = 30;

class Skills extends Component {
    constructor() {
        super();
        this.state = {
            data: {
                labels: ['Java', 'Javascript', 'HTML/CSS', 'React', 'SQL', 'Sequelize', 'Express', 'Ruby On Rails'],
                datasets: [{
                    label: 'Skill Level',
                    data: [10, 9, 9, 10, 7, 7, 8.5, 5],
                    backgroundColor: ['#eafc40', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', '#eafc40', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)']
                }]
            },
            options: {
                scales: {
                  yAxes: [{
                    ticks: {
                      beginAtZero: true,
                      max: 10
                    }
                  }]
                },
                responsive: true,
                maintainAspectRatio: true
              }
        }
    }
    render() {
        return (
            <div id="skills" className='container-div'>
                <h1 className='component-title'>Skills</h1>
                <div className='bar-container'>
                    <Bar data={this.state.data} options={this.state.options} />
                </div>
                
            </div>
        )
    }
}

export default Skills;