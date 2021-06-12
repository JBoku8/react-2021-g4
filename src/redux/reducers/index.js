import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { counterReducer } from './counterReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  users: usersReducer,
});

export default rootReducer;
