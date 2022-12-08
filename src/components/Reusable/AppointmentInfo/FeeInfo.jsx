import React from 'react';

import formatIDR from '@/helpers/formatter/formatIDR';

const FeeInfo = ({ data }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-between text-sm">
        <span className="font-semibold text-dark-1">Biaya Telekonsultasi</span>
      </div>
      <div className="flex flex-col space-y-3 rounded border-default border-light-3 shadow">
        <div className="flex flex-col py-2 px-4 space-y-3">
          {/* show original price */}
          <div className="flex flex-row justify-between items-center text-sm text-dark-3">
            <span>Biaya telekonsultasi dokter</span>
            <span>{data?.original_price?.formatted || formatIDR(data?.total_original_price)}</span>
          </div>
          <div className="w-full border-b-default border-light-3"></div>
          {/* show discount price (if any) */}
          {(data?.discount_amount?.raw > 0 || data?.total_discount > 0) && (
            <>
              <div className="flex flex-row justify-between items-center text-sm text-dark-3">
                <span>Potongan Harga</span>
                <span>-{data?.discount_amount?.formatted || formatIDR(data?.total_discount)}</span>
              </div>
              <div className="w-full border-b-default border-light-3"></div>
            </>
          )}
          <div className="flex flex-row justify-between items-center text-sm text-dark-3">
            {/* change later, if insurance coverage is available */}
            <span>Potongan Asuransi</span>
            <span>0</span>
          </div>
        </div>
        <div className="py-2 px-4 bg-main-subtle">
          <div className="flex flex-row justify-between items-center font-bold text-info-2">
            <p>Harga Total</p>
            {data?.final_price?.raw === 0 || data?.total_price === 0 ? (
              <span>Gratis</span>
            ) : (
              <span>{data?.final_price?.formatted || formatIDR(data?.total_price)}</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeInfo;
