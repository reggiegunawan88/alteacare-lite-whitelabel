import { batch, useDispatch } from 'react-redux';

import { closeFilterList, searchHospital, sortHospitalList } from '@/store/slices/FilterList';

const useHospitalList = () => {
  const dispatch = useDispatch();

  const searchHospitalKeyword = keyword => {
    dispatch(searchHospital(keyword));
  };

  const applySelectedHospital = () => {
    batch(() => {
      dispatch(sortHospitalList());
      dispatch(closeFilterList());
    });
  };

  return {
    applySelectedHospital,
    searchHospitalKeyword
  };
};

export default useHospitalList;
