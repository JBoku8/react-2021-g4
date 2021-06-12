import * as actionType from '../action-types/common-types';

const initialState = {
  value: 0,
  error: null,
  message: 'React Redux Demo!',
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    //   Counter
    case actionType.ADD_NUMBER:
      return {
        ...state,
        value: state.value + action.payload,
      };
    case actionType.SUBTRACT_NUMBER:
      return {
        ...state,
        value: state.value - action.payload,
      };
    case actionType.RESET_NUMBER:
      return {
        ...state,
        value: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
