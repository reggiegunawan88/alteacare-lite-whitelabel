import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import getSpecialistSearchResult from '@/services/Search/getSpecialistSearchResult';

const useSearchSpecialistList = () => {
  const router = useRouter();
  const { keyword } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (router.isReady) {
      getSpecialistSearchResult({ keyword }).then(resp => {
        setData(resp.data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);

  return {
    data,
    keyword
  };
};

export default useSearchSpecialistList;
