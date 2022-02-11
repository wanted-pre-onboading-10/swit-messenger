import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from 'components/multiline-input/input.module.scss';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);

function MultilineInput({ msg, setMsg, enter, readOnly }) {
  const inputRef = useRef();
  const [areaHeight, setAreaHeight] = useState(8);

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

MultilineInput.propTypes = {
  readOnly: PropTypes.string,
  msg: PropTypes.string.isRequired,
  setMsg: PropTypes.func.isRequired,
  enter: PropTypes.func,
};

export default MultilineInput;
