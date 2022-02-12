import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import ReplyIcon from 'assets/icons/ReplyIcon';
import DeleteIcon from 'assets/icons/DeleteIcon';

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

  const author =
    chat.userId === user.userId ? `${chat.userName}*` : chat.userName;

  const className = cx({
    box: true,
    'my-msg': chat.userId === user.userId,
  });

  return (
    <div className={className}>
      <img className={cx('profile-image')} src={chat.profileImage} />

      <div>
        <div>
          <span className={cx('msg-author')}>{author}</span>
          <span className={cx('msg-date')}>{chat.date}</span>
        </div>
        <div className={cx('msg')}>{chat.content}</div>
      </div>

      <div className={cx('msg-buttons')}>
        <button
          className={cx('msg-button')}
          value={chat.id}
          onClick={replyMessage}
          type="button">
          <ReplyIcon />
        </button>

        <button
          className={cx('msg-button')}
          type="button"
          onClick={() => removeMessage(chat.id, chat.userId, chat.content)}>
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
}

export default SpeechBubble;
