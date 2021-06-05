import { INVALID_ACTION } from '../action-types';

export const validationMiddleware = () => (next) => (action) => {
  if (action.type !== INVALID_ACTION) {
    next(action);
  } else {
    console.error('invalid action has been dispatched');
  }
};

export default validationMiddleware;
