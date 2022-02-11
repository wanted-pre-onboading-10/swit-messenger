import styles from 'components/sidebar/profile/styles.module.scss';

function Profile() {
  return (
    <div className={styles['sidebar-profile']}>
      <img
        src="https://randomuser.me/api/portraits/men/61.jpg"
        alt="profile"
        className={styles['user-image']}
      />
      <div className={styles['user-info']}>
        <p className={styles['user-name']}>문현돈</p>
        <div className={styles['user-status']}>
          <span className={styles['status-color']} />
          <p className={styles['status-message']}>대화 가능</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
