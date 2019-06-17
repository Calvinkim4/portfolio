import React, { Component } from 'react';

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            mail: '',
            subject: '',
            body: ''
        }
    }

    handleTextInput = async (event) => {
        const fieldName = event.target.name;
        const value = event.target.value;
    
        this.setState(state => {
          return { [fieldName]: value }
        })
      }

    render() {

        return(
            <div id="contact" className='contact-div container-div'>
                <h1 className='component-title'>Contact</h1>
                <input type="text" name="mail" onChange={this.handleTextInput} placeholder='Email'/>
                <input type="text" name="subject" onChange={this.handleTextInput} placeholder='Subject'/>
                <textarea className='input-content' type="text" name="body" onChange={this.handleTextInput} placeholder='Content'/>
                <a className='input-button' href={`mailto:calvinkim4@gmail.com?cc=${this.state.mail}&subject=${this.state.subject}&body=${this.state.body}`}>Send</a>

            </div>
        )
    }
}

export default Contact;