import { createSlice } from '@reduxjs/toolkit';

import getSortedData from 'utils/getSortedData';
import textLenOverCut from 'utils/textLenOverCut';
import CONVERSATION from 'constants/conversation';

export const messageSlice = createSlice({
  name: 'message',
  initialState: CONVERSATION,
  reducers: {
    add: (state, { payload }) => {
      const newMsg = {
        userId: payload.userId,
        userName: payload.userName,
        profileImage: payload.profileImage,
        id: state.length,
        date: getSortedData(),
        content: payload.content,
      };
      state.push(newMsg);
    },
    remove: (state, { payload }) => {
      const curId = payload.id;
      const curUserId = payload.userId;

      if (curUserId !== payload.cmtUserId) {
        alert('본인이 작성한 메시지가 아닙니다.');
      } else {
        const curMsg = textLenOverCut(payload.content);
        if (confirm(curMsg + ' 메시지를 삭제하시겠습니까?')) {
          state.map((value, idx) => {
            if (value.id === curId) {
              state.splice(idx, 1);
            }
          });
        }
      }
    },
  },
});
export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;
