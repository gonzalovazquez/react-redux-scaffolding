import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';

// Components:
import App from './App';

/**
 * Root
 * @return {ReactElement} Main App.
 */
const Root = () => (
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
);

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

/**
 * Initial bootstrap
 */
ReactDOM.render(
  <Root />,
  document.getElementById('content')
);
