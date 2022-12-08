import React from 'react';

import Image from 'next/image';
import Div100vh from 'react-div-100vh';

import DoctorInformation from '@/components/pages/DoctorDetail/DoctorInformation';
import DoctorSchedule from '@/components/pages/DoctorDetail/DoctorSchedule';
import useDoctorDetail from '@/hooks/pages/Doctor/DoctorDetail/useDoctorDetail';
import DefaultLayout from '@/layouts/Default';
import getDoctorDetail from '@/services/Doctor/getDoctorDetail';
import getTimeSlot from '@/services/Doctor/getTimeSlot';

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
export async function getServerSideProps(ctx) {
  if (ctx.query.id !== undefined || ctx.query.id !== '') {
    const { id } = ctx.query;
    // get current date
    const date = new Date();
    const currentDate = date.setDate(date.getDate());
    const currentDateString = new Date(currentDate).toISOString().slice(0, 10);
    // conditional assign to selected date
    const selectedDate = ctx.query?.date || currentDateString;
    const queryParams = { docId: id, selectedDate };
    // try catch doctor time slot
    let timeslot = null;
    try {
      timeslot = await getTimeSlot(queryParams);
    } catch (error) {
      timeslot = null;
    }
    // try catch doctor detail data
    let doctorData = null;
    try {
      doctorData = await getDoctorDetail(id);
    } catch (error) {
      doctorData = null;
    }
    const ssrTimeSlot = timeslot;
    return {
      props: { doctorData, ssrTimeSlot }
    };
  }

  return {
    redirect: {
      permanent: true,
      destination: '/' // should change to 404 later
    }
  };
}

export default DoctorDetail;
