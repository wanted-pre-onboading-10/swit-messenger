import { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import MultilineInput from 'components/chat/multiline-input';
import ReplyTag from 'components/chat/reply-tag';

import useMessage from 'hooks/useMessage';
import useMessageAction from 'hooks/useMessageAction';

import replyBoundary from 'constants/replyboundary';
import checkBlankText from 'utils/checkblank';
import { removeLastNewline, textLenOverCut } from 'utils/newline';
import styles from 'components/chat/styles.module.scss';
import SpeechBubble from './speech-bubble';

const cx = classNames.bind(styles);

function Chat() {
  const chatBoxRef = useRef();
  const [inputMsg, setInputMsg] = useState(''); // input 값
  const [reply, setReply] = useState(-1);

  const messages = useMessage();
  const { add } = useMessageAction();

  const preprocessingInputMsg = str => {
    if (reply === -1) return removeLastNewline(str);
    else {
      const checkBoundary = messages[reply].content.split(replyBoundary)[1];

      return (
        `${messages[reply].userName}님에게 답장\n` +
        `${
          checkBoundary
            ? textLenOverCut(checkBoundary)
            : textLenOverCut(messages[reply].content)
        }\n` +
        `${replyBoundary}` +
        removeLastNewline(str)
      );
    }
  };

  const sendMessage = () => {
    if (checkBlankText(inputMsg)) {
      add({ content: preprocessingInputMsg(inputMsg) });
      setReply(-1);

      setTimeout(() => {
        chatBoxScrollToBottom();
      }, 50);
    }
    setInputMsg('');
  };

  const replyMessage = e => {
    const idx = messages.findIndex(i => i.id == e.target.value);

    setReply(idx);
  };

  const chatBoxScrollToBottom = () => {
    chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
  };

  const createReplyForm = () => {
    if (reply === -1) return '';
    return `${messages[reply].userName}\n${messages[reply].content}\n(회신)\n`;
  };

  return (
    <div>
      <div className={cx('chat-box')} ref={chatBoxRef}>
        {messages.map((chat, idx) => (
          <SpeechBubble
            key={(chat, idx)}
            chat={chat}
            replyMessage={replyMessage}
          />
        ))}
      </div>
      <ReplyTag reply={reply} setReply={setReply} />

      <div className={cx('input-box')}>
        <MultilineInput
          msg={inputMsg}
          setMsg={setInputMsg}
          enter={sendMessage}
          readOnly={createReplyForm()}
        />
        <button type="button" onClick={sendMessage}>
          보내기
        </button>
      </div>
    </div>
  );
}

export default Chat;
