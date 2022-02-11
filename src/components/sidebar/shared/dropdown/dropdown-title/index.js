import PropTypes from 'prop-types';
import classNames from 'classnames';

import ChevronDownIcon from 'assets/icons/ChevronDownIcon';
import PlusIcon from 'assets/icons/PlusIcon';

import styles from 'components/sidebar/shared/dropdown/dropdown-title/styles.module.scss';

let cx = classNames.bind(styles);

function DropdownTitle({ toggle, open, name }) {
  let dropdownIconClassName = cx({
    [styles['dropdown-icon']]: true,
    [styles.open]: open,
    [styles.closed]: !open,
  });

  return (
    <button className={styles['dropdown-title']} onClick={toggle} type="button">
      <div>
        <ChevronDownIcon className={dropdownIconClassName} /> {name}
      </div>
      <PlusIcon />
    </button>
  );
}

DropdownTitle.propTypes = {
  toggle: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default DropdownTitle;
