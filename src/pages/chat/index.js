import { useEffect } from 'react';
import useUser from 'hooks/useUser';
import { useNavigate } from 'react-router-dom';

function Chat() {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogin) {
      alert('로그인을 해주세요');
      navigate('/');
    }
  }, [user]);

  return <div>chat</div>;
}

export default Chat;
