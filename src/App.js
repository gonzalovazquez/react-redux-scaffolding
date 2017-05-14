import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

// STORE
import store from './store';

// Components
import Container from './components/Container/Container';
import Todo from './components/Todo/Todo';

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

const style = {
  main: {
    marginTop: '5vh',
    display: 'flex',
    flexDirection: 'column',
    flex: '1 0 auto',
    width: '90%',
  },
};

/**
 * Main Component that declares routing for application.
 * @return {ReactElement}
 */
const App = () => (
  <Provider store={store}>
    <app style={styles.main}>
      <Router history={history}>
        <Route path="/" component={Container}>
          <IndexRoute component={Todo} />
        </Route>
      </Router>
    </app>
  </Provider>
);

export default App;
