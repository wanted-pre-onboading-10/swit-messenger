import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'redux/slices/user';
import modalReducer from 'redux/slices/modal';
import messageSlice from 'redux/slices/message';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
  message: messageSlice,
});

export default rootReducer;
