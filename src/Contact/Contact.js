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
                            <span className='contact-bullet-list'>
                                <br />– Have an idea for a workshop? Let’s get in touch.
                                <br />– Want to develop our website? We’ll set you up.
                                <br />– Feelin’ like partying? Chat with our party crew.<br />
                            </span>
                            Anything is possible, but we need your help.
                        </div>
                    </Col>
                    <Col xs={12}>
                    <Button filled={true} text='Get in touch' />
                    </Col>
                </Row>
            </div>
        );
    }
}

Contact.propTypes = {

};

export default Contact;