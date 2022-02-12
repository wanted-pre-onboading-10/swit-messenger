import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import ContactsItem from 'components/sidebar/contacts/contacts-item';

import useUser from 'hooks/useUser';
import MEMBERS from 'constants/members';
import styles from 'components/sidebar/contacts/search-result/styles.module.scss';

const cx = classNames.bind(styles);

ContactsSearchResult.propTypes = {
  filterTerm: PropTypes.string.isRequired,
};

function ContactsSearchResult({ filterTerm }) {
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

  if (!MEMBERS.length) {
    return (
      <ul className={cx('contact-list')}>
        <p className={cx('contact-list-empty')}>연락처가 텅 비었네요.</p>
      </ul>
    );
  }

  if (!filteredMemberList.length) {
    return (
      <ul className={cx('contact-list')}>
        <p className={cx('contact-list-empty')}>그런 사람은... 없는데요?</p>
      </ul>
    );
  }

  return <ul className={cx('contact-list')}>{renderedContacts}</ul>;
}

export default ContactsSearchResult;
