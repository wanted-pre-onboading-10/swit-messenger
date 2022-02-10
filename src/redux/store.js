import { configureStore } from '@reduxjs/toolkit';
import messageSlice from 'redux/slice/message';

export const store = configureStore({
  reducer: {
    message: messageSlice,
  },
});
