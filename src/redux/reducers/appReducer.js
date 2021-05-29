import * as actionType from '../action-types';

const initialState = {
  counter: 0,
  message: 'React Redux Demo!',
  error: null,
  auth: null,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Counter
    case actionType.ADD_NUMBER:
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case actionType.SUBTRACT_NUMBER:
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    case actionType.RESET_NUMBER:
      return {
        ...state,
        counter: 0,
      };

    // Auth
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        auth: action.payload,
      };
    case actionType.SET_GUEST_USER:
      return {
        ...state,
        auth: null,
      };
    default:
      return state;
  }
};
