import { createSlice } from '@reduxjs/toolkit';
<<<<<<< HEAD
import dateFunc from 'utils/getSortedData';
import formAlertMsg from 'utils/formAlertMsg';

//userStore와 합치면 삭제 예정
//현재 로그인된 user는 2
const curUserId = 2;
=======
import dateFunc from '../../utils/getSortedData';
>>>>>>> parent of bea6820 (add: 글자 축약 기능, 작성자 확인 기능을 포함한 삭제 액션 구현 [#2])

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
<<<<<<< HEAD
    remove: (state, { payload }) => {
      const curId = payload.id;
      //함수로 나중에 따로 지정 (너무 긴듯)
      state.map((value, idx) => {
        if (curId === value.id) {
          if (curUserId !== value.userId) {
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
=======
    remove: (state, action) => {},
>>>>>>> parent of bea6820 (add: 글자 축약 기능, 작성자 확인 기능을 포함한 삭제 액션 구현 [#2])
  },
});

export const { add, remove } = messageSlice.actions;

export default messageSlice.reducer;

export const select = state => state.message;
