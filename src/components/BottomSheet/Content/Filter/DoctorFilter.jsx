import React from 'react';

import dynamic from 'next/dynamic';

import useDoctorFilter from '@/hooks/components/BottomSheet/Filter/useDoctorFilter';

// dynamic import
const FilterListContainer = dynamic(() => import('@/components/BottomSheet/Content/Filter/List/Container'));

const DoctorFilter = () => {
  const {
    hospitalList,
    specializationsList,
    offerList,
    priceList,
    toggleSpecialist,
    toggleHospital,
    toggleFilterList,
    handleOfferFilter,
    handlePriceFilter,
    applyFilters,
    resetFilters
  } = useDoctorFilter();

  return (
    <>
      <div className="flex z-50 flex-col py-5 mx-4 space-y-4">
        <div className="flex justify-between">
          <span className="text-lg font-bold">Filter</span>
          <button
            className="py-1 px-2 text-sm font-bold text-main-darker bg-main-subtle rounded-full"
            onClick={resetFilters}
          >
            Atur Ulang
          </button>
        </div>
        <div className="overflow-auto space-y-4 hide-scrollbar" style={{ maxHeight: '60vh' }}>
          {/* specialist doctor */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between text-sm">
              <span className="text-sm font-bold">Dokter Spesialis</span>
              <button className="font-bold text-main-primary" onClick={() => toggleFilterList('SPECIALIST')}>
                Lihat Semua
              </button>
            </div>
            {/* specialization list (top 5) */}
            <div className="flex flex-wrap">
              {specializationsList?.slice(0, 5).map(item => (
                <button
                  key={item?.specialization_id}
                  className={`btn-filter${item.isSelected ? ' bg-main-subtle' : ''}`}
                  onClick={() => toggleSpecialist(item?.specialization_id)}
                >
                  {item?.name}
                </button>
              ))}
            </div>
          </div>
          {/* offers */}
          <div className="flex flex-col">
            <span className="text-sm font-bold">Penawaran</span>
            <div className="flex flex-wrap">
              {offerList.map(item => (
                <button
                  key={item?.value}
                  className={`btn-filter${item.isSelected ? ' bg-main-subtle' : ''}`}
                  onClick={() => handleOfferFilter(item?.value)}
                >
                  {item?.label}
                </button>
              ))}
            </div>
          </div>
          {/* price range */}
          <div className="flex flex-col">
            <span className="text-sm font-bold">Harga</span>
            <div className="flex flex-wrap">
              {priceList.map(item => (
                <button
                  key={item?.label}
                  className={`btn-filter${item.isSelected ? ' bg-main-subtle' : ''}`}
                  onClick={() => handlePriceFilter(item?.label, item?.min_price, item?.max_price)}
                >
                  {item?.label}
                </button>
              ))}
            </div>
          </div>
          {/* hospitals */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between text-sm">
              <span className="text-sm font-bold">Rumah Sakit</span>
              <button type="radio" className="font-bold text-main-primary" onClick={() => toggleFilterList('HOSPITAL')}>
                Lihat Semua
              </button>
            </div>
            {/* hospital list (top 5) */}
            <div className="flex flex-wrap">
              {hospitalList?.slice(0, 5).map(item => (
                <button
                  key={item?.hospital_id}
                  type="radio"
                  className={`btn-filter${item?.isSelected ? ' bg-main-subtle' : ''}`}
                  onClick={() => toggleHospital(item?.hospital_id)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <button onClick={applyFilters} className="py-3 mt-3 w-full font-bold text-white bg-main-primary rounded-md">
          Terapkan
        </button>
      </div>
      <FilterListContainer />
    </>
  );
};

export default DoctorFilter;
