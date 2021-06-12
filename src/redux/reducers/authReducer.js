import * as actionType from '../action-types/auth-types';

const initialState = {
  error: null,
  token: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Auth
    case actionType.SET_AUTH_USER:
      return {
        ...state,
        token: action.payload,
      };
    case actionType.SET_GUEST_USER:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default authReducer;
