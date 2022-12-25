import React from 'react';

import dynamic from 'next/dynamic';

import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import useTeleconsultationHistory from '@/hooks/pages/Teleconsultation/History/useTeleconsultationHistory';
import TeleconsultationLayout from '@/layouts/Teleconsultation';

const Searchbar = dynamic(() => import('@/components/pages/Teleconsultation/Searchbar'));
const AppointmentList = dynamic(() => import('@/components/pages/Teleconsultation/AppointmentList'));

const ConsultationHistory = () => {
  const { openBottomSheet } = useBottomSheet();
  const { historyList, loading, elementRef, setKeyword } = useTeleconsultationHistory();

  return (
    <>
      <div className="py-2 px-5 bg-white">
        <Searchbar
          showBottomSheetSort={() => openBottomSheet('TELECONSULTATION_SORT')}
          showBottomSheetFamily={() => openBottomSheet('TELECONSULTATION_FAM_MEMBER')}
          setKeyword={setKeyword}
        />
      </div>
      <AppointmentList data={historyList} elementRef={elementRef} loading={loading} />
    </>
  );
};

ConsultationHistory.getLayout = page => {
  return <TeleconsultationLayout>{page}</TeleconsultationLayout>;
};

export default ConsultationHistory;
