import { select, add } from 'redux/slice/message';
import { useDispatch, useSelector } from 'react-redux';

function Test() {
  const dispatch = useDispatch();
  const messages = useSelector(select);
  return (
    <div>
<<<<<<< HEAD
      <div>
        {messages.map((v, idx) => {
          return (
            <div key={idx}>
              <div>메시지 id: {v.id}</div>
              <div>유저 id: {v.userId}</div>
              <div>메시지 내용: {v.content}</div>
              <button
                onClick={() => {
                  // 리덕스에 정보 넘겨주는 부분 (1개 항목 : 해당 메시지의 id)
                  dispatch(
                    remove({
                      //  id: v.id
                    }),
                  );
                }}></button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          // 리덕스에 정보 넘겨주는 부분 (4개 항목)
          dispatch(
            add({
              // content: ""
              // userId: "",
              // profileImage: "",
              // content: "",
=======
      <button
        onClick={() => {
          dispatch(
            add({
              // 리덕스에 정보 넘겨주는 부분
              // userId: 1,
              // userName: 'name 2',
              // profileImage: 'profImg 2',
              // content: 'msg 2',
>>>>>>> parent of bea6820 (add: 글자 축약 기능, 작성자 확인 기능을 포함한 삭제 액션 구현 [#2])
            }),
          );
        }}>
        유저 추가하기
      </button>
      {console.log(messages)}
    </div>
  );
}

export default Test;
