import React from 'react';

import Image from 'next/image';

const usePaymentMethodCard = ({ type }) => {
  const renderPayment = () => {
    if (type === 'CC') {
      return (
        <div className="flex flex-row items-center py-2 px-4 space-x-2">
          <Image
            alt="payment-method"
            src="/assets/images/payment/logo-visa.svg"
            layout="fixed"
            width="30"
            height="20"
            loading="lazy"
          />
          <Image
            alt="payment-method"
            src="/assets/images/payment/logo-mastercard.svg"
            layout="fixed"
            width="30"
            height="20"
            loading="lazy"
          />
          <span className="text-sm font-semibold text-dark-1">Kartu Kredit</span>
        </div>
      );
    }
    return (
      <div className="flex flex-row items-center py-2 px-4 space-x-2">
        <Image
          alt="payment-method"
          src="/assets/images/payment/logo-bri.svg"
          layout="fixed"
          width="30"
          height="20"
          loading="lazy"
        />
        <span className="text-sm font-semibold text-dark-1">BRI - Virtual Account</span>
      </div>
    );
  };
  return {
    renderPayment
  };
};

export default usePaymentMethodCard;
