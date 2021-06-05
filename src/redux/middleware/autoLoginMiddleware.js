import { AUTH_TOKEN } from '../../utils/constants';
import { AUTO_LOGIN } from '../action-types';
import { setAuthUserAction } from '../actions';

export const autoLoginMiddleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    if (action.type === AUTO_LOGIN) {
      if (localStorage.getItem(AUTH_TOKEN)) {
        const token = JSON.parse(localStorage.getItem(AUTH_TOKEN));
        dispatch(setAuthUserAction(token));
      }
    } else {
      next(action);
    }
  };

export default autoLoginMiddleware;
