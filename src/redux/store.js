import { createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import { loggerMiddleware, validationMiddleware } from './middleware';
import { appReducer } from './reducers';

const middleware = [loggerMiddleware, validationMiddleware];
const rootStore = createStore(appReducer, applyMiddleware(...middleware));

export default rootStore;
