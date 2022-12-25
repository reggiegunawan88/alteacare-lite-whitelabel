import React, { useEffect, useState } from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';

import parseJwt from '@/helpers/parser/jwtParser';

const ChevronLeft = dynamic(() => import('@mui/icons-material/ChevronLeft'));
const FilterAlt = dynamic(() => import('@mui/icons-material/FilterAlt'));
const Search = dynamic(() => import('@mui/icons-material/Search'));

const Searchbar = ({ toggleFilter, toggleSort, setKeyword }) => {
  const [jwt, setJwt] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setJwt(parseJwt());
  }, []);

  return (
    <div className="flex flex-row items-center space-x-5">
      {jwt?.additionalData?.filterdoctor ? (
        <button className="outline-none" onClick={() => router.push('/teleconsultation/ongoing')}>
          <div className="flex flex-col items-center space-y-1">
            <Image
              alt="nav-icon"
              src="/assets/icons/navigation/tele-active.svg"
              width={20}
              height={20}
              layout="fixed"
              className="text-main-primary"
            />

            <span className="text-xxs text-main-primary">Riwayat</span>
          </div>
        </button>
      ) : (
        <button className="outline-none" onClick={() => router.replace('/')}>
          <ChevronLeft className="text-info-2" fontSize="large" />
        </button>
      )}
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
