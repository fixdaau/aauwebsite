import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Events.css';
import Event from '../Event/Event';
import { Grid, Row, Col } from 'react-bootstrap'
import Button from '../Button/Button';
import moment from 'moment';

class Events extends Component {
    
    mapEvents = events =>  events.filter(e => moment().diff(e.start_time, 'days') < 1).slice(0, 4);

    render() {
        const { events } = this.props;
        const mappedEvents = this.mapEvents(events);

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
                            Upcoming events that you do not want to miss:
                        </div>
                    </Col>
                    {mappedEvents.map(e =>
                        <Col key={e.id} xs={6}>
                            <Event event={e} />
                        </Col>
                    )}
                    <Col xs={12}>
                        <Button text='Go to all events' imgSrc='assets/img/facebook.svg' filled={true} redirectUrl='https://www.facebook.com/pg/fixdAAU/events/' />
                    </Col>
                </Row>
            </div>
        );
    }
}

Events.propTypes = {

};

export default Events;