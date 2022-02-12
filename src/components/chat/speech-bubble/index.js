import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Modal from 'components/modal';

import useUser from 'hooks/useUser';
import useMessageAction from 'hooks/useMessageAction';
import ReplyIcon from 'assets/icons/ReplyIcon';
import DeleteIcon from 'assets/icons/DeleteIcon';
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
  const [isModalOpen, setIsModalOpen] = useState({
    alert: false,
    confirm: false,
  });

  const removeMessage = (chatUser, currentUser) => {
    if (chatUser !== currentUser) {
      setIsModalOpen({ ...isModalOpen, alert: true });
    } else {
      setIsModalOpen({ ...isModalOpen, confirm: true });
    }
  };

  const closeModal = () => setIsModalOpen(false);

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
          onClick={() => removeMessage(chat.userId, user.userId)}>
          <DeleteIcon />
        </button>
      </div>
      {isModalOpen.confirm && (
        <Modal
          type="confirm"
          message="정말로 메세지를 삭제하실거에요?"
          callback={() =>
            remove({
              id: chat.id,
              cmtUserId: chat.userId,
              content: chat.content,
            })
          }
          onClose={closeModal}
        />
      )}
      {isModalOpen.alert && (
        <Modal
          message="본인이 작성한 메세지가 아니에요."
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default SpeechBubble;
