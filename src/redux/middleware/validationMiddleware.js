export const validationMiddleware = () => (next) => (action) => {
  console.group('validationMiddleware');
  if (action.type !== 'INVALID_ACTION') {
    next(action);
  } else {
    console.error('invalid action has been dispatched');
  }
  console.groupEnd();
};

export default validationMiddleware;
