import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { rootReducer } from './reducers';
import { monitorReducersEnhancer } from './enhancers';
import { loggerMiddleware } from './middlewares';

const configureStore = preloadedState => {
  const middlewares = [thunkMiddleware];
  if (process.env.NODE_ENV === 'development') middlewares.push(loggerMiddleware);
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  if (process.env.NODE_ENV === 'development') enhancers.push(monitorReducersEnhancer);
  const composedEnhancers = compose(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
};

export default configureStore;
