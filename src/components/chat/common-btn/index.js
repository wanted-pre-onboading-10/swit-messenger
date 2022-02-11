import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'components/chat/common-btn/styles.module.scss';

const cx = classNames.bind(styles);

CommonBtn.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

function CommonBtn({ children, value, onClick }) {
  return (
    <button className={cx('btn')} type="button" value={value} onClick={onClick}>
      {children}
    </button>
  );
}

export default CommonBtn;
