import { select, add, remove } from 'redux/slice/message';
import { useDispatch, useSelector } from 'react-redux';

function Test() {
  const dispatch = useDispatch();
  const messages = useSelector(select);

  return (
    <div>
      <div>
        <h3>현재 로그인된 사람은 userId가 2인 상황</h3>
        {messages.map((v, idx) => {
          return (
            <div
              key={idx}
              style={{ border: '1px solid black' }}
              onClick={() => {
                // 리덕스에 정보 넘겨주는 부분 (1개 항목 : 해당 메시지의 id)
                dispatch(remove({ id: v.id }));
              }}>
              <div>메시지 id: {v.id}</div>
              <div>유저 id: {v.userId}</div>
              <div>메시지 내용: {v.content}</div>
            </div>
          );
        })}
      </div>
      {console.log(typeof Math.floor(Math.random() * 5).toString())}
      <button
        onClick={() => {
          const TEST = dispatch(
            add({
              // 리덕스에 정보 넘겨주는 부분 (4개 항목)
              content: Math.random().toString(),
              userId: Math.floor(Math.random() * 5),
              // profileImage: 'profImg 2',
              // content: 'msg 2',
            }),
          );
        }}>
        메시지 추가 기능
      </button>
    </div>
  );
}

export default Test;
