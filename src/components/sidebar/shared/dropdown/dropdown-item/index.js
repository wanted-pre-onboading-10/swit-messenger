import PropTypes from 'prop-types';

import styles from 'components/sidebar/shared/dropdown/dropdown-item/styles.module.scss';

DropdownItem.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

function DropdownItem({ name, icon }) {
  return (
    <li className={styles['dropdown-item']}>
      {icon}
      {name}
    </li>
  );
}

export default DropdownItem;
