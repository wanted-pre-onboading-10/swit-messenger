import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MultilineInput from 'components/chat/multiline-input';
import SendIcon from 'assets/icons/SendIcon';
import MenuIcon from 'assets/icons/MenuIcon';

import useMessage from 'hooks/useMessage';
import useMessageAction from 'hooks/useMessageAction';

import replyBoundary from 'constants/replyboundary';
import checkBlankText from 'utils/checkblank';
import { removeLastNewline, textLenOverCut } from 'utils/newline';
import styles from 'components/chat/styles.module.scss';
import SpeechBubble from './speech-bubble';
import logo from 'assets/images/logo.png';

const cx = classNames.bind(styles);

Chat.propTypes = {
  toggle: PropTypes.func.isRequired,
};

function Chat({ toggle }) {
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
    const idx = messages.findIndex(i => i.id == e.currentTarget.value);
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
    <>
      <div className={cx('top-bar')}>
        <MenuIcon onClick={toggle} className={cx('toggle-btn')} />
        <img src={logo} alt="Swit" className={cx('logo')} />
      </div>
      <main className={cx('main')}>
        <div className={cx('chat-box')} ref={chatBoxRef}>
          {messages.map(chat => (
            <SpeechBubble
              key={chat.id}
              chat={chat}
              replyMessage={replyMessage}
            />
          ))}
        </div>

        <div className={cx('input-box')}>
          <MultilineInput
            msg={inputMsg}
            setMsg={setInputMsg}
            enter={sendMessage}
            setReply={setReply}
            readOnly={createReplyForm()}
          />

          <div className={cx('button-container')}>
            <button
              className={cx('submit-button')}
              type="button"
              onClick={sendMessage}>
              <SendIcon />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Chat;
