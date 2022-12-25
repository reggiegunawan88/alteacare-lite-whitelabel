import React from 'react';

import dynamic from 'next/dynamic';

import useTeleconsultationOngoing from '@/hooks/pages/Teleconsultation/Ongoing/useTeleconsultationOngoing';
import TeleconsultationLayout from '@/layouts/Teleconsultation';

const AppointmentList = dynamic(() => import('@/components/pages/Teleconsultation/AppointmentList'));

const ConsultationOngoing = () => {
  const { ongoingList, loading, elementRef } = useTeleconsultationOngoing();

  return <AppointmentList data={ongoingList} elementRef={elementRef} loading={loading} />;
};

ConsultationOngoing.getLayout = page => {
  return <TeleconsultationLayout>{page}</TeleconsultationLayout>;
};

export default ConsultationOngoing;
