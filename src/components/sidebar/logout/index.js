import { useNavigate } from 'react-router-dom';

import useUserAction from 'hooks/useUserAction';
import styles from 'components/sidebar/logout/styles.module.scss';

function Logout() {
  const navigate = useNavigate();
  const { logout } = useUserAction();

  const handleLogout = () => {
    navigate(`/`);
    logout();
  };

  return (
    <button type="button" className={styles.logout} onClick={handleLogout}>
      로그아웃
    </button>
  );
}

export default Logout;
