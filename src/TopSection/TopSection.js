import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TopSection.css';

class TopSection extends Component {
    render() {
        return (
            <div style={{ height: '95vh', backgroundImage: 'url("assets/img/banner-image.jpg")' }}>
                <div style={{ height: '95vh', backgroundImage: 'linear-gradient(rgba(72, 72, 72, 0.75), rgba(72, 72, 72, 0.75)), radial-gradient(circle at 0 0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))' }}>
                    <img style={{ marginTop: '24px', marginLeft: '16px', width: '158px' }} src='assets/img/light.svg' />
                    <div className='title-wrapper'>
                        <div className='title'>
                            We are
                        </div>
                        <div className='title title-green'>
                            Designers.
                        </div>
                    </div>
                    <div className='banner-description'>
                        Building a community for interaction designers at Aalborg University
                    </div>
                </div>
            </div >
        );
    }
}

TopSection.propTypes = {

};

export default TopSection;