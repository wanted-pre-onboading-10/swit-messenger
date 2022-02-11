import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'redux/slices/user';
import messageSlice from 'redux/slices/message';

const rootReducer = combineReducers({
  user: userReducer,
  message: messageSlice,
});

export default rootReducer;
