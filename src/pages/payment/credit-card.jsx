import React from 'react';

import CreditCardField from '@/components/pages/Payment/CreditCard';
import BackNavLayout from '@/layouts/BackNav';

const CreditCard = () => {
  return (
    <div className="flex relative flex-col p-4 space-y-4 h-full">
      <span className="text-sm leading-4 text-center text-dark-1">
        Lengkapi informasi kartu kredit untuk menyelesaikan pembayaran telekonsultasi.
      </span>
      <CreditCardField />
    </div>
  );
};

CreditCard.getLayout = page => {
  return <BackNavLayout title="Kartu Kredit">{page}</BackNavLayout>;
};

export default CreditCard;
