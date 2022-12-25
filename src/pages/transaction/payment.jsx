import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

import useTransactionPayment from '@/hooks/pages/Transaction/Payment/useTransactionPayment';
import TransactionLayout from '@/layouts/Transaction';

const DoctorInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/DoctorInfo'));
const FeeInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/FeeInfo'));
const PatientInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/PatientInfo'));
const ScheduleInfo = dynamic(() => import('@/components/Reusable/AppointmentInfo/ScheduleInfo'));
const Spinner = dynamic(() => import('@/components/Reusable/Spinner'));

const Payment = () => {
  const { data, loadingPage, loadingBtn, proceedPayment } = useTransactionPayment();
  if (loadingPage) {
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
      <PatientInfo data={data?.patient} isEditable={false} />
      <DoctorInfo data={data?.doctor} isEditable={false} />
      <ScheduleInfo data={data?.schedule} isEditable={false} />
      <FeeInfo showCoverage={true} data={data} />
      <div className="flex text-center">
        <span className="text-sm text-dark-1">
          Dengan mengklik “Lanjut” Anda menyetujui{' '}
          <Link passHref href="/transaction/terms-conditions">
            <span className="font-bold text-main-primary">Syarat dan Ketentuan AlteaCare</span>
          </Link>
        </span>
      </div>
      <button className="mt-5 w-full btn-primary" onClick={proceedPayment} disabled={loadingBtn}>
        {loadingBtn ? (
          <span>
            <Spinner /> Mengarahkan
          </span>
        ) : (
          <>
            {data?.total_price === 0 ? <span>Lanjutkan Telekonsultasi Gratis</span> : <span>Lanjut ke Pembayaran</span>}
          </>
        )}
      </button>
    </div>
  );
};

Payment.getLayout = page => {
  return <TransactionLayout>{page}</TransactionLayout>;
};

export default Payment;
