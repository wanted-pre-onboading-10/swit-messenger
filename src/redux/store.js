import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from 'redux/slices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger],
});
