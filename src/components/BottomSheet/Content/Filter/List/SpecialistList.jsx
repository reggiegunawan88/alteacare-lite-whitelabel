import React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';

import useSpecialistList from '@/hooks/components/BottomSheet/Filter/useSpecialistList';
import { closeFilterList, toggleSelectedSpecialist } from '@/store/slices/FilterList';

const SpecialistList = ({ list, searchResultList }) => {
  const dispatch = useDispatch();
  const { applySelectedSpecialist, searchSpecialistKeyword } = useSpecialistList();
  return (
    <div className="relative z-50 py-5 mx-4">
      <div className="flex overflow-hidden flex-col space-y-4">
        <div className="flex flex-row justify-between">
          <span className="text-lg font-bold">Dokter Spesialis</span>
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
              onChange={e => searchSpecialistKeyword(e.target.value)}
            />
            <SearchIcon className="absolute top-2 left-3 w-5 text-main-primary" />
          </div>
          {/* checkbox list */}
          <div className="overflow-auto pb-20 space-y-4 hide-scrollbar" style={{ maxHeight: '60vh' }}>
            {/* if length is equal, render original data list */}
            {list.length === searchResultList.length &&
              list.map(item => (
                <span key={item.specialization_id} className="flex flex-row justify-between items-center">
                  <label className="text-sm font-medium text-dark-1">{item.name}</label>
                  <input
                    name="specialist"
                    type="checkbox"
                    value={item.specialization_id}
                    checked={item.isSelected}
                    onChange={() => dispatch(toggleSelectedSpecialist(item.specialization_id))}
                    className="w-6"
                  />
                </span>
              ))}
            {/* if length is not equal, render filtered data list */}
            {list.length > searchResultList.length &&
              searchResultList.map(item => (
                <span key={item.specialization_id} className="flex flex-row justify-between items-center">
                  <label className="text-sm font-medium text-dark-1">{item.name}</label>
                  <input
                    name="specialist"
                    type="checkbox"
                    value={item.specialization_id}
                    checked={item.isSelected}
                    onChange={() => dispatch(toggleSelectedSpecialist(item.specialization_id))}
                    className="w-6"
                  />
                </span>
              ))}
          </div>
        </div>
      </div>
      <button
        className="absolute bottom-0 py-3 mb-5 w-full font-bold text-white bg-main-primary rounded-md"
        onClick={applySelectedSpecialist}
      >
        Terapkan
      </button>
    </div>
  );
};

export default SpecialistList;
