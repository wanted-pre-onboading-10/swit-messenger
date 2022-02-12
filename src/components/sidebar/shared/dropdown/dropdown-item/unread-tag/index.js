import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'components/sidebar/shared/dropdown/dropdown-item/unread-tag/styles.module.scss';

const cx = classNames.bind(styles);

UnreadTag.propTypes = {
  unread: PropTypes.number,
};

function UnreadTag({ unread }) {
  const unreadTagStyle = cx({
    tag: unread !== 0 ? true : false,
  });

  return <span className={unreadTagStyle}>{unread}</span>;
}

export default UnreadTag;
