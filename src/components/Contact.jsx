import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div>
                <h1>Contact</h1>
                {/* <form action method="post" enctype="text/plain">
                    <input type="text" name="name" />
                    <input type="text" name="mail" />
                    <input type="text" name="comment" size="50" />
                    <input type="submit" value="Send" />
                </form> */}
                {/* <h2>Email: CalvinKim4@gmail.com</h2>
                <h2>LinkedIn: Linkedin.com/in/calvinkim4</h2> */}
                <form action="mailto:calvinkim4@gmail.com" method="post" enctype="text/plain">
                    <input type="submit" value="Send" />
                </form>

            </div>
        )
    }
}

export default Contact;