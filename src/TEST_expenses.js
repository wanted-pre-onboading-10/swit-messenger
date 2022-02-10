import { testCounter, selectCount } from 'redux/slice/message-slice';
import { useDispatch, useSelector } from 'react-redux';

function Test() {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(testCounter(1));
        }}>
        테스트 증가 버튼
      </button>
      {count}
    </div>
  );
}

export default Test;
