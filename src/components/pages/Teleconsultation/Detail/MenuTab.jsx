import React from 'react';

import Link from 'next/link';

const MenuTab = ({ activeTab, userId }) => {
  return (
    <div className="w-full bg-white">
      <div className="flex overflow-x-auto flex-row pt-2 space-x-3 text-sm text-center whitespace-nowrap hide-scrollbar">
        <Link passHref href={{ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'patient-data' } }}>
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'patient-data'
                ? 'font-semibold text-main-primary border-b-2 border-main-primary'
                : 'text-dark-2'
            }`}
          >
            <span>Data Pasien</span>
          </div>
        </Link>
        <Link passHref href={{ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'doctor-notes' } }}>
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'doctor-notes'
                ? 'font-semibold text-main-primary border-b-2 border-main-primary'
                : 'text-dark-2'
            }`}
          >
            <span>Catatan Dokter</span>
          </div>
        </Link>
        <Link
          passHref
          href={{ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'medical-document' } }}
        >
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'medical-document'
                ? 'font-semibold text-main-primary border-b-2 border-main-primary'
                : 'text-dark-2'
            }`}
          >
            <span>Dokumen Medis</span>
          </div>
        </Link>
        <Link passHref href={{ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'fee' } }}>
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'fee' ? 'font-semibold text-main-primary border-b-2 border-main-primary' : 'text-dark-2'
            }`}
          >
            <span>Biaya</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MenuTab;
