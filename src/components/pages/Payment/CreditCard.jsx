import React from 'react';

import Link from 'next/link';

const CreditCardField = () => {
  return (
    <div className="relative h-full">
      <div className="flex flex-col space-y-4 text-sm text-dark-1">
        {/* price sum */}
        <div className="p-4 bg-main-subtle rounded">
          <div className="flex flex-row justify-between items-center text-sm font-bold text-info-2">
            <span>Harga Total</span>
            <span>Rp215.000</span>
          </div>
        </div>
        {/* cc number */}
        <div className="flex flex-col space-y-1">
          <span className="font-semibold">Nomor Kartu Kredit</span>
          <input
            type="text"
            className="p-4 h-13 rounded border-default border-light-1 outline-none"
            placeholder="4210 •••• •••• •••• ••••"
          />
        </div>
        {/* cc expired date */}

        <div className="flex flex-row space-x-4">
          <div className="flex-col flex-1 space-y-1">
            <span className="font-semibold">Masa Berlaku</span>
            <input
              type="text"
              className="p-4 w-full h-13 rounded border-default border-light-1 outline-none"
              placeholder="MM/YY"
            />
          </div>
          <div className="flex-col flex-1 space-y-1">
            <span className="font-semibold">CVV</span>
            <input type="text" className="p-4 w-full h-13 rounded border-default border-light-1 outline-none" />
          </div>
        </div>
      </div>
      {/* btn continue */}
      <Link passHref href="/payment/success">
        <button className="absolute bottom-0 w-full btn-primary">Lanjut</button>
      </Link>
    </div>
  );
};

export default CreditCardField;
