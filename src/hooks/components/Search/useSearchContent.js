import { useEffect, useState } from 'react';

import getSearchData from '@/services/Search/getSearchData';
import getSearchResult from '@/services/Search/getSearchResult';

const useSearchContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDefault, setIsDefault] = useState(true);
  const [data, setData] = useState({
    slug: '',
    results: [],
    meta: []
  });

  const getInitialData = async () => {
    await getSearchData().then(resp => {
      setData({ ...data, results: resp?.data, meta: resp?.meta });
      setIsDefault(true);
      setIsLoading(false);
    });
  };

  const getDataByKeyword = async () => {
    const keyword = data.slug;
    setIsLoading(true);
    await getSearchResult({ keyword }).then(resp => {
      setData({ ...data, results: resp?.data, meta: resp?.meta });
      setIsDefault(false);
      setIsLoading(false);
    });
  };

  const setKeyword = param => {
    setData({ ...data, slug: param });
  };

  const clearKeyword = () => {
    setData({ ...data, slug: '' });
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (data.slug === '') {
      getInitialData();
    } else {
      // timeout debounce
      const timeout = setTimeout(() => {
        getDataByKeyword();
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [data.slug]);

  return {
    data,
    isDefault,
    isLoading,
    setKeyword,
    clearKeyword
  };
};

export default useSearchContent;
