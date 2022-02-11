import classNames from 'classnames/bind';

import useUser from 'hooks/useUser';

import styles from 'components/sidebar/profile/styles.module.scss';

let cx = classNames.bind(styles);

function Profile() {
  const { userName, isChatAvailable, profileImage } = useUser();

  const userStatus = isChatAvailable ? '대화 가능' : '자리 비움';

  const statusColorClassName = cx({
    [styles['status-color']]: true,
    [styles['active']]: isChatAvailable,
    [styles['inactive']]: !isChatAvailable,
  });

  return (
    <div className={styles['sidebar-profile']}>
      <img src={profileImage} alt="profile" className={styles['user-image']} />
      <div className={styles['user-info']}>
        <p className={styles['user-name']}>{userName}</p>
        <div className={styles['user-status']}>
          <span className={statusColorClassName} />
          <p className={styles['status-message']}>{userStatus}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
