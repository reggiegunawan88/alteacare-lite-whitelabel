import React from 'react';

import dynamic from 'next/dynamic';

const DoctorNotesEmptyState = dynamic(() => import('@/components/EmptyState/Teleconsultation/DoctorNotes'));

const DoctorNotes = ({ data }) => {
  return (
    <>
      {data?.medical_resume === null ? (
        <DoctorNotesEmptyState />
      ) : (
        <div className="flex flex-col space-y-2 bg-light-4">
          <div className="flex flex-col p-4 space-y-2 bg-white">
            <span className="text-sm font-bold text-dark-1">Keluhan</span>
            <p className="text-sm leading-4 text-dark-2">{data?.medical_resume?.symptom}</p>
          </div>
          <div className="flex flex-col p-4 space-y-2 bg-white">
            <span className="text-sm font-bold text-dark-1">Diagnosis</span>
            <p className="text-sm leading-4 text-dark-2"> {data?.medical_resume?.diagnosis}</p>
          </div>
          <div className="flex flex-col p-4 space-y-2 bg-white">
            <span className="text-sm font-bold text-dark-1">Resep Obat</span>
            <p className="text-sm leading-4 text-dark-2">{data?.medical_resume?.drug_resume}</p>
          </div>
          <div className="flex flex-col p-4 space-y-2 bg-white">
            <span className="text-sm font-bold text-dark-1">Pemeriksaan Penunjang</span>
            <ul className="text-sm leading-4 text-dark-2">{data?.medical_resume?.additional_resume}</ul>
          </div>
          <div className="flex flex-col p-4 space-y-2 bg-white">
            <span className="text-sm font-bold text-dark-1">Catatan</span>
            <p className="text-sm leading-4 text-dark-2">{data?.medical_resume?.notes}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorNotes;
