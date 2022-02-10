import { createSlice } from '@reduxjs/toolkit';
import dateFunc from 'utils/getSortedData';
import formAlertMsg from 'utils/formAlertMsg';

//userStore와 합치면 삭제 예정
const curUserId = 2;

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
    remove: (state, { payload }) => {
      const curId = payload.id;
      //함수 나중에 따로 지정
      state.map((value, idx) => {
        if (curId === value.id) {
          if (curUserId !== value.userId) {
            alert('본인이 작성한 메시지가 아닙니다.');
          } else {
            const curMsg = formAlertMsg(value.content);
            console.log(curMsg);
            //모달창으로 교체 예정
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

export const select = state => state.message;
