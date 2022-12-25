import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { closeBottomSheet } from '@/store/slices/BottomSheet';

const useBottomsheetSort = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [indicator, setIndicator] = useState('DESC');
  const [checkboxData, setCheckboxData] = useState({
    newest: true,
    oldest: false
  });

  const setSortValue = param => {
    if (param === 'DESC') {
      setIndicator('DESC');
      setCheckboxData({ newest: true, oldest: false });
    } else {
      setIndicator('ASC');
      setCheckboxData({ newest: false, oldest: true });
    }
  };

  const applySortValue = () => {
    router.replace({ query: { ...router.query, sort_type: indicator } });
    dispatch(closeBottomSheet());
  };

  useEffect(() => {
    if (router.isReady) {
      switch (router.query.sort_type) {
        case 'DESC':
          setCheckboxData({ newest: true, oldest: false });
          break;
        case 'ASC':
          setCheckboxData({ newest: false, oldest: true });
          break;
        default:
          setCheckboxData({ newest: true, oldest: false });
      }
    }
  }, [router.isReady]);

  return {
    checkboxData,
    setSortValue,
    applySortValue
  };
};

export default useBottomsheetSort;
