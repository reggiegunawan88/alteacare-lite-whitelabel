import React from 'react';

import AppointmentList from '@/components/pages/Teleconsultation/AppointmentList';
import useTeleconsultationOngoing from '@/hooks/pages/Teleconsultation/Ongoing/useTeleconsultationOngoing';
import HomeLayout from '@/layouts/Home';
import TeleconsultationLayout from '@/layouts/Teleconsultation';

const ConsultationOngoing = () => {
  const { ongoingList, elementRef } = useTeleconsultationOngoing();

  return <AppointmentList data={ongoingList} elementRef={elementRef} />;
};

ConsultationOngoing.getLayout = page => {
  return (
    <HomeLayout>
      <TeleconsultationLayout>{page}</TeleconsultationLayout>
    </HomeLayout>
  );
};

export default ConsultationOngoing;
