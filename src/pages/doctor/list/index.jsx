import React from 'react';

import dynamic from 'next/dynamic';

import DateSelector from '@/components/DateSelector';
import withDoctorListSSR from '@/components/HOC/SSR/withDoctorListSSR';
import Searchbar from '@/components/pages/DoctorList/Searchbar';
import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import useDoctorList from '@/hooks/pages/Doctor/DoctorList/useDoctorList';
import DefaultLayout from '@/layouts/Default';
import 'keen-slider/keen-slider.min.css';

// dynamic import
const EmptyState = dynamic(() => import('@/components/pages/DoctorList/EmptyState'));
const LoadingState = dynamic(() => import('@/components/pages/DoctorList/LoadingState'));
const DoctorCard = dynamic(() => import('@/components/Card/DoctorCard'));

const DoctorList = props => {
  const { openBottomSheet } = useBottomSheet();
  const { listDay } = props;
  const { doctorList, availableDay, selectedDay, elementRef, setKeyword, sliderRef, slider } = useDoctorList({
    listDay
  });

  return (
    <div className="flex flex-col">
      <div className="sticky top-0 z-10 py-4 px-6 space-y-5 w-full bg-white shadow-md">
        <Searchbar
          setKeyword={setKeyword}
          toggleFilter={() => openBottomSheet('DOCTOR_FILTER')}
          toggleSort={() => openBottomSheet('DOCTOR_LIST')}
        />
        <DateSelector selectedDay={selectedDay} listDay={listDay} availableDay={availableDay} slider={slider} />
      </div>
      {/* schedule slider section */}
      {availableDay.length > 0 ? (
        <div ref={sliderRef} className="keen-slider">
          {availableDay?.map((day, index) => (
            <div key={day.day} className="flex-1 py-3 px-4 space-y-2 keen-slider__slide">
              <>
                {/* doctor list empty result */}
                {doctorList?.results === null && <EmptyState />}
                {doctorList?.results?.length === 0 ? (
                  // doctor list loading state
                  <LoadingState />
                ) : (
                  // doctor list data mapping
                  doctorList?.results?.length > 0 &&
                  availableDay[index]?.day === selectedDay &&
                  doctorList?.results.map(doctor => (
                    <DoctorCard key={doctor.id} data={doctor} elementRef={elementRef} />
                  ))
                )}
              </>
            </div>
          ))}
        </div>
      ) : (
        // no days available
        <EmptyState />
      )}
    </div>
  );
};

DoctorList.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export const getServerSideProps = withDoctorListSSR(() => {
  return { props: {} };
});
export default DoctorList;
