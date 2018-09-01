import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Event.css';
import moment from 'moment';
import axios from 'axios';
import { facebookAccessToken } from '../Utils/accessTokens';

class Event extends Component {

    state = {
        coverImageSrc: ''
    }

    componentDidMount() {
        const { event } = this.props;
        axios.get(`https://graph.facebook.com/v3.1/${event.id}?fields=cover&access_token=${facebookAccessToken}`)
            .then(r => this.setState({ coverImageSrc: r.data.cover.source }))
    }

    render() {
        const { event } = this.props;
        const { coverImageSrc } = this.state;
        return (
            <a href={`https://www.facebook.com/events/${event.id}`}>
                <div className='event'>
                    <img className='event-image' src={coverImageSrc}></img>
                    <div className='event-title'>
                        {event.name}
                    </div>
                    <div className='desc-wrapper'>
                        <img className='icon' src='assets/img/location.svg' />
                        <span className='desc-text'>{event.place.name}</span>
                    </div>
                    <div>
                        <img className='icon' src='assets/img/calendar.svg' />
                        <span className='desc-text'>{moment(event.start_time).format('lll')}</span>
                    </div>
                </div>
            </a>
        );
    }
}

Event.propTypes = {

};

export default Event;