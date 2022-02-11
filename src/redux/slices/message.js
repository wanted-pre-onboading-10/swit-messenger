import { createSlice } from '@reduxjs/toolkit';

import dateFunc from 'utils/getSortedData';
import formAlertMsg from 'utils/formAlertMsg';
import MEMBERS from 'constants/members';
import CONVERSATION from 'constants/conversation';

//userStore와 합치면 삭제 예정
const USER_ME = MEMBERS[3];
const curUser = {
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
        ...curUser,
        id: state.length,
        date: dateFunc(),
        content: payload.content,
      };
      state.push(newMsg);
    },
    remove: (state, { payload }) => {
      const curId = payload.id;
      state.map((value, idx) => {
        if (curId === value.id) {
          console.log('id와 value.id 비교');
          console.log(curId + 'curId');
          console.log(`${value.id}는 value.id`);
          if (curUser.userId !== value.userId) {
            alert('본인이 작성한 메시지가 아닙니다.');
          } else {
            const curMsg = formAlertMsg(value.content);
            //모달창으로 교체 필요
            alert(curMsg + ' 메시지를 삭제하시겠습니까?');
            state.splice(idx, 1);
          }
        }
      });
    },
  },
});
export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;
