import React from 'react';

const TeleconsultationListLoader = () => {
  return (
    <div className="py-3 px-4">
      <div className="grid grid-flow-row space-y-6">
        {[...Array(5)].map((val, idx) => (
          <div key={idx} className="h-40 bg-dark-4 rounded-md animate-pulse"></div>
        ))}
      </div>
    </div>
  );
};

export default TeleconsultationListLoader;
