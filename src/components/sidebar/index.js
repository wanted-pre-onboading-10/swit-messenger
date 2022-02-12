import { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Profile from 'components/sidebar/profile';
import Switch from 'components/sidebar/switch';
import Logout from 'components/sidebar/logout';
import Contacts from 'components/sidebar/contacts';
import Toggle from 'components/sidebar/toggle';
import Dropdown from 'components/sidebar/dropdown';

import {
  channelItems,
  chatItems,
  buttonItems,
} from 'components/sidebar/shared/data';

import styles from 'components/sidebar/styles.module.scss';

let cx = classNames.bind(styles);

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

function Sidebar({ isOpen, toggle }) {
  const [activeSwitch, setActiveSwitch] = useState(buttonItems[0].name);

  const sidebarContents =
    activeSwitch === buttonItems[0].name ? (
      <>
        <Dropdown title={buttonItems[0].name} items={chatItems} />
        <Dropdown title={buttonItems[1].name} items={channelItems} />
      </>
    ) : (
      <Contacts />
    );

  const sidebarClassName = cx({
    [styles['sidebar-container']]: true,
    [styles.closed]: !isOpen,
  });

  return (
    <div className={sidebarClassName}>
      <Toggle isOpen={isOpen} toggle={toggle} />
      <div className={cx('sidebar')}>
        <Profile />
        <Switch activeSwitch={activeSwitch} setActiveSwitch={setActiveSwitch} />
        <section className={styles['sidebar-contents']}>
          {sidebarContents}
        </section>
        <Logout />
      </div>
    </div>
  );
}

export default Sidebar;
