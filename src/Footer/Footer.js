import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <img src='assets/img/fix-d.svg' className='footer-image' /><span className='footer-text'>© Interaction Design Students at AAU</span>
            </div>
        );
    }
}

Footer.propTypes = {

};

export default Footer;