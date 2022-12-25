import React from 'react';

import FilterAlt from '@mui/icons-material/FilterAlt';
import Search from '@mui/icons-material/Search';

const Searchbar = ({ showBottomSheetSort, showBottomSheetFamily, setKeyword }) => {
  return (
    <div className="flex flex-row justify-between items-center space-x-6">
      <div className="relative">
        <input
          type="text"
          className="py-3 pr-9 pl-12 search-input"
          placeholder="Pencarian"
          onChange={e => setKeyword(e.target.value)}
        />
        <Search className="absolute top-2 left-3 w-4 text-main-primary" />
      </div>
      <div className="flex flex-row space-x-5">
        <button onClick={showBottomSheetFamily}>
          <FilterAlt className="text-main-primary" fontSize="medium" />
        </button>
        <button onClick={showBottomSheetSort}>
          <img
            alt="sort-icon"
            src="/assets/icons/utils/sort.svg"
            width="22"
            height="18"
            className="text-main-primary"
          />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
