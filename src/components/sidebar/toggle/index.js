import PropTypes from 'prop-types';
import classNames from 'classnames';

import CloseIcon from 'assets/icons/CloseIcon';
import MenuIcon from 'assets/icons/MenuIcon';

import styles from 'components/sidebar/toggle/styles.module.scss';

let cx = classNames.bind(styles);

Toggle.propTypes = {
  toggle: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

function Toggle({ isOpen, toggle }) {
  const toggleClassName = cx({
    [styles.toggle]: true,
    [styles.open]: isOpen,
  });

  return (
    <>
      <button onClick={toggle} className={toggleClassName}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>
    </>
  );
}

export default Toggle;
