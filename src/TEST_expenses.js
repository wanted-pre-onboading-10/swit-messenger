import { select, add } from 'redux/slice/message';
import { useDispatch, useSelector } from 'react-redux';

function Test() {
  const dispatch = useDispatch();
  const messages = useSelector(select);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(
            add({
              // 리덕스에 정보 넘겨주는 부분
              // userId: 1,
              // userName: 'name 2',
              // profileImage: 'profImg 2',
              // content: 'msg 2',
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
