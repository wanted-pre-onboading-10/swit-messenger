import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';
import { login, logout, editUserName } from 'redux/slices/user';

const useUserAction = () => {
  const dispatch = useDispatch();
  return useMemo(() =>
    bindActionCreators({ login, logout, editUserName }, dispatch),
  );
};

export default useUserAction;
