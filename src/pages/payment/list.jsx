import React from 'react';

import Div100vh from 'react-div-100vh';

import PaymentMethodCard from '@/components/Card/PaymentMethodCard';
import BackNavigation from '@/components/Reusable/BackNavigation';
import usePaymentList from '@/hooks/pages/Payment/usePaymentList';

const PaymentList = () => {
  const { paymentList, isLoading, choosePaymentMethod } = usePaymentList();
  if (isLoading) {
    return (
      <div className="h-full">
        <div className="flex flex-col grow p-4 space-y-4">
          <div className="flex flex-1 justify-center items-center">
            <span>Loading...</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <Div100vh className="flex flex-col">
      <BackNavigation title="Pilih Metode Pembayaran" />
      <div className="overflow-auto flex-1">
        <div className="flex flex-col py-5 px-4 space-y-4 text-sm text-dark-1">
          {paymentList.map(payment => (
            <div key={payment.id} className="flex flex-col space-y-3">
              <span>{payment.type}</span>
              {payment.payment_methods.map((item, idx) => (
                <PaymentMethodCard key={idx} data={item} choosePaymentMethod={choosePaymentMethod} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </Div100vh>
  );
};

export default PaymentList;
