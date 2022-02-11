import useMessage from 'hooks/useMessage';
import useMessageAction from 'hooks/useMessageAction';
import useUser from 'hooks/useUser';
import useUserAction from 'hooks/useUserAction';

function Test() {
  const messages = useMessage();
  const { add } = useMessageAction();
  const { remove } = useMessageAction();
  const myLoginData = useUser();
  const { login } = useUserAction();

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

  return (
    <div>
      <div>
        <button
          onClick={() =>
            login({ userId: 6, userName: '태희', profileImage: 'url' })
          }>
          login
        </button>
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
                  remove({
                    id: v.id,
                    cmtUserId: v.userId,
                    content: v.content,
                  });
                }}>
                삭제 버튼
              </button>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          // 리덕스에 정보 넘겨주는 부분 (1개 항목 : content)
          add({
            content: TEST[TEST_CNT],
          });
        }}>
        전송
      </button>
    </div>
  );
}

export default Test;
