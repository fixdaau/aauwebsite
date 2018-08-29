import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import TopSection from './TopSection/TopSection';
import Events from './Events/Events';
import Instagram from './Instagram/Instagram';
import { facebookAccessToken } from './Utils/accessTokens';

class App extends Component {

  state = {
    coverImageSrc: '',
    facebookEvents: []
  }

  componentDidMount() {
    // Getting recent instagram posts
    // axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=')
    //   .then(r => console.log('Instagram posts:', r.data))

    // Getting recent facebook events
    axios.get(`https://graph.facebook.com/v3.1/fixdAAU/events?access_token=${facebookAccessToken}`)
      .then(r => this.setState({ facebookEvents: r.data.data }));
  }

  render() {
    const { facebookEvents } = this.state;
    return (
      <div>
        <TopSection />
        <Events events={facebookEvents} />
        {/* <Instagram /> */}
      </div>
    );
  }
}

export default App;
