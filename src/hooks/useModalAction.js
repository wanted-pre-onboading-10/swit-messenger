import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { open, close } from 'redux/slices/modal';

const useModalAction = () => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators({ open, close }, dispatch));
};

export default useModalAction;
