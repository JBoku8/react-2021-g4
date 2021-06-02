export const loggerMiddleware = (store) => (next) => (action) => {
  console.group('loggerMiddleware');
  console.log('PREV STATE', store.getState());
  console.log('ACTION', action);
  next(action);
  console.log('NEXT STATE', store.getState());
  console.groupEnd();
};

export default loggerMiddleware;
