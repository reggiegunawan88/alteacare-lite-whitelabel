import React from 'react';

import Div100vh from 'react-div-100vh';

import TransactionStatus from '@/components/pages/Transaction/Status/TransactionStatus';
import BackNavigation from '@/components/Reusable/BackNavigation';

const TransactionLayout = props => {
  const { children } = props;
  return (
    <Div100vh className="flex relative flex-col">
      {/* title section */}
      <BackNavigation title="Rincian Telekonsultasi" />
      {/* transaction progress status */}
      <TransactionStatus />
      {/* content section */}
      <div className="overflow-auto flex-1 bg-white hide-scrollbar">{children}</div>
    </Div100vh>
  );
};

export default TransactionLayout;
