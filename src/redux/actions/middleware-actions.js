import { INVALID_ACTION, AUTO_LOGIN } from '../action-types/middleware-types';

export const invalidAction = () => ({ type: INVALID_ACTION });
export const autoLoginAction = () => ({ type: AUTO_LOGIN });
