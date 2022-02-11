import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import useUserAction from 'hooks/useUserAction';
import MEMBERS from 'constants/members';
import logo from 'assets/icons/switLogo.png';
import styles from 'pages/login/login.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Login() {
  const [name, setName] = useState('');
  const changeName = event => {
    setName(event.currentTarget.value.trim());
  };

  const { login } = useUserAction();
  const navigate = useNavigate();
  const goToChat = event => {
    if (!name) return alert('이름을 입력해주세요!');
    event.preventDefault();
    login({
      userId: MEMBERS[3].userId,
      userName: name,
      profileImage: MEMBERS[3].profileImage,
    });
    navigate('/chat');
  };

  return (
    <div className={cx('container')}>
      <img className={cx('logo')} src={logo} alt="lgoo" />
      <div className={cx('loginBox')}>
        <div className={cx('titleBox')}>
          <h1 className={cx('title')}>환영합니다 !</h1>
          <h3 className={cx('subTitle')}>
            채팅방에 입장하려면 이름을 입력해주세요.
          </h3>
        </div>
        <form onSubmit={goToChat} className={cx('loginForm')}>
          <input
            placeholder="이름을 입력해주세요"
            value={name || ''}
            onChange={changeName}
            className={cx('nameInput')}
            type="text"
            maxLength={10}
          />
          <input
            className={cx('submitButton')}
            type="submit"
            value={'입장하기'}
            onClick={() => {}}
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
