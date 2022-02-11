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
import replyBoundary from 'utils/constant';

const cx = classNames.bind(styles);

function Chat() {
  const chatBoxRef = useRef();
  const [chatHistory, setChatHistory] = useState([...mock]);
  const [inputMsg, setInputMsg] = useState(''); // input 값
  const [reply, setReply] = useState(-1);

  const preprocessingInputMsg = str => {
    if (reply === -1) return removeLastNewline(str);
    else {
      const checkBoundary = chatHistory[reply].content.split(replyBoundary)[1];

      return (
        `${chatHistory[reply].userName}님에게 답장\n` +
        `${
          checkBoundary
            ? textLenOverCut(checkBoundary)
            : textLenOverCut(chatHistory[reply].content)
        }\n` +
        `${replyBoundary}` +
        removeLastNewline(str)
      );
    }
  };

  const sendMessage = () => {
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
    setInputMsg('');
  };

  const getMessageIdx = id => {
    return chatHistory.findIndex(i => i.id == id);
  };

  const commentMessage = e => {
    const idx = getMessageIdx(e.target.value);

    setReply(idx);
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

  const chatBoxScrollToBottom = () => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  const createReplyFrom = () => {
    if (reply === -1) return '';
    return `${chatHistory[reply].userName}\n${chatHistory[reply].content}\n(회신)\n`;
  };

  return (
    <div>
      <div className={cx('chatBox')} ref={chatBoxRef}>
        {chatHistory.map((chat, idx) => (
          <div key={(chat, idx)} className={cx('speechBubble')}>
            {/** 이부분 speech bubble로 뺄 부분입니다~ */}
            <img src={chat.profileImage} />
            <div className={cx('content')}>
              <div>
                {chat.userName}
                {chat.userId === user.userId ? '*' : null} : {chat.date}
              </div>
              <div className={cx('msg')}>{chat.content}</div>
            </div>
            <div className={cx('rightBox')}>
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

      <div className={cx('inputBox')}>
        <MultilineInput
          msg={inputMsg}
          setMsg={setInputMsg}
          enter={sendMessage}
          readOnly={createReplyFrom()}
        />
        <button type="button" onClick={sendMessage}>
          보내기
        </button>
      </div>
    </div>
  );
}

export default Chat;
