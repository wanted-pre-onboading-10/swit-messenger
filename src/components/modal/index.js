import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Portal from 'components/modal/portal';
import CheckIcon from 'assets/icons/CheckIcon';
import WarningIcon from 'assets/icons/WarningIcon';

import useModalAction from 'hooks/useModalAction';
import styles from 'components/modal/style.module.scss';

const cx = classNames.bind(styles);

Modal.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'confirm']),
  callback: PropTypes.func,
};

function Modal({ message, type = 'alert', callback = () => {} }) {
  const { close } = useModalAction();
  const isAlert = type === 'alert';
  return (
    <Portal>
      <div className={cx('background')}>
        <div className={cx('contents')}>
          {isAlert ? <WarningIcon /> : <CheckIcon />}
          <p className={cx('message')}>{message}</p>
          <div className={cx('button-box')}>
            <button
              className={cx('button-basic', { 'button-dark': isAlert })}
              onClick={close}>
              {CLOSE_WORD}
            </button>
            {!isAlert && (
              <button
                className={cx(['button-basic', 'button-dark'])}
                onClick={() => {
                  callback();
                  close();
                }}>
                {CONFIRM_WORD}
              </button>
            )}
          </div>
        </div>
      </div>
    </Portal>
  );
}

const CLOSE_WORD = '닫기';
const CONFIRM_WORD = '확인';

export default Modal;
