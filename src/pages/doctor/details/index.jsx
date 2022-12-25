import React from 'react';

import Image from 'next/image';
import Div100vh from 'react-div-100vh';

import withDoctorDetailSSR from '@/components/HOC/SSR/withDoctorDetailSSR';
import DoctorInformation from '@/components/pages/DoctorDetail/DoctorInformation';
import DoctorSchedule from '@/components/pages/DoctorDetail/DoctorSchedule';
import useDoctorDetail from '@/hooks/pages/Doctor/DoctorDetail/useDoctorDetail';
import DefaultLayout from '@/layouts/Default';

const DoctorDetail = props => {
  const { doctorData, ssrTimeSlot } = props;
  const { refundTerms, listDay, availableDay } = useDoctorDetail(doctorData);

  if (!listDay || !availableDay) {
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
    <div className="flex flex-col space-y-3 bg-white">
      <DoctorInformation doctorData={doctorData} refundTerms={refundTerms} />
      <DoctorSchedule doctorData={doctorData} ssrTimeSlot={ssrTimeSlot} listDay={listDay} availableDay={availableDay} />
    </div>
  );
};

DoctorDetail.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps = withDoctorDetailSSR(() => {
  return { props: {} };
});

export default DoctorDetail;
