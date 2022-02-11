import { useSelector } from 'react-redux';

const useMessage = () => {
  const messages = useSelector(state => state.message);
  return messages;
};

export default useMessage;
