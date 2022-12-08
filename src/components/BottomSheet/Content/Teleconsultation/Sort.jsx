import React from 'react';

import useBottomsheetSort from '@/hooks/components/BottomSheet/Teleconsultation/useBottomsheetSort';

const TeleconsultationSort = () => {
  const { checkboxData, setSortValue, applySortValue } = useBottomsheetSort();
  return (
    <div className="flex z-50 flex-col py-5 mx-5 space-y-4">
      <p className="text-lg font-bold">Urutkan dari :</p>
      <div className="flex flex-col space-y-3">
        <label className="inline-flex items-center space-x-5">
          <input
            type="radio"
            className="w-5 h-5"
            name="sortValue"
            onChange={() => setSortValue('DESC')}
            checked={checkboxData.newest}
          />
          <p>Paling Baru</p>
        </label>
        <label className="inline-flex items-center space-x-5">
          <input
            type="radio"
            className="w-5 h-5"
            name="sortValue"
            checked={checkboxData.oldest}
            onChange={() => setSortValue('ASC')}
          />
          <p>Paling Lama</p>
        </label>
      </div>
      <button onClick={applySortValue} className="py-3 mt-3 w-full font-bold text-white bg-main-primary rounded-md">
        Pilih
      </button>
    </div>
  );
};

export default TeleconsultationSort;
