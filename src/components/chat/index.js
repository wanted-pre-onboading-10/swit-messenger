import { useEffect, useRef, useState } from 'react';
import getDate from 'utils/getdate';
import { checkBlankText, textLenOverCut } from 'utils/text';
import { countNewline, newlineToSpace, removeLastNewline } from 'utils/newline';
import { mock, user } from 'utils/mock';

import classNames from 'classnames/bind';
import styles from 'components/chat/chat.module.scss';

const cx = classNames.bind(styles);

function Chat() {
  const chatBoxRef = useRef();
  const [chatHistory, setChatHistory] = useState([...mock]);
  const [inputMsg, setInputMsg] = useState(''); // input 값

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
          content: removeLastNewline(inputMsg),
          date: getDate(),
        },
      ]);

      setTimeout(() => {
        scrollToBottom();
      }, 50);
    }
    setInputMsg(''); // init
  };

  const commentMessage = e => {
    const idx = getMessageIdx(e.target.value);

    setInputMsg(
      `${chatHistory[idx].userName}\n${chatHistory[idx].content}\n(회신)\n` +
        inputMsg,
    );
  };

  const removeMessage = e => {
    const idx = getMessageIdx(e.target.value);
    const msg = textLenOverCut(newlineToSpace(chatHistory[idx].content));

    if (confirm(`${msg}\n정말 삭제하시겠습니까??`)) {
      const chat = [...chatHistory];

      chat.splice(idx, 1);
      setChatHistory(chat);
    }
  };

  const getInputKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      sendMessage();
    }
  };

  const getInputMessage = e => {
    setInputMsg(e.target.value);
  };

  const getMessageIdx = id => {
    return chatHistory.findIndex(i => i.id == id);
  };

  const scrollToBottom = () => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  useEffect(() => {
    console.log(chatHistory);
  }, [chatHistory]);

  return (
    <div>
      <div className={cx('chat')} ref={chatBoxRef}>
        {chatHistory.map((chat, idx) => (
          <div key={(chat, idx)} className={cx('message')}>
            <img src={chat.profileImage} />
            <div>
              <div>
                {chat.userName}
                {chat.userId === user.userId ? '*' : null} : {chat.date}
              </div>
              <textarea
                value={chat.content}
                readOnly
                style={{
                  height: countNewline(chat.content) * 15,
                }}
              />
            </div>
            <div className={cx('buttonBox')}>
              <button type="button" value={chat.id} onClick={commentMessage}>
                답장
              </button>
              <button type="button" value={chat.id} onClick={removeMessage}>
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className={cx('input')}>
        <textarea
          value={inputMsg}
          onKeyUp={getInputKey}
          onChange={getInputMessage}
        />
        <button type="button" onClick={sendMessage}>
          보내기
        </button>
      </div>
    </div>
  );
}

export default Chat;
