import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import useTransactionConfirmation from '@/hooks/pages/Transaction/Confirmation/useTransactionConfirmation';
import TransactionLayout from '@/layouts/Transaction';

const DoctorInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/DoctorInfo'));
const FeeInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/FeeInfo'));
const PatientInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/PatientInfo'));
const ScheduleInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/ScheduleInfo'));
const Spinner = dynamic(() => import('@/components/Reusable/Spinner'));

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
      <FeeInfo showCoverage={false} data={doctorData} />
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
