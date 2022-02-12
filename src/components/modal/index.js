import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Portal from 'components/modal/portal';
import CheckIcon from 'assets/icons/CheckIcon';
import WarningIcon from 'assets/icons/WarningIcon';

import styles from 'components/modal/styles.module.scss';

const cx = classNames.bind(styles);

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'confirm']),
  callback: PropTypes.func,
  onClose: PropTypes.func.isRequired,
};

function Modal({ onClose, message, type = 'alert', callback = () => {} }) {
  const isAlert = type === 'alert';
  const conditionalButtons = isAlert ? (
    <button
      className={cx(['button-basic', 'button-dark'])}
      onClick={() => {
        callback();
        onClose();
      }}>
      {CLOSE_WORD}
    </button>
  ) : (
    <>
      <button className={cx('button-basic')} onClick={close}>
        {CLOSE_WORD}
      </button>
      <button
        className={cx(['button-basic', 'button-dark'])}
        onClick={() => {
          callback();
          onClose();
        }}>
        {CONFIRM_WORD}
      </button>
    </>
  );
  return (
    <Portal>
      <div className={cx('background')}>
        <div className={cx('contents')}>
          {isAlert ? <WarningIcon /> : <CheckIcon />}
          <p className={cx('message')}>{message}</p>
          <div className={cx('button-box')}>{conditionalButtons}</div>
        </div>
      </div>
    </Portal>
  );
}

const CLOSE_WORD = '닫기';
const CONFIRM_WORD = '확인';

export default Modal;
