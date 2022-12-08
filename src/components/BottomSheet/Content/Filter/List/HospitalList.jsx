import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import useHospitalList from '@/hooks/components/BottomSheet/Filter/useHospitalList';
import { closeFilterList, toggleSelectedHospital } from '@/store/slices/FilterList';

const HospitalList = ({ list, searchResultList }) => {
  const dispatch = useDispatch();
  const { applySelectedHospital, searchHospitalKeyword } = useHospitalList();
  return (
    <div className="relative z-50 py-5 mx-4">
      <div className="flex overflow-hidden flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <span className="text-lg font-bold">Rumah Sakit</span>
          <button onClick={() => dispatch(closeFilterList())}>
            <CloseIcon fontSize="medium" />
          </button>
        </div>
        {/* content list */}
        <div className="flex flex-col mx-5 space-y-4">
          {/* searchbar */}
          <div className="relative">
            <input
              type="text"
              className="py-3 px-11 search-input"
              placeholder="Pencarian"
              onChange={e => searchHospitalKeyword(e.target.value)}
            />
            <SearchIcon className="absolute top-2 left-3 w-5 text-main-primary" />
          </div>
          {/* checkbox list */}
          <div className="overflow-auto pb-20 space-y-4 hide-scrollbar" style={{ maxHeight: '60vh' }}>
            {/* if length is equal, render original array list */}
            {list.length === searchResultList.length &&
              list.map(item => (
                <span key={item.hospital_id} className="flex flex-row justify-between items-center">
                  <label className="text-sm font-medium text-dark-1">{item.name}</label>
                  <input
                    name="hospital"
                    type="checkbox"
                    className="w-6"
                    value={item.hospital_id}
                    checked={item.isSelected}
                    onChange={() => dispatch(toggleSelectedHospital(item.hospital_id))}
                  />
                </span>
              ))}
            {/* if length is not equal, render filtered data list */}
            {list.length > searchResultList.length &&
              searchResultList.map(item => (
                <span key={item.hospital_id} className="flex flex-row justify-between items-center">
                  <label className="text-sm font-medium text-dark-1">{item.name}</label>
                  <input
                    name="hospital"
                    type="checkbox"
                    className="w-6"
                    value={item.hospital_id}
                    checked={item.isSelected}
                    onChange={() => dispatch(toggleSelectedHospital(item.hospital_id))}
                  />
                </span>
              ))}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-0 py-3 mb-5 w-full font-bold text-white bg-main-primary rounded-md"
        onClick={applySelectedHospital}
      >
        Terapkan
      </button>
    </div>
  );
};

export default HospitalList;
