import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'redux/slices/user';
import modalReducer from 'redux/slices/modal';

const rootReducer = combineReducers({
  user: userReducer,
  modal: modalReducer,
});

export default rootReducer;
