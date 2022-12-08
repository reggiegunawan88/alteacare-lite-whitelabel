import React from 'react';

import CancelIcon from '@mui/icons-material/Cancel';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Search from '@mui/icons-material/Search';
import Link from 'next/link';

const Searchbar = ({ keyword, setKeyword, clearKeyword }) => {
  return (
    <div className="flex flex-row items-center mx-6 space-x-4">
      <Link passHref={true} href="/">
        <button className="outline-none">
          <ChevronLeft className="font-bold text-info-2" fontSize="large" />
        </button>
      </Link>
      <div className="relative grow">
        <input
          type="text"
          className="py-3 px-10 search-input"
          placeholder="Tulis keluhan atau nama dokter"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
        <Search className="absolute top-2 left-3 w-5 text-main-primary" />
        {keyword && (
          <button className="outline-none" onClick={clearKeyword}>
            <CancelIcon className="absolute top-2 right-3 w-5 text-dark-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
