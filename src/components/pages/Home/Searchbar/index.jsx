import React from 'react';

import Search from '@mui/icons-material/Search';
import Link from 'next/link';

import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';

const Searchbar = () => {
  const { theme } = useShallowEqualSelector({ name: 'whitelabelTheme', states: ['theme'] });
  return (
    <Link passHref={true} href={'/search'}>
      <button className="relative">
        <input
          disabled
          className="p-3 w-full h-10 rounded-full border-dark-1 outline-none shadow"
          style={{ backgroundColor: theme?.searchbar.color }}
        />
        <div className="flex absolute top-2 left-6 flex-row items-center space-x-2">
          <Search className="w-4 text-main-primary" />
          <p className="text-xxs text-dark-2">Cari berdasarkan keluhan, spesialis atau nama dokter</p>
        </div>
      </button>
    </Link>
  );
};

export default Searchbar;
