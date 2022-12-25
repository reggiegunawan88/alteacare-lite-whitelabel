import React, { useState } from 'react';

import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';

const PaymentGuide = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const toggleAccordion = idx => {
    setActiveIdx(idx);
  };
  return (
    <div className="flex flex-col mt-5 space-y-8">
      <span className="text-sm font-semibold text-info-2">Panduan Pembayaran</span>
      <div className="flex flex-col space-y-2">
        {[...Array(3)].map((val, idx) => (
          <div key={idx}>
            {/* accordion btn */}
            <div
              className="flex flex-row justify-between pb-2 border-b-default border-light-2"
              index={idx}
              onClick={() => toggleAccordion(idx)}
            >
              <span className="text-sm font-bold text-info-2">ATM BCA</span>
              {activeIdx === idx ? (
                <KeyboardArrowUp className="text-main-primary" fontSize="medium" />
              ) : (
                <KeyboardArrowDown className="text-main-primary" fontSize="medium" />
              )}
            </div>
            {/* accordion content */}
            {activeIdx === idx && (
              <div className="flex overflow-hidden flex-col my-3 space-y-7 transition-all ease-out">
                <div className="flex flex-row items-center space-x-3">
                  <span className="py-1 px-2 text-xxs bg-light-3 rounded-lg border-default border-light-2">1</span>
                  <span className="text-sm text-dark-1">
                    Masuk ke <b>menu utama</b>
                  </span>
                </div>
                <div className="flex flex-row items-center space-x-3">
                  <span className="py-1 px-2 text-xxs bg-light-3 rounded-lg border-default border-light-2">2</span>
                  <span className="text-sm text-dark-1">
                    Pilih <b>menu lainnya</b>
                  </span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentGuide;
