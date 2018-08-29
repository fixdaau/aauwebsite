import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import './Instagram.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Instagram extends Component {
    render() {
        return (
            <Row>
                <Col xs={12}>
                    <div style={{ marginTop: '64px' }} className='instagram-title'>
                        The Best Community
                        </div>
                </Col>
                <Col xs={12}>
                    <div className='instagram-description'>
                        Become a weekly instagrammer and show us what you’re up to!
                        </div>
                </Col>
                <Col xs={12}>
                    <CarouselProvider
                        naturalSlideWidth={100}
                        naturalSlideHeight={125}
                        totalSlides={3}
                    >
                        <Slider>
                            <Slide index={0}><div style={{ border: 'solid red 1px', width: '50%' }}>I am the first Slide.</div></Slide>
                            <Slide index={1}>I am the second Slide.</Slide>
                            <Slide index={2}>I am the third Slide.</Slide>
                        </Slider>
                        <ButtonBack>Back</ButtonBack>
                        <ButtonNext>Next</ButtonNext>
                    </CarouselProvider>
                </Col>
            </Row>
        );
    }
}


Instagram.propTypes = {

};

export default Instagram;