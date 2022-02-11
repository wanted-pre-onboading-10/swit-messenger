import { add, remove } from 'redux/slices/message';
import { useDispatch } from 'react-redux';
import useMessage from 'hooks/useMessage';

function Test() {
  const dispatch = useDispatch();
  const messages = useMessage();

  //(임시) 테스트용 삭제 예정
  const TEST = [
    '잘 작동하네요',
    '정말정말정말정말정말정말정말정말정말정말정말정말정말정말정말정말정말정말감사합니다.',
    '최고에요!',
    '굿굿!',
    '열글자열글자열글자열',
    '너무 좋아요!',
    '이런 건 어디서 검색하셨나요?',
    '오늘 끝낼 수 있으면 좋겠네요!',
  ];
  let TEST_CNT = Math.floor(Math.random() * 7);
  {
    console.log(messages);
  }
  return (
    <div>
      <div>
        {messages.map((v, idx) => {
          return (
            <div
              key={idx}
              //임시 스타일, 삭제 예정
              style={{
                border: '1px solid black',
                padding: '20px',
                marginBottom: '20px',
              }}>
              <div>
                {v.userName} {v.date}
              </div>
              <div> {v.content}</div>
              <button
                //임시 스타일, 삭제 예정
                style={{ backgroundColor: '#eee' }}
                onClick={() => {
                  // 리덕스에 정보 넘겨주는 부분 (1개 항목 : 해당 메시지의 id)
                  dispatch(remove({ id: v.id, userId: v.userId }));
                }}>
                삭제 버튼
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          dispatch(
            // 리덕스에 정보 넘겨주는 부분 (1개 항목 : content)
            add({
              content: TEST[TEST_CNT],
            }),
          );
        }}>
        전송
      </button>
    </div>
  );
}

export default Test;
