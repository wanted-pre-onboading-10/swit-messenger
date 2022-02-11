import PropTypes from 'prop-types';
import styles from 'components/sidebar/contacts/contacts-menu-btn/styles.module.scss';

ContactsMenuBtn.propTypes = {
  children: PropTypes.node.isRequired,
};

function ContactsMenuBtn({ children }) {
  return (
    <button type="button" className={styles['contact-menu-btn']}>
      {children}
    </button>
  );
}

export default ContactsMenuBtn;
