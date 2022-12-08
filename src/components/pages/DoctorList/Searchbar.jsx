import React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import FilterAlt from '@mui/icons-material/FilterAlt';
import Search from '@mui/icons-material/Search';
import { useRouter } from 'next/router';

const Searchbar = ({ toggleFilter, toggleSort, setKeyword }) => {
  const router = useRouter();

  return (
    <div className="flex flex-row items-center space-x-5">
      <button className="outline-none" onClick={() => router.replace('/')}>
        <ChevronLeft className="text-info-2" fontSize="large" />
      </button>
      <div className="relative grow">
        <input
          onChange={e => setKeyword(e.target.value)}
          type="text"
          className="py-3 px-10 search-input"
          defaultValue={router.query.keyword}
          placeholder="Pencarian"
        />
        <Search className="absolute top-2 left-3 w-5 text-main-primary" />
      </div>
      <button onClick={toggleFilter}>
        <FilterAlt className="text-main-primary" fontSize="medium" />
      </button>
      <button onClick={toggleSort}>
        <img alt="sort-icon" src="/assets/icons/utils/sort.svg" width="22" height="18" className="text-main-primary" />
      </button>
    </div>
  );
};

export default Searchbar;
