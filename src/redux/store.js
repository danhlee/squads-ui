import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './combinedReducer';

// enhancer allows redux devtools to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(
  applyMiddleware(...[])
);

const store = createStore(rootReducer, enhancer);

export default store;