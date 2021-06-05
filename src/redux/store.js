import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { autoLoginMiddleware, validationMiddleware } from './middleware';
import { appReducer } from './reducers';

const middleware = [thunk, logger, validationMiddleware, autoLoginMiddleware];
const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
