import { combineReducers } from '@reduxjs/toolkit';
import userReducer from 'redux/slices/user';

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
