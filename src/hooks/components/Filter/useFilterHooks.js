/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import getSpecializationsList from '@/services/Doctor/getSpecializations';
import getHospitalList from '@/services/Hospital/getHospitalList';
import { initiateHospitalList, initiateSpecializationsList } from '@/store/slices/FilterList';

const useFilterHooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function UpdateFilter() {
      const specializationsList = await getSpecializationsList();
      const hospitalList = await getHospitalList();
      dispatch(initiateSpecializationsList(specializationsList));
      dispatch(initiateHospitalList(hospitalList));
    }
    UpdateFilter();
  }, []);
};

export default useFilterHooks;
