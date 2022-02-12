import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from 'components/sidebar/shared/dropdown/dropdown-item/styles.module.scss';
import UnreadTag from './unread-tag';

const cx = classNames.bind(styles);

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  unread: PropTypes.number,
  active: PropTypes.bool.isRequired,
};

function DropdownItem({ name, icon, unread, active }) {
  const itemStyle = cx({
    'dropdown-item': true,
    active: active,
  });

  return (
    <li className={itemStyle}>
      {icon}
      {name}
      <UnreadTag unread={unread} />
    </li>
  );
}

export default DropdownItem;
