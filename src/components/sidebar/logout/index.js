import styles from 'components/sidebar/logout/styles.module.scss';

function Logout() {
  return (
    <button type="button" className={styles.logout}>
      로그아웃
    </button>
  );
}

export default Logout;
