import React from 'react';

import dynamic from 'next/dynamic';

import TeleconsultationCard from '@/components/Card/TeleconsultationCard';

const AppointmentList = ({ data, elementRef }) => {
  // loading state
  if (data?.loading) {
    const TeleconsultationListLoader = dynamic(() =>
      import('@/components/SkeletonLoader/Teleconsultation/TeleconsultationListLoader')
    );
    return <TeleconsultationListLoader />;
  }
  // empty state
  if (!data?.results?.length) {
    const TeleconsultationEmptyState = dynamic(() =>
      import('@/components/EmptyState/Teleconsultation/Teleconsultation')
    );
    return (
      <div className="p-5">
        <TeleconsultationEmptyState />
      </div>
    );
  }
  return (
    <div className="overflow-auto py-3 px-4 hide-scrollbar">
      <div className="grid grid-flow-row space-y-4">
        {data?.results?.map(row => (
          <TeleconsultationCard key={row.id} data={row} status={row.status} elementRef={elementRef} />
        ))}
      </div>
    </div>
  );
};

export default AppointmentList;
