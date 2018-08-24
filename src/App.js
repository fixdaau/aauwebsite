import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    coverImageSrc: ''
  }

  componentDidMount() {
    const accesToken = 'EAAKR1E2dWecBAP4rJxYR72QHxCwGjspOCMVMrOW0ejP9Ky0zqE6VuZBygOJ9qS4gaG4lPCkQJSdgI2IXuQlOnbWaoEEsj9ZBgz2D6vSQiNVhNZAo7iiA6ZBOwRiB1ZBPcPfwpYzZBX4pvqzhymjZC6S0mJkYUsiPitPAleDurP7NAZDZD';

    // Getting recent instagram posts
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7031945715.1677ed0.4734f22aadd84f5c886973c97a1f390f')
      .then(r => console.log('Instagram posts:', r.data))

    // Getting recent facebook events
    axios.get(`https://graph.facebook.com/v3.1/fixdAAU/events?access_token=${accesToken}`)
      .then(r => console.log('Facebook Events:', r.data))

    const eventId = '715786755423457';

    // Getting one facebook event
    axios.get(`https://graph.facebook.com/v3.1/${eventId}?access_token=${accesToken}`)
      .then(r => console.log('Facebook event:', r.data))

    // Getting the source of a facebook event cover image
    axios.get(`https://graph.facebook.com/v3.1/${eventId}?fields=cover&access_token=${accesToken}`)
      .then(r => {
        console.log('Facebook event cover:', r.data);
        this.setState({ coverImageSrc: r.data.cover.source })
      })
  }

  render() {
    return (
      <div>
        Implement react components here
      </div>
    );
  }
}

export default App;
