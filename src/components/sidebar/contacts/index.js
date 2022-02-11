import PropTypes from 'prop-types';

import ChatIconFill from 'assets/icons/ChatIconFill';
import ThreeDotsIcon from 'assets/icons/ThreeDotsIcon';

import styles from 'components/sidebar/contacts/styles.module.scss';

function Contacts() {
  return (
    <div>
      <input
        type="text"
        className={styles['sidebar-search']}
        placeholder="검색하기"
      />
      <ul className={styles['contact-list']}>
        <ContactsItem
          name="김코딩"
          img="https://randomuser.me/api/portraits/men/48.jpg"
          status="Offline"
        />
        <ContactsItem
          name="김코딩"
          img="https://randomuser.me/api/portraits/men/48.jpg"
          status="Offline"
        />
        <ContactsItem
          name="김코딩"
          img="https://randomuser.me/api/portraits/men/48.jpg"
          status="Offline"
        />
        <ContactsItem
          name="김코딩"
          img="https://randomuser.me/api/portraits/men/48.jpg"
          status="Offline"
        />
        <ContactsItem
          name="김코딩"
          img="https://randomuser.me/api/portraits/men/48.jpg"
          status="Offline"
        />
        <ContactsItem
          name="김코딩"
          img="https://randomuser.me/api/portraits/men/48.jpg"
          status="Offline"
        />
      </ul>
    </div>
  );
}

function ContactsItem({ name, status, img }) {
  return (
    <li className={styles['contact-item']}>
      <img src={img} alt="contact" className={styles['contact-image']} />
      <div className={styles['contact-info']}>
        <p className={styles['contact-name']}>{name}</p>
        <p className={styles['contact-status']}>{status}</p>
      </div>
      <div className={styles['contact-menus']}>
        <button type="button" className={styles['contact-chat-icon']}>
          <ChatIconFill />
        </button>
        <button type="button" className={styles['contact-chat-icon']}>
          <ThreeDotsIcon />
        </button>
      </div>
    </li>
  );
}

ContactsItem.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Contacts;
