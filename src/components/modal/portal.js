import reactDom from 'react-dom';

function Portal({ children }) {
  const node = document.getElementById('portal');
  return reactDom.createPortal(children, node);
}

export default Portal;
