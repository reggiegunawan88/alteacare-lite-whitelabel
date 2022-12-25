import React from 'react';

import useDoctorInformation from '@/hooks/components/DoctorDetail/useDoctorInformation';

const RefundInformation = ({ refundTerms }) => {
  const { openRefundTermsBottomSheet } = useDoctorInformation();
  return (
    <div className="flex flex-col space-y-3 text-xs leading-4">
      <div className="flex">
        <span className="font-bold">Ketentuan Pengembalian Dana &amp; Pembatalan</span>
      </div>
      <div
        className="flex flex-col text-dark-2"
        dangerouslySetInnerHTML={{
          __html:
            refundTerms?.text
              ?.split('</p>')[0] // take first paragraph
              .replace(/<strong>/g, '') // remove <strong> tag
              .replace(/<\/strong>/g, '') || '-'
        }}
      ></div>
      <div className="flex">
        <span className="text-xs text-info-3" onClick={() => openRefundTermsBottomSheet(refundTerms)}>
          Selengkapnya
        </span>
      </div>
    </div>
  );
};

export default RefundInformation;
