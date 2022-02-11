import PropTypes from 'prop-types';

import classNames from 'classnames/bind';
import styles from 'components/common-btn/btn.module.scss';

const cx = classNames.bind(styles);

function CommonBtn({ children, value, onClick }) {
  return (
    <button className={cx('btn')} type="button" value={value} onClick={onClick}>
      {children}
    </button>
  );
}

CommonBtn.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.number,
  onClick: PropTypes.func.isRequired,
};

export default CommonBtn;
