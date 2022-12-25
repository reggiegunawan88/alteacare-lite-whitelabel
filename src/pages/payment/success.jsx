import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Div100vh from 'react-div-100vh';

import DefaultLayout from '@/layouts/Default';

const PaymentSuccess = () => {
  return (
    <Div100vh className="relative mx-auto max-w-sm">
      <div className="flex items-center h-screen bg-gradient-blue">
        <div className="flex flex-col items-center mx-4 space-y-8 text-center">
          <Image
            alt="payment-success"
            src="/assets/images/payment/payment-success.svg"
            width="185"
            height="141"
            layout="fixed"
            loading="lazy"
          />
          <div className="flex flex-col space-y-2 text-dark-1">
            <span className="text-lg font-bold">Pembayaran Berhasil</span>
            <p className="text-sm leading-4">
              Terima kasih. Pembayaran anda telah kami terima. Silahkan menunggu jadwal konsultasi.
            </p>
          </div>
        </div>
      </div>
      <Link passHref href="/teleconsultation/ongoing">
        <div className="absolute bottom-0 px-4 mb-10 w-full">
          <button className="w-full btn-primary">Lihat Konsultasi Saya</button>
        </div>
      </Link>
    </Div100vh>
  );
};

PaymentSuccess.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default PaymentSuccess;
