import { routerReducer } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import todo from './reducers/todo';

const reducers = { todo };
/**
 * Create store we our reducers defined above.
 * We include thunk to handle requests and Redux DevTools;
 */
const store = createStore(
  combineReducers({ ...reducers,
    routing: routerReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(
    thunk,
    createLogger()
  )
);

export default store;
