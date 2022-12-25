import React from 'react';

import dynamic from 'next/dynamic';

import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import useTeleconsultationCancelled from '@/hooks/pages/Teleconsultation/Cancelled/useTeleconsultationCancelled';
import TeleconsultationLayout from '@/layouts/Teleconsultation';

const Searchbar = dynamic(() => import('@/components/pages/Teleconsultation/Searchbar'));
const AppointmentList = dynamic(() => import('@/components/pages/Teleconsultation/AppointmentList'));

const ConsultationCancelled = () => {
  const { openBottomSheet } = useBottomSheet();
  const { cancelledList, loading, elementRef, setKeyword } = useTeleconsultationCancelled();

  return (
    <>
      <div className="py-2 px-5 bg-white">
        <Searchbar
          showBottomSheetSort={() => openBottomSheet('TELECONSULTATION_SORT')}
          showBottomSheetFamily={() => openBottomSheet('TELECONSULTATION_FAM_MEMBER')}
          setKeyword={setKeyword}
        />
      </div>
      <AppointmentList data={cancelledList} elementRef={elementRef} loading={loading} />
    </>
  );
};

ConsultationCancelled.getLayout = page => {
  return <TeleconsultationLayout>{page}</TeleconsultationLayout>;
};

export default ConsultationCancelled;
