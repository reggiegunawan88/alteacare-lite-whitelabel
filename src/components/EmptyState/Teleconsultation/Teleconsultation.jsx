import React from 'react';

const TeleconsultationEmptyState = () => {
  return (
    <div className="py-12 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center space-y-4 text-dark-4">
        <img
          alt="teleconsultation-empty"
          src="/assets/icons/teleconsultation/teleconsul-empty.svg"
          width="27"
          height="32"
        />
        <span className="text-xs">Tidak ada telekonsultasi di sini</span>
      </div>
    </div>
  );
};

export default TeleconsultationEmptyState;
