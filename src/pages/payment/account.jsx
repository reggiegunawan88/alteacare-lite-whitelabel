import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

const Account = () => {
  const router = useRouter();
  const { asPath } = router;
  if (!router.isReady) {
    return (
      <Div100vh className="flex justify-center items-center">
        <div className="flex">
          <span className="text-lg font-semibold text-dark-1">Loading...</span>
        </div>
      </Div100vh>
    );
  }
  return (
    <Div100vh className="flex relative flex-col">
      {!asPath.includes('altea_free_consultation') && (
        <div className="flex flex-col p-4 space-y-6 text-center">
          <span className="text-lg font-semibold text-info-1">Selesaikan Pembayaran</span>
          <span className="text-sm leading-4 text-dark-1">
            Segera lakukan pembayaran sebelum batas akhir untuk menyelesaikan pemesanan telekonsultasi
          </span>
        </div>
      )}
      <div className="flex-1">
        <iframe
          allow="clipboard-read; clipboard-write"
          loading="lazy"
          width="100%"
          height="100%"
          src={asPath.slice(21)}
        ></iframe>
      </div>
      <div className="p-3">
        <Link passHref href="/teleconsultation/ongoing">
          <button className="w-full btn-primary">OK</button>
        </Link>
      </div>
    </Div100vh>
  );
};

export default Account;
