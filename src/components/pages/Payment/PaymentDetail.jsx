import React from 'react';

import Image from 'next/image';

const PaymentDetail = () => {
  return (
    <div className="flex flex-col space-y-2">
      {/* payment detail */}
      <div className="flex flex-col py-3 space-y-2 text-center rounded border-default border-light-2">
        <span className="text-xs text-dark-2">Batas Akhir Pembayaran</span>
        <span className="text-sm font-semibold text-info-2">Rabu, 12 Des 2020 08:08</span>
        <span className="text-xl font-bold text-orange">02:08:01</span>
      </div>
      {/* payment account */}
      <div className="flex flex-col text-center rounded border-default border-light-2">
        <div className="flex flex-row py-3 px-4 space-x-2 border-b-default border-light-2">
          <Image
            alt="virtual-account-logo"
            src="/assets/images/payment/logo-bri.svg"
            layout="fixed"
            width="30"
            height="20"
            loading="lazy"
          />
          <span className="text-sm font-semibold text-dark-1">BRI - Virtual Account</span>
        </div>
        <div className="flex flex-col p-4 space-y-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col space-y-1 text-left">
              <span className="text-xs text-dark-2">Nomor Virtual Account</span>
              <span className="text-sm font-bold text-info-2">8077081234567890</span>
            </div>
            <span className="text-xs font-semibold text-main-primary">Salin</span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col space-y-1 text-left">
              <span className="text-xs text-dark-2">Total Pembayaran</span>
              <span className="text-sm font-bold text-info-2">IDR 215.000</span>
            </div>
            <span className="text-xs font-semibold text-main-primary">Salin</span>
          </div>
        </div>
      </div>
      {/* notes */}
      <div className="leading-3 text-center">
        <span className="text-xs text-dark-2">
          Pastikan untuk tidak menginformasikan bukti dan data pembayaran <b>Kepada Pihak Manapun </b> kecuali
          Alteacare.
        </span>
      </div>
    </div>
  );
};

export default PaymentDetail;
