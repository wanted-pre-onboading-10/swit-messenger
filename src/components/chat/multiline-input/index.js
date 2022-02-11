import { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'components/chat/multiline-input/styles.module.scss';

const cx = classNames.bind(styles);

MultilineInput.propTypes = {
  readOnly: PropTypes.string,
  msg: PropTypes.string.isRequired,
  setMsg: PropTypes.func.isRequired,
  enter: PropTypes.func,
};

function MultilineInput({ msg, setMsg, enter, readOnly }) {
  const inputRef = useRef();
  const [areaHeight, setAreaHeight] = useState(5);

  const changeAreaHeight = () => {
    setAreaHeight(inputRef.current.scrollHeight * 0.1);
  };

  const changeInputKey = e => {
    if (e.key === 'Enter' && !e.shiftKey) {
      enter();
      setAreaHeight(8);
    }
  };

  const changeInputMessage = e => {
    setMsg(e.target.value);
    changeAreaHeight();
  };

  return (
    <div className={cx('box')}>
      <div className={cx('reply')}>{readOnly}</div>
      <textarea
        className={cx('input')}
        ref={inputRef}
        onKeyUp={changeInputKey}
        onChange={changeInputMessage}
        value={msg}
        style={{ height: `${areaHeight}rem` }}
      />
    </div>
  );
}

export default MultilineInput;
