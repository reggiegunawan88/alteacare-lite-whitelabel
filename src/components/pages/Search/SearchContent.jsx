import React from 'react';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import Doctor from './Doctor';

const SearchContent = ({ data, meta, keyword, isDefault, isLoading }) => {
  if (isLoading) {
    const DynamicSearchLoader = dynamic(() => import('@/components/SkeletonLoader/Search/SearchContentLoader'));
    return <DynamicSearchLoader />;
  }
  return (
    <div className="flex flex-col space-y-5 text-main-darker">
      {/* symptoms recommendation */}
      {data?.symtom?.length > 0 && (
        <>
          <p className="text-sm font-bold">Gejala dan Diagnosis</p>
          <ul className="space-y-5">
            {data?.symtom?.map(item => (
              <Link passHref={true} href={`/doctor/list?keyword=${encodeURIComponent(item.name)}`} key={item.id}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
          {meta?.total_symtom > 5 && !isDefault && (
            <Link passHref href={`/search/symptoms?keyword=${keyword}`}>
              <button className="w-full btn-primary-border">Lihat Gejala dan Diagnosis Lainnya</button>
            </Link>
          )}
        </>
      )}
      {/* specialist recommendation */}
      {data?.specialization?.length > 0 && (
        <>
          <p className="text-sm font-bold">Rekomendasi Dokter Spesialis </p>
          <ul className="space-y-5">
            {data.specialization.map(item => (
              <Link
                passHref={true}
                href={`/doctor/list?specializations[]=${item.specialization_id}`}
                key={item.specialization_id}
              >
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
          {meta?.total_specialization > 5 && !isDefault && (
            <Link passHref href={`/search/specialists?keyword=${keyword}`}>
              <button className="w-full btn-primary-border">Lihat Rekomendasi Dokter Spesialis</button>
            </Link>
          )}
        </>
      )}
      {/* doctors recommendation */}
      {data?.doctor?.length > 0 && (
        <>
          <p className="text-sm font-bold">Rekomendasi Dokter</p>
          <ul className="space-y-5">
            {data?.doctor?.map(item => (
              <Doctor key={item.doctor_id} data={item} />
            ))}
          </ul>
          {meta?.total_doctor > 5 && !isDefault && (
            <Link passHref href="/doctor/list">
              <button className="w-full btn-primary-border">Lihat Rekomendasi Dokter Lainnya</button>
            </Link>
          )}
        </>
      )}
    </div>
  );
};

export default SearchContent;
