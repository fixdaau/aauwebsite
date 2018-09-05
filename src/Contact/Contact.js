import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

import { Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';

class Contact extends Component {
    render() {
        return (
            <div className='contact-wrapper'>
                <Row>
                    <Col xs={12}>
                        <div style={{ marginTop: '64px' }} className='contact-title'>
                            Want to become a FixD’er
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className='contact-description'>
                            You can contribute with all sorts of things:
                            <div className='contact-bullet'>
                                <img style={{ width: '16px' }} src='assets/img/workshop.svg' /> Have an idea for a workshop? Let’s get in touch.
                                </div>
                            <div className='contact-bullet'>
                                <img style={{ width: '16px' }} src='assets/img/develop.svg' /> Want to develop our website? We’ll set you up.
                            </div>
                            <div className='contact-bullet'>
                                <img style={{ width: '16px' }} src='assets/img/party.svg' /> Feelin’ like partying? Chat with our party crew.<br />
                            </div>
                            <div style={{marginTop: '10px'}}>Anything is possible, but we need your help.</div>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <a href='mailto:fixdaau@gmail.com'><img src='assets/img/mail.svg' /></a>
                    </Col>
                    <Col xs={3}>
                        <a href='https://www.facebook.com/pg/fixdAAU/'><img src='assets/img/facebook-1.svg' /></a>
                    </Col>
                    <Col xs={3}>
                        <a href='https://fixd-aau.slack.com/join/shared_invite/enQtMzIxNzA1MDk2OTY0LWEwMGVmZjZkODM0NTM5ZmIyZGZhN2NjZDhjM2U3ZDExM2NmYzc4YWM2M2NkM2ExYjRlYjhhMTRiMDBlZTFkOWQ'><img src='assets/img/slack.svg' /></a>
                    </Col>
                    <Col xs={3}>
                        <a href='https://www.instagram.com/fixd_aau/'><img src='assets/img/instagram-1.svg' /></a>
                    </Col>
                </Row>
            </div >
        );
    }
}

Contact.propTypes = {

};

export default Contact;