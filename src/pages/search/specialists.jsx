import React from 'react';

import Image from 'next/image';

import Symptoms from '@/components/Card/SymptomsCard';
import useSearchSpecialistList from '@/hooks/pages/Search/useSearchSpecialistList';
import SearchResultLayout from '@/layouts/SearchResult';

const SpecialistSearch = () => {
  const { keyword, data } = useSearchSpecialistList();
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
      <p className="text-xs text-center text-info-2">
        Menampilkan 1-{data?.length || '...'} Rekomendasi Dokter Spesialis untuk <b>“{keyword}”</b>
      </p>
      <div className="grid grid-cols-3 gap-2 pb-3 hide-scrollbar">
        {data?.map(item => (
          <Symptoms key={item.specialization_id} data={item} query={`specializations[]=${item.specialization_id}`} />
        ))}
      </div>
    </div>
  );
};

SpecialistSearch.getLayout = page => {
  return <SearchResultLayout title="Rekomendasi Spesialis">{page}</SearchResultLayout>;
};

export default SpecialistSearch;
