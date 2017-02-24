import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// Vendor libraries
import hello from './vendor/hello.all.js';

// Components:
import App from './App';


// Initalize hello.js
// https://adodson.com/hello.js/
// Passing clientID and scope permissions
hello.init({
  facebook: 'FACEBOOK_CLIENT_ID',
  windows: 'WINDOWS_CLIENT_ID',
  google: 'GOOGLE_CLIENT_ID'
}, {redirect_uri: 'redirect.html'});

const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(
  <Root />,
  document.getElementById('content')
);