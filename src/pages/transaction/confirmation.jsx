import React from 'react';

import Image from 'next/image';

import DoctorInfo from '@/components/Reusable/AppointmentInfo/DoctorInfo';
import FeeInfo from '@/components/Reusable/AppointmentInfo/FeeInfo';
import PatientInfo from '@/components/Reusable/AppointmentInfo/PatientInfo';
import ScheduleInfo from '@/components/Reusable/AppointmentInfo/ScheduleInfo';
import Spinner from '@/components/Reusable/Spinner';
import useTransactionConfirmation from '@/hooks/pages/Transaction/Confirmation/useTransactionConfirmation';
import TransactionLayout from '@/layouts/Transaction';

const Confirmation = () => {
  const { patientData, doctorData, scheduleData, confirmTransaction, isLoading, isError } =
    useTransactionConfirmation();

  // loading view
  if (!patientData || !doctorData || !scheduleData) {
    return (
      <div className="flex justify-center items-center h-full">
        <Image
          alt="loading_gif"
          src="/assets/gif/alteacare_loading.gif"
          layout="fixed"
          width={150}
          height={150}
          priority
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col p-4 space-y-4 hide-scrollbar">
      <PatientInfo data={patientData} isEditable={true} />
      <DoctorInfo data={doctorData} isEditable={true} />
      <ScheduleInfo data={scheduleData} isEditable={true} />
      <FeeInfo data={doctorData} />
      <button onClick={confirmTransaction} className="mt-5 w-full btn-primary" disabled={isLoading}>
        {isLoading && <Spinner />}
        {isLoading ? 'Membuat Appointment ...' : 'Konfirmasi'}
      </button>
      {isError && (
        <div role="alert">
          <div className="py-3 px-4 text-center text-error-2 bg-error-4 rounded-b border border-t-0 border-error-1">
            <p>Gagal, Pilih Jadwal Lain</p>
          </div>
        </div>
      )}
    </div>
  );
};

Confirmation.getLayout = page => {
  return <TransactionLayout>{page}</TransactionLayout>;
};

export default Confirmation;
