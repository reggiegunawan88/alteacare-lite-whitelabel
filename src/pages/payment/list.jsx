import React from 'react';

import PaymentMethodCard from '@/components/Card/PaymentMethodCard';
import usePaymentList from '@/hooks/pages/Payment/usePaymentList';
import BackNavLayout from '@/layouts/BackNav';

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
  );
};

PaymentList.getLayout = page => {
  return <BackNavLayout title="Pilih Metode Pembayaran">{page}</BackNavLayout>;
};

export default PaymentList;
