import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers';
import posts from './data/posts';
import comments from './data/comments';

const initialState = {
 posts,
 comments,
}

const enhancers = compose(
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(rootReducer, initialState, enhancers);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
 module.hot.accept('./reducers/', () => {
  const nextRootReducer = require('./reducers').default;
  store.replaceReducer(nextRootReducer);
 })
}

export default store;