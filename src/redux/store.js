import { configureStore } from '@reduxjs/toolkit';
import messageSlice from 'redux/slice/message';
import logger from 'redux-logger';
import rootReducer from 'redux/slices';

const enhancer = process.env.NODE_ENV === 'production' ? [] : [logger];

export const store = configureStore({
  reducer: {
    message: messageSlice,
  },
  middleware: enhancer,
});
