import { useState } from 'react';

import Sidebar from 'components/sidebar';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} toggle={toggleSidebar} />
      <main></main>
    </>
  );
}

export default App;
