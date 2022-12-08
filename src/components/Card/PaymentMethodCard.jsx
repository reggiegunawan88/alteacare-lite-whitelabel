import React from 'react';

import Image from 'next/image';

const PaymentMethodCard = ({ data, choosePaymentMethod }) => {
  const { name, icon, description, code } = data;
  return (
    <div className="rounded border-default border-light-3 shadow-md" onClick={() => choosePaymentMethod(code)}>
      <div className="flex flex-col">
        <div className="border-b-default border-light-3">
          <div className="flex flex-row items-center py-2 px-4 space-x-2 text-left">
            <Image alt={name} src={icon} layout="fixed" width="45" height="20" loading="lazy" objectFit="contain" />
            <span className="text-sm font-semibold text-dark-1">{name}</span>
          </div>
        </div>
        <div className="py-2 px-4 text-left">
          <span className="text-xs font-medium text-dark-3">{description}</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
