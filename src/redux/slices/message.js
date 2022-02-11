import { createSlice } from '@reduxjs/toolkit';

import getSortedData from 'utils/getSortedData';
import textLenOverCut from 'utils/textLenOverCut';
import CONVERSATION from 'constants/conversation';
import MEMBERS from 'constants/members';
import useUser from 'hooks/useUser';

const USER_ME = MEMBERS[3];
const myData = {
  userId: USER_ME.userId,
  userName: USER_ME.userName,
  profileImage: USER_ME.profileImage,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState: CONVERSATION,
  reducers: {
    add: (state, { payload }) => {
      const newMsg = {
        ...myData,
        id: state.length,
        date: getSortedData(),
        content: payload.content,
      };
      state.push(newMsg);
    },
    remove: (state, { payload }) => {
      const curId = payload.id;
      const curUserId = payload.userId;
      if (curUserId !== myData.userId) {
        alert('본인이 작성한 메시지가 아닙니다.');
      } else {
        state.map((value, idx) => {
          if (value.id === curId) {
            const curMsg = textLenOverCut(value.content);
            if (confirm(curMsg + ' 메시지를 삭제하시겠습니까?'))
              state.splice(idx, 1);
          }
        });
      }
    },
  },
});
export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;
