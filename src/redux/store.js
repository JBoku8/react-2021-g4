import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { autoLoginMiddleware, validationMiddleware } from './middleware';
import rootReducer from './reducers';

const middleware = [thunk, logger, validationMiddleware, autoLoginMiddleware];
const rootStore = createStore(rootReducer, applyMiddleware(...middleware));

export default rootStore;
