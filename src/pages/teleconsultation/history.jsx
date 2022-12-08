import React from 'react';

import AppointmentList from '@/components/pages/Teleconsultation/AppointmentList';
import Searchbar from '@/components/pages/Teleconsultation/Searchbar';
import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import useTeleconsultationHistory from '@/hooks/pages/Teleconsultation/History/useTeleconsultationHistory';
import HomeLayout from '@/layouts/Home';
import TeleconsultationLayout from '@/layouts/Teleconsultation';

const ConsultationHistory = () => {
  const { openBottomSheet } = useBottomSheet();
  const { historyList, elementRef, setKeyword } = useTeleconsultationHistory();
  return (
    <>
      <div className="py-2 px-5 bg-white">
        <Searchbar
          showBottomSheetSort={() => openBottomSheet('TELECONSULTATION_SORT')}
          showBottomSheetFamily={() => openBottomSheet('TELECONSULTATION_FAM_MEMBER')}
          setKeyword={setKeyword}
        />
      </div>
      <AppointmentList data={historyList} elementRef={elementRef} />
    </>
  );
};

ConsultationHistory.getLayout = page => {
  return (
    <HomeLayout>
      <TeleconsultationLayout>{page}</TeleconsultationLayout>
    </HomeLayout>
  );
};

export default ConsultationHistory;
