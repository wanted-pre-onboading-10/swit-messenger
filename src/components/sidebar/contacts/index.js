import { useState, useEffect } from 'react';

import ContactsItem from './contacts-item';

import useUser from 'hooks/useUser';
import MEMBERS from 'constants/members';
import styles from 'components/sidebar/contacts/styles.module.scss';

function Contacts() {
  const [filterTerm, setFilterTerm] = useState('');

  const { userId: myId } = useUser();

  const filteredMemberList = MEMBERS.filter(({ userName }) =>
    userName.includes(filterTerm),
  );

  const renderedContacts = filteredMemberList.map(
    ({ userId, userName, profileImage, status }) => {
      if (userId === myId) return;
      return (
        <ContactsItem
          key={userId}
          name={userName}
          img={profileImage}
          status={status}
        />
      );
    },
  );

  const handleChange = e => {
    setFilterTerm(e.target.value);
  };

  useEffect(
    () => () => {
      setFilterTerm('');
    },
    [],
  );

  return (
    <div>
      <input
        type="text"
        className={styles['sidebar-search']}
        placeholder="검색하기"
        value={filterTerm}
        onChange={handleChange}
      />
      <ul className={styles['contact-list']}>{renderedContacts}</ul>
    </div>
  );
}

export default Contacts;
