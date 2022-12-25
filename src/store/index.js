import { configureStore } from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';

// combinedReducers for each features
import combinedReducer from '@/store/combinedReducers';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload // apply delta from hydration
    };
    return nextState;
  }
  return combinedReducer(state, action);
};

// add reducer to configureStore
export const makeStore = () =>
  configureStore({
    reducer
  });

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: process.env.APP_ENV === 'local' });
