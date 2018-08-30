import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import './Instagram.css';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class Instagram extends Component {
    render() {
        const { posts } = this.props;
        const slicedPosts = posts.slice(0, 3);
        console.log(slicedPosts);
        return (
            <div className='instagram-wrapper'>
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
                            naturalSlideHeight={170}
                            totalSlides={3}
                        >
                            <Slider>
                                {slicedPosts.map((p, i) =>
                                    <Slide index={i} key={p.id} className='slide-style'>
                                        <InstagramCard post={p} />
                                    </Slide>
                                )}

                            </Slider>
                            {/* <ButtonBack>Back</ButtonBack>
                            <ButtonNext>Next</ButtonNext> */}
                        </CarouselProvider>
                    </Col>
                    <Col xs={12}>
                        <Button text='Show all posts' filled={false} redirectUrl='https://www.instagram.com/fixd_aau/' />
                    </Col>
                </Row>
            </div>
        );
    }
}

const InstagramCard = ({ post }) => (
    <div className='instagram-card'>
        <div className='instagram-card-header'>
            <img className='instagram-card-header-image' src='assets/img/insta_profile.jpg' />
            <span className='instagram-card-title'>fixd_aau</span>
        </div>
        <div className='instagram-card-image'>
            <img src={post.images.standard_resolution.url} />
        </div>
        <div className='instagram-card-description'>
            {post.caption.text}
        </div>
    </div>
)

Instagram.propTypes = {

};

export default Instagram;