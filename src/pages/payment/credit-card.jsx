import React from 'react';

import Div100vh from 'react-div-100vh';

import CreditCardField from '@/components/pages/Payment/CreditCard';
import BackNavigation from '@/components/Reusable/BackNavigation';

const CreditCard = () => {
  return (
    <Div100vh>
      <BackNavigation title="Kartu Kredit" />
      <div className="overflow-auto flex-1">
        <div className="flex relative flex-col p-4 space-y-4 h-full">
          <span className="text-sm leading-4 text-center text-dark-1">
            Lengkapi informasi kartu kredit untuk menyelesaikan pembayaran telekonsultasi.
          </span>
          <CreditCardField />
        </div>
      </div>
    </Div100vh>
  );
};

export default CreditCard;
