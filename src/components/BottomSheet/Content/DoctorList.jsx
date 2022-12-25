import React from 'react';

import useBottomsheetSort from '@/hooks/components/BottomSheet/Doctor/useBottomsheetDoctorList';

const DoctorList = () => {
  const { checkboxData, setSortValue, applySortValue } = useBottomsheetSort();
  return (
    <div className="flex z-50 flex-col py-5 mx-5 space-y-4">
      <p className="text-lg font-bold">Urutkan dari :</p>
      <div className="flex flex-col space-y-3">
        <label className="inline-flex items-center space-x-5">
          <input
            type="radio"
            className="w-5 h-5"
            name="sortCheck"
            value="price_desc"
            onChange={setSortValue}
            checked={checkboxData.priceDESC}
          />
          <p>Harga (Tertinggi - Terendah)</p>
        </label>
        <label className="inline-flex items-center space-x-5">
          <input
            type="radio"
            className="w-5 h-5"
            name="sortCheck"
            value="price_asc"
            onChange={setSortValue}
            checked={checkboxData.priceASC}
          />
          <p>Harga (Terendah - Tertinggi)</p>
        </label>
        <label className="inline-flex items-center space-x-5">
          <input
            type="radio"
            className="w-5 h-5"
            name="sortCheck"
            value="exp_desc"
            onChange={setSortValue}
            checked={checkboxData.expDESC}
          />
          <p>Pengalaman (Terlama - Terbaru)</p>
        </label>
        <label className="inline-flex items-center space-x-5">
          <input
            type="radio"
            className="w-5 h-5"
            name="sortCheck"
            value="exp_asc"
            onChange={setSortValue}
            checked={checkboxData.expASC}
          />
          <p>Pengalaman (Terbaru - Terlama)</p>
        </label>
      </div>
      <button onClick={applySortValue} className="py-3 mt-3 w-full font-bold text-white bg-main-primary rounded-md">
        Pilih
      </button>
    </div>
  );
};

export default DoctorList;
