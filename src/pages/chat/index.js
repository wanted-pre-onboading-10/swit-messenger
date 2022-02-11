import { useEffect } from 'react';
import useUser from 'hooks/useUser';
import { useNavigate } from 'react-router-dom';

import Chatting from 'components/chat';

function Chat() {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.isLogin) {
      alert('로그인을 해주세요');
      navigate('/');
    }
  }, [user]);

  return (
    <div>
      <Chatting />
    </div>
  );
}

export default Chat;
