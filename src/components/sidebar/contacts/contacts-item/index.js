import PropTypes from 'prop-types';

import ContactsMenuBtn from '../contacts-menu-btn';
import ChatIconFill from 'assets/icons/ChatIconFill';
import ThreeDotsIcon from 'assets/icons/ThreeDotsIcon';

import styles from 'components/sidebar/contacts/contacts-item/styles.module.scss';

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

const icons = {
  chat: { id: 0, icon: <ChatIconFill /> },
  dots: { id: 1, icon: <ThreeDotsIcon /> },
};

function ContactsItem({ name, status, img }) {
  return (
    <li className={styles['contact-item']}>
      <img src={img} alt="contact" className={styles['contact-image']} />
      <div className={styles['contact-info']}>
        <p className={styles['contact-name']}>{name}</p>
        <p className={styles['contact-status']}>{status}</p>
      </div>
      <div className={styles['contact-menus']}>
        {Object.values(icons).map(({ id, icon }) => (
          <ContactsMenuBtn key={id}>{icon}</ContactsMenuBtn>
        ))}
      </div>
    </li>
  );
}

export default ContactsItem;
