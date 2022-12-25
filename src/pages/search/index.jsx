import React from 'react';

import dynamic from 'next/dynamic';

import Searchbar from '@/components/pages/Search/Searchbar';
import useSearchContent from '@/hooks/components/Search/useSearchContent';
import DefaultLayout from '@/layouts/Default';

const SearchContent = dynamic(() => import('@/components/pages/Search/SearchContent'));

const Search = () => {
  const { data, isDefault, isLoading, setKeyword, clearKeyword } = useSearchContent();
  return (
    <div className="flex flex-col space-y-5">
      <div className="sticky top-0 z-10 py-2 w-full bg-white">
        <Searchbar keyword={data?.slug} setKeyword={setKeyword} clearKeyword={clearKeyword} />
      </div>
      <div className="flex-1 pb-20 mx-8">
        <SearchContent
          data={data?.results}
          meta={data?.meta}
          keyword={data?.slug}
          isLoading={isLoading}
          isDefault={isDefault}
        />
      </div>
    </div>
  );
};

Search.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Search;
