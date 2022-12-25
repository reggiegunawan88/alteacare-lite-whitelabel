import React from 'react';

import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';

const PatientInfo = ({ data, isEditable }) => {
  const { openBottomSheet } = useBottomSheet();
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-between text-sm">
        <p className="font-semibold text-info-2">Info Pasien</p>
        {isEditable && (
          <button className="font-semibold text-info-2 outline-none" onClick={() => openBottomSheet('UPDATE_PATIENT')}>
            Ubah
          </button>
        )}
      </div>
      <div className="flex flex-col rounded border-default border-light-3 shadow">
        <div className="grid grid-cols-2 p-4">
          <div className="flex flex-col">
            <p className="font-bold text-dark-1">
              {data?.first_name} {data?.last_name}
            </p>
            <p className="text-sm text-dark-3">Tgl Lahir: {data?.birth_date || data?.birthdate || '-'}</p>
          </div>
          <span className="justify-self-end p-1 w-fit h-fit text-sm text-white bg-main-lighter rounded">
            {data?.gender === 'MALE' ? 'Laki-laki' : 'Perempuan'}
          </span>
        </div>
        <div className="py-2 px-4 bg-light-3">
          <p className="text-xs text-dark-3">
            No KTP: <b>{data?.card_id || '-'}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
