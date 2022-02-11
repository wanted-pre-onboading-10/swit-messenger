import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from 'components/reply-tag/tag.module.scss';

const cx = classNames.bind(styles);

function ReplyTag({ state, setState }) {
  return (
    <div
      className={cx('box')}
      style={{ transform: `translateY(${state !== -1 ? 0 : 2}rem)` }}>
      <div className={cx('tag')}>답장중...</div>
      <button onClick={() => setState(-1)}>x</button>
    </div>
  );
}

ReplyTag.propTypes = {
  state: PropTypes.number.isRequired,
  setState: PropTypes.func.isRequired,
};

export default ReplyTag;
