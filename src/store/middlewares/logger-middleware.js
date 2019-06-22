export const loggerMiddleware = store => next => action => {
  console.group(action.type);
  console.info('[LOGGER MIDDLEWARE] dispatching', action);
  const result = next(action);
  console.log('[LOGGER MIDDLEWARE] next state', store.getState());
  console.groupEnd();
  return result;
};

export default loggerMiddleware;
