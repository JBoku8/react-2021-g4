import * as actionType from '../action-types';

const initialState = {
  error: null,
  data: [],
  loading: false,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
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
        data: [],
      };
    case actionType.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
