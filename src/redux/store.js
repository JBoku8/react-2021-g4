import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { autoLoginMiddleware, validationMiddleware } from './middleware';
import rootReducer from './reducers';

// logger
const middleware = [thunk, validationMiddleware, autoLoginMiddleware];
const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
