import React from 'react';

import { useRouter } from 'next/router';

import formatDate from '@/helpers/day/formatDate';

const ScheduleInfo = ({ data, isEditable }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-between text-sm">
        <p className="font-semibold text-info-2">Jadwal Telekonsultasi</p>
        {isEditable && (
          <button className="font-semibold text-info-2 outline-none" onClick={() => router.back()}>
            Ubah
          </button>
        )}
      </div>
      <div className="flex flex-col py-2 px-4 space-y-3 rounded border-default border-light-3 shadow">
        <div className="flex flex-row justify-between items-center text-sm text-dark-3">
          <p>Tanggal</p>
          <p>{formatDate(data?.date)}</p>
        </div>
        <div className="w-full border-b-default border-light-3"></div>
        <div className="flex flex-row justify-between items-center text-sm text-dark-3">
          <p>Jam</p>
          <p>
            {data?.start_time || data?.time_start}-{data?.end_time || data?.time_end} WIB
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScheduleInfo;
