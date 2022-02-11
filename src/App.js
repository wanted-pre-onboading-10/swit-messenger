import Chat from 'pages/chat';
import Login from 'pages/login';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
