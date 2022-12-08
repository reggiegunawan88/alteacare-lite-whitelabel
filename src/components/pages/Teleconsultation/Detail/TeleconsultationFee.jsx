import React from 'react';

import Image from 'next/image';

const TeleconsultationFee = ({ data }) => {
  const billingInfo = data?.billing_info;
  return (
    <div className="flex flex-col">
      {/* teleconsultation fee detail */}
      {billingInfo?.map(info => (
        <div key={info?.payment_method?.id} className="flex flex-col">
          {/* fee name */}
          <div className="py-2 px-4 bg-light-2">
            <span className="text-sm font-semibold text-info-2">{info?.name}</span>
          </div>
          {/* fee sums */}
          <div className="flex flex-col text-sm text-dark-3 bg-white">
            {info?.items.map(item => (
              <div
                key={item?.label}
                className="flex flex-row justify-between items-center space-x-4"
                style={{
                  color: item?.text_color,
                  background: item?.bg_color,
                  fontWeight: item?.font_weight === 'BOLD' ? 'bold' : 'normal'
                }}
              >
                <span className="py-2 px-4">{item?.label}</span>
                <span className="py-2 px-4 whitespace-nowrap">{item?.value}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* payment method */}
      <div className="flex flex-col">
        <div className="py-2 px-4 bg-light-2">
          <span className="text-sm font-semibold text-info-2">Metode Pembayaran</span>
        </div>
        {billingInfo?.map(
          info =>
            info?.payment_method && (
              <div key={info?.name} className="flex flex-col py-3 px-4 space-y-2">
                <span className="text-sm font-semibold text-dark-2">{info?.name}</span>
                <div className="flex flex-row items-center space-x-2">
                  {info?.payment_method?.icon && (
                    <Image
                      alt="payment-method"
                      src={info?.payment_method?.icon || ''}
                      width="50"
                      height="30"
                      layout="fixed"
                      objectFit="contain"
                    />
                  )}
                  <span className="text-sm font-semibold text-info-2">{info?.payment_method?.type}</span>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TeleconsultationFee;
