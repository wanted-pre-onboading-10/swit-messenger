import { createSlice } from '@reduxjs/toolkit';

export const messageSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    testCounter: (state, action) => {
      state.value += action.payload;
    },
    addNewMessage: (state, action) => {
      state.value += action.payload;
    },
    deleteCurMessage: (state, action) => {
      [...state.value, action.payload];
    },
  },
});

export const { testCounter, addNewMessage, deleteCurMessage } =
  messageSlice.actions;

export default messageSlice.reducer;

export const selectCount = state => state.counter.value;
