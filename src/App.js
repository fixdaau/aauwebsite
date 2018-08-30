import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TopSection from './TopSection/TopSection';
import Events from './Events/Events';
import Instagram from './Instagram/Instagram';
import { facebookAccessToken, instagramAccessToken } from './Utils/accessTokens';
import {Grid} from 'react-bootstrap';
import Footer from './Footer/Footer';
import Contact from './Contact/Contact';

class App extends Component {

  state = {
    coverImageSrc: '',
    facebookEvents: [],
    instagramPosts: []
  }

  componentDidMount() {
    // Getting recent instagram posts
    axios.get(`https://api.instagram.com/v1/users/self/media/recent/?access_token=${instagramAccessToken}`)
      .then(r => this.setState({instagramPosts: r.data.data}))

    // Getting recent facebook events
    axios.get(`https://graph.facebook.com/v3.1/fixdAAU/events?access_token=${facebookAccessToken}`)
      .then(r => this.setState({ facebookEvents: r.data.data }));
  }

  render() {
    const { facebookEvents, instagramPosts } = this.state;
    return (
      <Grid>
        <TopSection />
        <Events events={facebookEvents} />
        <Instagram posts={instagramPosts} />
        <Contact />
        <Footer />
      </Grid>
    );
  }
}

export default App;
