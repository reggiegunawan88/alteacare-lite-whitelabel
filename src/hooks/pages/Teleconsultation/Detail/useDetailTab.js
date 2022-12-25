import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

const useDetailTab = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('patient-data');

  useEffect(() => {
    setActiveTab(router.query.tab);
  }, [router.query]);

  return {
    activeTab
  };
};

export default useDetailTab;
