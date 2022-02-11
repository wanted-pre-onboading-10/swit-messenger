import MEMBERS from 'constants/members';

import styles from 'components/sidebar/contacts/styles.module.scss';
import ContactsItem from './contacts-item';

const renderedContacts = MEMBERS.map(({ userId, userName, profileImage }) => (
  <ContactsItem
    key={userId}
    name={userName}
    img={profileImage}
    status="Offline"
  />
));

function Contacts() {
  return (
    <div>
      <input
        type="text"
        className={styles['sidebar-search']}
        placeholder="검색하기"
      />
      <ul className={styles['contact-list']}>{renderedContacts}</ul>
    </div>
  );
}

export default Contacts;
