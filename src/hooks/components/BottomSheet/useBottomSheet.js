import { useDispatch } from 'react-redux';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import { closeBottomSheet, setType, showBottomSheet } from '@/store/slices/BottomSheet';

const useBottomSheet = () => {
  const dispatch = useDispatch();
  const { isOpen, type } = useShallowEqualSelector({ name: 'bottomSheet', states: ['isOpen', 'type'] });

  const openBottomSheet = param => {
    dispatch(showBottomSheet());
    dispatch(setType(param));
  };
  const hideBottomSheet = () => {
    dispatch(closeBottomSheet());
  };

  return {
    isOpen,
    type,
    openBottomSheet,
    hideBottomSheet
  };
};

export default useBottomSheet;
