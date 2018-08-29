import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Events.css';
import Event from '../Event/Event';
import { Row, Col } from 'react-bootstrap'
import Button from '../Button/Button';

class Events extends Component {
    render() {
        const { events } = this.props;
        const sliceEvents = events.slice(0, 4)
        return (
            <div className='event-card'>
                <Row>
                    <Col xs={12}>
                        <div className='event-card-title'>
                            The Coolest Events
                        </div>
                    </Col>
                    <Col xs={12}>
                        <div className='event-card-description'>
                            The events that you do not want to miss
                        </div>
                    </Col>
                    {sliceEvents.map(e =>
                        <Col key={e.id} xs={6}>
                            <Event event={e} />
                        </Col>
                    )}
                    <Col xs={12}>
                        <Button text='Go to all events' filled={false} redirectUrl='https://www.facebook.com/pg/fixdAAU/events/' />
                    </Col>
                </Row>
            </div>
        );
    }
}

Events.propTypes = {

};

export default Events;