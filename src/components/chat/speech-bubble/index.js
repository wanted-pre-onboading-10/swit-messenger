import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import CommonBtn from '../common-btn';

import useUser from 'hooks/useUser';
import useMessageAction from 'hooks/useMessageAction';
import styles from 'components/chat/speech-bubble/styles.module.scss';

const cx = classNames.bind(styles);

SpeechBubble.propTypes = {
  chat: PropTypes.shape({
    id: PropTypes.number,
    userId: PropTypes.number,
    userName: PropTypes.string,
    content: PropTypes.string,
    profileImage: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
  replyMessage: PropTypes.func,
};

function SpeechBubble({ chat, replyMessage }) {
  const user = useUser();
  const { remove } = useMessageAction();

  const removeMessage = (id, cmtUserId, content) => {
    remove({
      id: id,
      cmtUserId: cmtUserId,
      content: content,
    });
  };

  return (
    <div className={cx('box')}>
      <img src={chat.profileImage} />
      <div className={cx('content')}>
        <div>
          {chat.userName}
          {chat.userId === user.userId ? '*' : null} : {chat.date}
        </div>
        <div className={cx('msg')}>{chat.content}</div>
      </div>
      <div className={cx('right-box')}>
        <CommonBtn value={chat.id} onClick={replyMessage}>
          답장
        </CommonBtn>
        <CommonBtn
          onClick={() => removeMessage(chat.id, chat.userId, chat.content)}>
          삭제
        </CommonBtn>
      </div>
    </div>
  );
}

export default SpeechBubble;
