import { configureStore } from '@reduxjs/toolkit';
import messageSlice from 'redux/slice/message-slice';

export const store = configureStore({
  reducer: {
    counter: messageSlice,
  },
});
