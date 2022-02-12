import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from 'components/sidebar/contacts/search-input/styles.module.scss';

const cx = classNames.bind(styles);

ContactsSearchInput.propTypes = {
  filterTerm: PropTypes.string.isRequired,
  setFilterTerm: PropTypes.func.isRequired,
};

function ContactsSearchInput({ filterTerm, setFilterTerm }) {
  const handleChange = e => {
    setFilterTerm(e.target.value);
  };

  return (
    <input
      type="text"
      className={cx('contacts-search-input')}
      placeholder="연락처 검색하기"
      value={filterTerm}
      onChange={handleChange}
    />
  );
}

export default ContactsSearchInput;
