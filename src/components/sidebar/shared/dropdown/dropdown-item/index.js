import PropTypes from 'prop-types';

import styles from 'components/sidebar/shared/dropdown/dropdown-item/styles.module.scss';

function DropdownItem({ name, icon }) {
  return (
    <li className={styles['dropdown-item']}>
      {icon}
      {name}
    </li>
  );
}

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default DropdownItem;
