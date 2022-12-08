import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const NavigationTab = () => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-3 text-sm text-center">
      <Link passHref href="/teleconsultation/ongoing">
        <div
          className={`pb-2 ${
            router.pathname.includes('ongoing')
              ? 'font-semibold text-main-primary border-b-2 border-main-primary'
              : 'border-b-2 text-dark-2 border-dark-4'
          }`}
        >
          <span>Berjalan</span>
        </div>
      </Link>
      <Link passHref href="/teleconsultation/history">
        <div
          className={`pb-2 ${
            router.pathname.includes('history')
              ? 'font-semibold text-main-primary border-b-2 border-main-primary'
              : 'border-b-2 text-dark-2 border-dark-4'
          }`}
        >
          <span>Riwayat</span>
        </div>
      </Link>
      <Link passHref href="/teleconsultation/canceled">
        <div
          className={`pb-2 ${
            router.pathname.includes('canceled')
              ? 'font-semibold text-main-primary border-b-2 border-main-primary'
              : 'border-b-2 text-dark-2 border-dark-4'
          }`}
        >
          <span>Dibatalkan</span>
        </div>
      </Link>
    </div>
  );
};

export default NavigationTab;
