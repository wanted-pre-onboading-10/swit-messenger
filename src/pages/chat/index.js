import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Chat from 'components/chat';
import Sidebar from 'components/sidebar';
import Modal from 'components/modal';

import useUser from 'hooks/useUser';

function ChatPage() {
  const user = useUser();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  useEffect(() => {
    if (!user.isLogin) {
      setIsModalOpen(true);
    }
  }, [user]);

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <Chat />
      {isModalOpen && (
        <Modal
          message="이름을 입력해 로그인 해주세요️!"
          callback={() => navigate('/')}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default ChatPage;
