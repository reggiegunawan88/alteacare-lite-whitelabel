import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import useSearchSymptomList from '@/hooks/pages/Search/useSearchSymptomList';
import SearchResultLayout from '@/layouts/SearchResult';

const SymptomSearch = () => {
  const { keyword, data } = useSearchSymptomList();
  if (!data) {
    return (
      <div className="flex justify-center items-center h-full bg-white">
        <Image
          alt="loading_gif"
          src="/assets/gif/alteacare_loading.gif"
          layout="fixed"
          width={150}
          height={150}
          priority
        />
      </div>
    );
  }
  return (
    <div className="flex flex-col mx-4 space-y-5">
      <p className="text-xs text-info-2">
        Menampilkan 1-{data?.length || '...'} gejala dan diagnosis untuk <b>“{keyword}“</b>
      </p>
      <ul className="flex flex-col pb-3 space-y-5">
        {data?.map(item => (
          <Link key={item.id} passHref href={`/doctor/list?keyword=${encodeURIComponent(item.name)}`}>
            <span key={item.id} className="text-sm text-dark-1">
              {item?.name}
            </span>
          </Link>
        ))}
      </ul>
    </div>
  );
};

SymptomSearch.getLayout = page => {
  return <SearchResultLayout title="Gejala dan Diagnosis">{page}</SearchResultLayout>;
};

export default SymptomSearch;
