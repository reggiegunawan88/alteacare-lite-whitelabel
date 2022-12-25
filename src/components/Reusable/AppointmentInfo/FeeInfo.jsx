import React from 'react';

import formatIDR from '@/helpers/formatter/formatIDR';

const FeeInfo = ({ data, showCoverage }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex flex-row justify-between text-sm">
        <span className="font-semibold text-dark-1">Biaya Telekonsultasi</span>
      </div>
      <div className="flex flex-col space-y-3 rounded border-default border-light-3 shadow">
        <div className="flex flex-col py-2 px-4 space-y-3">
          {/* show original price */}
          {!showCoverage && (
            <div>
              <div className="flex flex-row justify-between items-center text-sm text-dark-3">
                <span>Biaya telekonsultasi dokter</span>
                <span>{data?.original_price?.formatted || formatIDR(data?.total_original_price)}</span>
              </div>
              <div className="w-full border-light-3"></div>
              {/* show discount price (if any) */}
              {(data?.discount_amount?.raw > 0 || data?.total_discount > 0) && (
                <>
                  <div className="flex flex-row justify-between items-center text-sm text-dark-3">
                    <span>Potongan Harga</span>
                    <span>-{data?.discount_amount?.formatted || formatIDR(data?.total_discount)}</span>
                  </div>
                  <div className={`w-full ${showCoverage ? 'border-b-default' : ''} border-light-3`}></div>
                </>
              )}
            </div>
          )}

          {showCoverage && (
            <div>
              {data?.billing_info?.map((billing, idx) => (
                <div key={idx} className="flex flex-col space-y-3">
                  <div className="font-bold text-black">{billing.name}</div>
                  {billing?.items?.map((detail, ids) => (
                    <div key={ids} className="flex flex-row justify-between items-center text-sm text-dark-3">
                      <span className="w-[230px] truncate">{detail.label}</span>
                      <span>{detail?.value}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
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
