import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=7031945715.1677ed0.4734f22aadd84f5c886973c97a1f390f')
    .then(r => console.log(r.data))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to FixD</h1>
        </header>
        <div style={{ textAlign: 'center' }}>
          <h2>Facebook API</h2>
          <img style={{maxWidth: '200px'}} src='https://scontent-arn2-1.xx.fbcdn.net/v/t31.0-8/27912479_2075157379397330_4148321063880667925_o.jpg?_nc_cat=0&oh=aca2099db4ccb6daa53832de81a69df7&oe=5C37A3F5' />
          <div>
            <div id="fb-root"></div>
            <script>
              {(function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/da_DK/sdk.js#xfbml=1&version=v3.1';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'))};
              </script>

            <div className="fb-page" data-href="https://www.facebook.com/fixdAAU/" data-tabs="timeline,events" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/fixdAAU/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/fixdAAU/">Studerende på Interaktionsdesign AAU - FixD</a></blockquote></div>
          </div>
          <h2>Instagram API</h2>
          <div>
            <blockquote
              className="instagram-media"
              data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/BmLmVu8geH0/?utm_source=ig_embed"
              data-instgrm-version="9"
              style={
                {
                  background: '#FFF',
                  border: '0',
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: ' 1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: '0',
                  width: '99.375%',
                  width: '-webkit - calc(100 % - 2px)',
                  width: 'calc(100 % - 2px)'
                }}>
              <div style={{ padding: '8px' }}>
                <div style={
                  {
                    background: '#F8F8F8',
                    lineHeight: '+',
                    marginTop: '40px',
                    padding: '37.4537037037037 % 0',
                    textAlign: 'center',
                    width: '100%'
                  }}>
                  <div style={
                    {
                      background: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC)',
                      display: 'block',
                      height: '44px',
                      margin: '0 auto -44px',
                      position: 'relative',
                      top: '-22px',
                      width: '44px'
                    }}>
                  </div>
                </div>
                <p style={
                  {
                    margin: '8px 0 0 0',
                    padding: '0 4px'
                  }}>
                  <a
                    href="https://www.instagram.com/p/BmLmVu8geH0/?utm_source=ig_embed"
                    style={{
                      color: '#000',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      lineHeight: '17px',
                      textDecoration: 'none',
                      wordWrap: 'break-word',
                    }}
                    target="_blank">
                    Så er bestyrelsen igang med at planlægge et fedt efterår for jer alle! Der er åbent møde for jer alle den 27/8, hvor I kan komme med jeres input ✌🏼📝🎉 #FixD #Ixd #aau
                    </a>
                </p>
                <p style={{
                  color: '#c9c8cd',
                  fontFamily: 'Arial,sans-serif',
                  fontSize: '14px',
                  lineHeight: '17px',
                  marginBottom: '0',
                  marginTop: '8px',
                  overflow: 'hidden',
                  padding: '8px 0 7px',
                  textAlign: 'center',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap'
                }}>Et opslag delt af
                <a
                    href="https://www.instagram.com/fixd_aau/?utm_source=ig_embed"
                    style={{
                      color: '#c9c8cd',
                      fontFamily: 'Arial,sans-serif',
                      fontSize: '14px',
                      fontStyle: 'normal',
                      fontWeight: 'normal',
                      lineHeight: '17px'
                    }}
                    target="_blank">
                    FixD
                    </a>
                  (@fixd_aau) den
                    <time style={{
                    fontFamily: 'Arial,sans-serif',
                    fontSize: '14px',
                    lineHeight: '17px'
                  }}
                    dateTime="2018-08-07T14:35:53+00:00">
                    7. Aug, 2018 kl. 7.35 PDT
                    </time>
                </p>
              </div>
            </blockquote>
            <script async defer src="//www.instagram.com/embed.js"></script>
          </div>
        </div >
      </div >
    );
  }
}

export default App;
