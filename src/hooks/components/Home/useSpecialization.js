import { useEffect, useState } from 'react';

import getGroupWidgets from '@/services/GroupWidgets/getGroupWidgets';

const useGroupWidgets = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getGroupWidgets().then(resp => {
      setData(resp);
      setIsLoading(false);
    });
  }, []);

  return {
    data,
    isLoading
  };
};

export default useGroupWidgets;
