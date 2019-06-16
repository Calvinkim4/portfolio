import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileInvoice } from '@fortawesome/free-solid-svg-icons';

class Header extends Component {
    render() {
        return(
            <div className='header'>
                <h1 className='header-name'>Calvin Kim's Portfolio</h1>
                {/* <div className='img-div'> */}
                {/* <FontAwesomeIcon icon={faFileInvoice} className='header-img'size="6x" />
                <FontAwesomeIcon icon={faLinkedin} className='header-img' size="6x" />
                <FontAwesomeIcon icon={faGithub} className='header-img' size="6x" /> */}
                    {/* <a href='https://github.com/Calvinkim4' target="_blank"><FontAwesomeIcon icon={faFileInvoice} className='header-img'size="3x" /></a> */}
                    {/* <a href='https://www.linkedin.com/in/calvinkim4/' target="_blank"><FontAwesomeIcon icon={faLinkedin} className='header-img' size="3x" /></a> */}
                    {/* <a href='https://docdro.id/E8pF5pB' target="_blank"><FontAwesomeIcon icon={faGithub} className='header-img' size="3x" /></a> */}
                {/* </div> */}
            </div>
        )
    }
}

export default Header;