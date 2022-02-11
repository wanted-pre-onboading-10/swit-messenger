import { select, add, remove } from 'redux/slice/message';
import { useDispatch, useSelector } from 'react-redux';

function Test() {
  const dispatch = useDispatch();
  const messages = useSelector(select);

  return (
    <div>
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
            }),
          );
        }}>
        메시지 추가 기능
      </button>
    </div>
  );
}

export default Test;
