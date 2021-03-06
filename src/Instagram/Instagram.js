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
                            naturalSlideHeight={115}
                            totalSlides={3}
                            lockOnWindowScroll={true}
                        >
                            <ButtonBack className='carousel-button'><img src='assets/img/left-arrow.svg' /></ButtonBack>
                            <ButtonNext className='carousel-button carousel-next-button'><img src='assets/img/right-arrow.svg' /></ButtonNext>
                            <Slider>
                                {slicedPosts.map((p, i) =>
                                    <Slide index={i} key={p.id} className='slide-style' onFocus={(e) => console.log(e)}>
                                        <InstagramCard post={p} />
                                    </Slide>
                                )}
                            </Slider>

                        </CarouselProvider>
                    </Col>
                    {/* <Col xs={12}>
                        <Button text='View this post' imgSrc='assets/img/instagram-green.svg' filled={false} redirectUrl='https://www.instagram.com/fixd_aau/' />
                    </Col> */}
                    <Col xs={12}>
                        {/* <div style={{ marginTop: '20px' }} /> */}
                        <Button text='Show all posts' imgSrc='assets/img/instagram.svg' filled={true} redirectUrl='https://www.instagram.com/fixd_aau/' />
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
            <a href={post.link}><img className='open-post' src='assets/img/open-post.svg' /></a>
        </div>
        <div className='instagram-card-image'>
            <img src={post.images.standard_resolution.url} />
        </div>
        {/* <div className='instagram-card-description'>
            {post.caption.text}
        </div> */}
    </div>
);

Instagram.propTypes = {

};

export default Instagram;