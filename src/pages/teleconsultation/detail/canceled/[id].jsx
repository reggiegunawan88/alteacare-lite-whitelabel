import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

import DoctorInfo from '@/components/Reusable/AppointmentInfo/DoctorInfo';
import PatientInfo from '@/components/Reusable/AppointmentInfo/PatientInfo';
import ScheduleInfo from '@/components/Reusable/AppointmentInfo/ScheduleInfo';
import useTeleconsultationDetail from '@/hooks/pages/Teleconsultation/Detail/useTeleconsultationDetail';
import BackNavLayout from '@/layouts/BackNav';

const TeleconsultationCanceled = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, loading } = useTeleconsultationDetail(id);
  const { patient, doctor, schedule } = data.results;
  if (loading) {
    return (
      <Div100vh className="flex justify-center items-center">
        <Image
          alt="loading_gif"
          src="/assets/gif/alteacare_loading.gif"
          layout="fixed"
          width={150}
          height={150}
          priority
        />
      </Div100vh>
    );
  }
  return (
    <div className="p-4 bg-light-4">
      <div className="flex flex-col space-y-4">
        <PatientInfo data={patient} isEditable={false} />
        <DoctorInfo data={doctor} isEditable={false} />
        <ScheduleInfo data={schedule} isEditable={false} />

        <div className="flex flex-col text-sm leading-4 text-center text-error-3">
          <span>Maaf, masa pembayaran telekonsultasi berakhir.</span>
          <span>Silakan jadwalkan ulang.</span>
        </div>
        {/* redirect this btn to doctor details with required params */}
        <Link passHref href={`/doctor/details?id=${data?.results?.doctor?.id}`}>
          <button className="w-full btn-primary">Jadwalkan Ulang</button>
        </Link>
        <div className="leading-3 text-center">
          <span className="text-xs text-dark-3">
            *Riwayat pembatalan telekonsultasi akan terhapus otomatis setelah 48 jam.
          </span>
        </div>
      </div>
    </div>
  );
};
TeleconsultationCanceled.getLayout = page => {
  return <BackNavLayout title="Masa Pembayaran Berakhir">{page}</BackNavLayout>;
};

export default TeleconsultationCanceled;
