import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from 'hooks/useUser';

import Chat from 'components/chat';
import Sidebar from 'components/sidebar';

function ChatPage() {
  const user = useUser();
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    if (!user.isLogin) {
      alert('로그인을 해주세요');
      navigate('/');
    }
  }, [user]);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <Chat />
    </>
  );
}

export default ChatPage;
