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
            <div className='contact-div'>
                <h1>Contact</h1>
                <input type="text" name="mail" onChange={this.handleTextInput} placeholder='Email'/>
                <input type="text" name="subject" onChange={this.handleTextInput} placeholder='Subject'/>
                <textarea className='input-content' type="text" name="body" onChange={this.handleTextInput} placeholder='Content'/>
                {/* <button className='input-button'><a href={`mailto:calvinkim4@gmail.com?cc=${this.state.mail}&subject=${this.state.subject}&body=${this.state.body}`}>Send</a></button> */}
                <a className='input-button' href={`mailto:calvinkim4@gmail.com?cc=${this.state.mail}&subject=${this.state.subject}&body=${this.state.body}`}>Send</a>
                {/* <h2>Email: CalvinKim4@gmail.com</h2>
                <h2>LinkedIn: Linkedin.com/in/calvinkim4</h2> */}
                {/* <form action="mailto:calvinkim4@gmail.com" method="post" enctype="text/plain">
                    <input type="submit" value="Send" />
                </form> */}

            </div>
        )
    }
}

export default Contact;