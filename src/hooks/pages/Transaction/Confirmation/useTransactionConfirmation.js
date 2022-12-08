import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import createAppointment from '@/services/Appointment/Create/createAppointment';

const useTransactionConfirmation = () => {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { patientData, doctorData, scheduleData } = useShallowEqualSelector({
    name: 'transaction',
    states: ['patientData', 'doctorData', 'scheduleData']
  });

  const confirmTransaction = () => {
    const { id } = doctorData;
    const schedules = {
      code: scheduleData.code,
      date: scheduleData.date,
      time_end: scheduleData.end_time,
      time_start: scheduleData.start_time
    };
    const formData = {
      consultation_method: 'VIDEO_CALL',
      video_call_provider: 'JITSI_WEB',
      doctor_id: id,
      next_step: 'DIRECT',
      patient_id: patientData.id,
      schedules: [schedules]
    };
    setIsloading(true);
    createAppointment(formData).then(resp => {
      if (resp) {
        const { appointment_id } = resp;
        router.replace(`/transaction/payment?step=3&id=${appointment_id}`);
      } else {
        setIsError(true);
      }
      setIsloading(false);
    });
  };
  useEffect(() => {
    // back to prev page if redux data is null
    if (!patientData || !doctorData || !scheduleData) {
      router.back();
    }
  }, []);

  return {
    patientData,
    isLoading,
    isError,
    doctorData,
    scheduleData,
    confirmTransaction
  };
};

export default useTransactionConfirmation;
