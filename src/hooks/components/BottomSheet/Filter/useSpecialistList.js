import { batch, useDispatch } from 'react-redux';

import { closeFilterList, searchSpecialist, sortSpecialistList } from '@/store/slices/FilterList';

const useSpecialistList = () => {
  const dispatch = useDispatch();

  const searchSpecialistKeyword = keyword => {
    dispatch(searchSpecialist(keyword));
  };

  const applySelectedSpecialist = () => {
    batch(() => {
      dispatch(sortSpecialistList());
      dispatch(closeFilterList());
    });
  };

  return {
    applySelectedSpecialist,
    searchSpecialistKeyword
  };
};

export default useSpecialistList;
