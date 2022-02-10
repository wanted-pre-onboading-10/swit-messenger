import { createSlice } from '@reduxjs/toolkit';
import dateFunc from '../../utils/getSortedData';

export const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {
    add: (state, { payload }) => {
      const newMsg = {
        id: state.length,
        userId: payload.userId,
        userName: payload.userName,
        profileImage: payload.profileImage,
        content: payload.content,
        date: dateFunc(),
      };
      state.push(newMsg);
    },
    remove: (state, action) => {},
  },
});

export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;

export const select = state => state.message;
