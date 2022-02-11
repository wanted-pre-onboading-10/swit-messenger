import { useRef, useState } from 'react';
import getDate from 'utils/getdate';
import checkBlankText from 'utils/checkblank';
import { removeLastNewline, textLenOverCut } from 'utils/newline';
import { mock, user } from 'utils/mock';

import classNames from 'classnames/bind';
import styles from 'components/chat/chat.module.scss';

import CommonBtn from 'components/common-btn';
import MultilineInput from 'components/multiline-input';
import ReplyTag from 'components/reply-tag';

const cx = classNames.bind(styles);

function Chat() {
  const chatBoxRef = useRef();
  const [chatHistory, setChatHistory] = useState([...mock]);
  const [inputMsg, setInputMsg] = useState(''); // input 값
  const [reply, setReply] = useState(-1);

  const preprocessingInputMsg = str => {
    if (reply === -1) return removeLastNewline(str);
    else {
      return (
        `| ${chatHistory[reply].userName}님에게 답장\n` +
        `| ${textLenOverCut(chatHistory[reply].content)}\n` +
        removeLastNewline(str)
      );
    }
  };

  const sendMessage = () => {
    // 공백, 개행문제만 있는 경우 False
    if (checkBlankText(inputMsg)) {
      setChatHistory([
        ...chatHistory,
        {
          id: chatHistory[chatHistory.length - 1].id + 1,
          userId: user.userId,
          userName: user.userName,
          profileImage: user.profileImage,
          content: preprocessingInputMsg(inputMsg),
          date: getDate(),
        },
      ]);
      setReply(-1);
      setTimeout(() => {
        chatBoxScrollToBottom();
      }, 50);
    }
    setInputMsg(''); // init
  };

  const commentMessage = e => {
    const idx = getMessageIdx(e.target.value);

    setReply(idx);
  };

  const comment = idx => {
    return `${chatHistory[idx].userName}\n${chatHistory[idx].content}\n(회신)\n`;
  };

  const removeMessage = e => {
    const idx = getMessageIdx(e.target.value);
    const msg = textLenOverCut(chatHistory[idx].content);

    if (confirm(`${msg}\n정말 삭제하시겠습니까??`)) {
      const chat = [...chatHistory];

      chat.splice(idx, 1);
      setChatHistory(chat);
    }
  };

  const getMessageIdx = id => {
    return chatHistory.findIndex(i => i.id == id);
  };

  const chatBoxScrollToBottom = () => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  return (
    <div>
      <div className={cx('chat')} ref={chatBoxRef}>
        {/** 이부분 speech bubble로 빼 */}
        {chatHistory.map((chat, idx) => (
          <div key={(chat, idx)} className={cx('message')}>
            <img src={chat.profileImage} />
            <div>
              <div>
                {chat.userName}
                {chat.userId === user.userId ? '*' : null} : {chat.date}
              </div>
              <div className={cx('msg')}>{chat.content}</div>
            </div>
            <div className={cx('buttonBox')}>
              <CommonBtn value={chat.id} onClick={commentMessage}>
                답장
              </CommonBtn>
              <CommonBtn value={chat.id} onClick={removeMessage}>
                삭제
              </CommonBtn>
            </div>
          </div>
        ))}
      </div>
      <ReplyTag state={reply} setState={setReply} />
      {/** 이부분 input box로 빼 */}
      <div className={cx('footer')}>
        <div className={cx('input')}>
          <div className={cx('reply')}>
            {reply !== -1 ? comment(reply) : null}
          </div>
          <MultilineInput
            msg={inputMsg}
            setMsg={setInputMsg}
            enter={sendMessage}
          />
        </div>
        <button type="button" onClick={sendMessage}>
          보내기
        </button>
      </div>
    </div>
  );
}

export default Chat;
