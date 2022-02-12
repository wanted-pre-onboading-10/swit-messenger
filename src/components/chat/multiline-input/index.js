import { useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'components/chat/multiline-input/styles.module.scss';

const cx = classNames.bind(styles);

MultilineInput.propTypes = {
  readOnly: PropTypes.string,
  msg: PropTypes.string.isRequired,
  setMsg: PropTypes.func.isRequired,
  setReply: PropTypes.func.isRequired,
  enter: PropTypes.func,
};

function MultilineInput({ msg, setMsg, enter, setReply, readOnly }) {
  const inputRef = useRef();

  const readOnlyClassName = cx({
    reply: true,
    active: readOnly.length > 0,
  });

  const changeInputKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      enter();
    }
  };

  const changeInputMessage = e => {
    setMsg(e.target.value);
  };

  const deleteReadOnly = () => setReply(-1);

  return (
    <div className={cx('box')}>
      <div className={readOnlyClassName}>
        {readOnly}
        {readOnly && (
          <button
            type="button"
            onClick={deleteReadOnly}
            className={cx('delete-btn')}>
            x
          </button>
        )}
      </div>
      <textarea
        className={cx('input')}
        ref={inputRef}
        onKeyUp={changeInputKey}
        onChange={changeInputMessage}
        value={msg}
        placeholder="메시지를 입력하세요."
      />
    </div>
  );
}

export default MultilineInput;
