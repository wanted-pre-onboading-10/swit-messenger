import ChatPage from 'pages/chat';
import Login from 'pages/login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="chat" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
