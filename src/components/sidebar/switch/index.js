import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from 'components/sidebar/switch/styles.module.scss';

import { buttonItems } from 'components/sidebar/shared/data.js';

let cx = classNames.bind(styles);

const classNameGenerator = (buttonName, activeSwitch) => {
  return cx({
    [styles.button]: true,
    [styles.active]: activeSwitch === buttonName,
  });
};

function Switch({ activeSwitch, setActiveSwitch }) {
  const handleClick = e => {
    setActiveSwitch(e.target.value);
  };

  const renderedButtons = buttonItems.map(({ name, icon }) => (
    <button
      key={name}
      type="button"
      value={name}
      className={classNameGenerator(name, activeSwitch)}
      onClick={handleClick}>
      {icon}
      {name}
    </button>
  ));

  return <div className={styles.switch}>{renderedButtons}</div>;
}

Switch.propTypes = {
  activeSwitch: PropTypes.string.isRequired,
  setActiveSwitch: PropTypes.func.isRequired,
};

export default Switch;
