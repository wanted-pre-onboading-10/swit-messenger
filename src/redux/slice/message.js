import { createSlice } from '@reduxjs/toolkit';
import dateFunc from './dateFunc';

export const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    add: (state, action) => {
      const newMsg = {
        id: state.length,
        userId: action.payload.userId,
        userName: action.payload.userName,
        profileImage: action.payload.profileImage,
        content: action.payload.content,
        date: dateFunc(),
      };
      state.push(newMsg);
    },
  },
});

export const { add } = messageSlice.actions;

export default messageSlice.reducer;

export const select = state => state.message;
