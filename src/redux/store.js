import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from 'redux/slices';

const enhancer = process.env.NODE_ENV === 'production' ? [] : [logger];

export const store = configureStore({
  reducer: rootReducer,
  middleware: enhancer,
});
