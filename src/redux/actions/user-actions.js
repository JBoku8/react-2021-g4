import { getUsers } from '../../services/faker';
import {
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
} from '../action-types/user-types';

export const getUsersRequestAction = () => ({ type: GET_USERS_REQUEST });
export const getUsersSuccessAction = (payload) => ({
  type: GET_USERS_SUCCESS,
  payload,
});
export const getUsersFailureAction = (payload) => ({
  type: GET_USERS_FAILURE,
  payload,
});

export const getUsersActionAsync = (amount, gender) => async (dispatch) => {
  try {
    dispatch(getUsersRequestAction());
    const users = await getUsers(amount, gender);
    dispatch(getUsersSuccessAction(users));
  } catch (error) {
    dispatch(getUsersFailureAction(error));
  }
};
