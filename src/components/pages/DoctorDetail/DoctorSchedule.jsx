/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';

import Image from 'next/image';

import DateSelector from '@/components/DateSelector';
import useDoctorSchedule from '@/hooks/components/DoctorDetail/useDoctorSchedule';

import 'keen-slider/keen-slider.min.css';

const DoctorSchedule = props => {
  const { doctorData, listDay, availableDay, ssrTimeSlot } = props;
  const { activeTimeslotIdx, selectedDay, selectSchedule, chooseSchedule, sliderRef, slider } = useDoctorSchedule({
    availableDay
  });

  return (
    <div className="flex flex-col">
      <div className="flex flex-col py-3 px-4 space-y-4 bg-light-4">
        <DateSelector selectedDay={selectedDay} availableDay={availableDay} listDay={listDay} slider={slider} />
        <div className="flex">
          {availableDay?.length > 0 && (
            <div ref={sliderRef} className="keen-slider">
              {availableDay?.map((day, idx) => (
                <div key={idx} className="keen-slider__slide">
                  <div className="overflow-y-scroll max-h-60 hide-scrollbar">
                    {/* time slot available */}
                    {ssrTimeSlot ? (
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {ssrTimeSlot?.map((val, ids) => (
                          <div
                            key={val?.code}
                            className={`p-1.5 rounded border-default border-main-primary text-sm ${
                              activeTimeslotIdx === ids ? 'bg-main-primary text-white' : 'text-main-primary'
                            }`}
                            onClick={() => selectSchedule(val, ids)}
                          >
                            {val?.start_time} - {val?.end_time}
                          </div>
                        ))}
                      </div>
                    ) : (
                      // timeslot null
                      <div className="flex flex-col justify-center items-center space-y-4">
                        <Image
                          alt="empty-timeslot"
                          src="/assets/images/empty_timeslot.svg"
                          layout="fixed"
                          width={60}
                          height={60}
                          objectFit="contain"
                        />
                        <div className="flex flex-col gap-y-2 text-xxs text-center text-dark-3">
                          <div className="flex flex-col leading-3">
                            <span>Anda kalah cepat</span>
                            <span>Slot jadwal dokter hari ini sudah penuh</span>
                          </div>
                          <div className="flex flex-col leading-3">
                            <span>Jangan khawatir</span>
                            <span>AlteaCare punya banyak pilihan Dokter lain</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="overflow-hidden sticky bottom-0 p-4 w-full bg-white">
        <button
          className={`py-2 px-4 w-full text-white rounded-md ${
            activeTimeslotIdx === null ? 'bg-dark-4' : 'bg-main-primary'
          }`}
          disabled={activeTimeslotIdx === null}
          onClick={() => chooseSchedule(doctorData)}
        >
          <span className="font-bold">Lanjut</span>
        </button>
      </div>
    </div>
  );
};

export default DoctorSchedule;
