import * as actionType from '../action-types';

const initialState = {
  counter: 0,
  message: 'React Redux Demo!',
  error: null,
  auth: null,
  users: [],
  loading: false,
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

    // users
    case actionType.GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionType.GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: [],
      };
    case actionType.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
