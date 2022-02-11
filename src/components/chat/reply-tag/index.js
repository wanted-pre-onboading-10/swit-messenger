import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'components/chat/reply-tag/styles.module.scss';

const cx = classNames.bind(styles);

ReplyTag.propTypes = {
  reply: PropTypes.number.isRequired,
  setReply: PropTypes.func.isRequired,
};

function ReplyTag({ reply, setReply }) {
  return (
    <div
      className={cx('box')}
      style={{ transform: `translateY(${reply !== -1 ? 0 : 2}rem)` }}>
      <div className={cx('tag')}>답장중...</div>
      <button onClick={() => setReply(-1)}>x</button>
    </div>
  );
}

export default ReplyTag;
