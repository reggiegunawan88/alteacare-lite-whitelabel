import React from 'react';

import AppointmentList from '@/components/pages/Teleconsultation/AppointmentList';
import Searchbar from '@/components/pages/Teleconsultation/Searchbar';
import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import useTeleconsultationCancelled from '@/hooks/pages/Teleconsultation/Cancelled/useTeleconsultationCancelled';
import HomeLayout from '@/layouts/Home';
import TeleconsultationLayout from '@/layouts/Teleconsultation';

const ConsultationCancelled = () => {
  const { openBottomSheet } = useBottomSheet();
  const { cancelledList, elementRef, setKeyword } = useTeleconsultationCancelled();

  return (
    <>
      <div className="py-2 px-5 bg-white">
        <Searchbar
          showBottomSheetSort={() => openBottomSheet('TELECONSULTATION_SORT')}
          showBottomSheetFamily={() => openBottomSheet('TELECONSULTATION_FAM_MEMBER')}
          setKeyword={setKeyword}
        />
      </div>
      <AppointmentList data={cancelledList} elementRef={elementRef} />
    </>
  );
};

ConsultationCancelled.getLayout = page => {
  return (
    <HomeLayout>
      <TeleconsultationLayout>{page}</TeleconsultationLayout>
    </HomeLayout>
  );
};

export default ConsultationCancelled;
