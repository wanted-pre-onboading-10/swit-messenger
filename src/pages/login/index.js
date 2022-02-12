import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import Modal from 'components/modal';

import useUserAction from 'hooks/useUserAction';
import styles from 'pages/login/login.module.scss';
import MEMBERS from 'constants/members';
import logo from 'assets/icons/switLogo.png';

const cx = classNames.bind(styles);

function Login() {
  const [name, setName] = useState('');
  const [isFilledOnSubmit, setIsFilledOnSubmit] = useState(true);
  const changeName = event => {
    setName(event.currentTarget.value.trim());
  };
  const clearUnderline = () => {
    setIsFilledOnSubmit(true);
  };

  const { login } = useUserAction();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const goToChat = event => {
    event.preventDefault();
    if (!name) {
      setIsFilledOnSubmit(false);
      setIsModalOpen(true);
      return;
    }
    login({
      userId: MEMBERS[3].userId,
      userName: name,
      profileImage: MEMBERS[3].profileImage,
    });
    navigate('/chat');
  };

  const closeModal = () => setIsModalOpen(false);

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
            onFocus={clearUnderline}
            className={cx('nameInput')}
            type="text"
            maxLength={10}
          />
          <span
            className={cx('underline', { redUnderline: !isFilledOnSubmit })}
          />
          <input
            className={cx('submitButton')}
            type="submit"
            value={'입장하기'}
            onClick={() => {}}
          />
        </form>
      </div>
      {isModalOpen && (
        <Modal
          message="이름을 입력해주세요!"
          callback={() => navigate('/')}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default Login;
