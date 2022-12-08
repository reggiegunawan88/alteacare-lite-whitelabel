import React from 'react';

import Search from '@mui/icons-material/Search';
import Link from 'next/link';

const Searchbar = () => {
  return (
    <div className="flex flex-col pb-3 text-center">
      <p className="py-4 text-lg font-semibold text-info-1">Dokter Spesialis</p>
      <Link passHref={true} href={'/search'}>
        <button className="relative">
          <input disabled className="p-3 w-full h-10 bg-light-2 rounded-full border-dark-1 outline-none shadow" />
          <div className="flex absolute top-2 left-6 flex-row items-center space-x-2">
            <Search className="w-4 text-main-primary" />
            <p className="text-xxs text-dark-2">Cari berdasarkan keluhan, spesialis atau nama dokter</p>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Searchbar;
