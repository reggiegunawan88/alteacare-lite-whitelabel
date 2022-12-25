import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { closeBottomSheet } from '@/store/slices/BottomSheet';

const useBottomsheetSort = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [params, setParams] = useState(router.query);
  const [checkboxData, setCheckboxData] = useState({
    priceDESC: false,
    priceASC: false,
    expDESC: false,
    expASC: false
  });

  // set sort value onchange event
  const setSortValue = e => {
    const target = e.target.value;
    const currentParams = router.query;
    switch (target) {
      case 'price_desc':
        setParams({ ...currentParams, order_by: 'price', order_type: 'DESC' });
        setCheckboxData({ priceDESC: true, priceASC: false, expDESC: false, expASC: false });
        break;
      case 'price_asc':
        setParams({ ...currentParams, order_by: 'price', order_type: 'ASC' });
        setCheckboxData({ priceDESC: false, priceASC: true, expDESC: false, expASC: false });
        break;
      case 'exp_desc':
        setParams({ ...currentParams, order_by: 'experience', order_type: 'DESC' });
        setCheckboxData({ priceDESC: false, priceASC: false, expDESC: true, expASC: false });
        break;
      case 'exp_asc':
        setParams({ ...currentParams, order_by: 'experience', order_type: 'ASC' });
        setCheckboxData({ priceDESC: false, priceASC: false, expDESC: false, expASC: true });
        break;
      default:
        break;
    }
  };

  // apply sort value onclick btn
  const applySortValue = () => {
    router.replace({ query: params });
    dispatch(closeBottomSheet());
  };

  // init checkbox value on page load from query param
  const initiateCheckbox = routerParam => {
    if (routerParam.query.order_by === 'price' && routerParam.query.order_type === 'DESC') {
      setCheckboxData({ priceDESC: true, priceASC: false, expDESC: false, expASC: false });
      return;
    }
    if (routerParam.query.order_by === 'price' && routerParam.query.order_type === 'ASC') {
      setCheckboxData({ priceDESC: false, priceASC: true, expDESC: false, expASC: false });
      return;
    }
    if (routerParam.query.order_by === 'experience' && routerParam.query.order_type === 'DESC') {
      setCheckboxData({ priceDESC: false, priceASC: false, expDESC: true, expASC: false });
      return;
    }
    if (routerParam.query.order_by === 'experience' && routerParam.query.order_type === 'ASC') {
      setCheckboxData({ priceDESC: false, priceASC: false, expDESC: false, expASC: true });
      return;
    }
    // set initial checkbox value if there is no query param
    setCheckboxData({ priceDESC: false, priceASC: true, expDESC: false, expASC: false });
  };

  useEffect(() => {
    if (router.isReady) {
      initiateCheckbox(router);
    }
  }, [router.isReady]);

  return {
    checkboxData,
    setSortValue,
    applySortValue
  };
};

export default useBottomsheetSort;
