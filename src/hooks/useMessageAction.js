import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import useUser from './useUser';
import { add, remove } from 'redux/slices/message';

const useMessageAction = () => {
  const user = useUser();
  const dispatch = useDispatch();
  return useMemo(() => ({
    add: content => dispatch(add({ ...user, ...content })),
    remove: content => dispatch(remove({ ...user, ...content })),
  }));
};
export default useMessageAction;
