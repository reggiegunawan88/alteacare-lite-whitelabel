import React from 'react';

import { useRouter } from 'next/router';

const MenuTab = ({ activeTab, userId }) => {
  const router = useRouter();
  return (
    <div className="w-full bg-white">
      <div className="flex overflow-x-auto flex-row pt-2 space-x-3 text-sm text-center whitespace-nowrap hide-scrollbar">
        {/* patient data tab */}
        <button
          onClick={() =>
            router.replace({ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'patient-data' } })
          }
        >
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'patient-data'
                ? 'font-semibold text-main-primary border-b-2 border-main-primary'
                : 'text-dark-2'
            }`}
          >
            <span>Data Pasien</span>
          </div>
        </button>
        {/* doctor notes tab */}
        <button
          onClick={() =>
            router.replace({ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'doctor-notes' } })
          }
        >
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'doctor-notes'
                ? 'font-semibold text-main-primary border-b-2 border-main-primary'
                : 'text-dark-2'
            }`}
          >
            <span>Catatan Dokter</span>
          </div>
        </button>
        {/* medical document tab */}
        <button
          onClick={() =>
            router.replace({
              pathname: '/teleconsultation/detail/[id]',
              query: { id: userId, tab: 'medical-document' }
            })
          }
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
        </button>
        {/* teleconsultation fee tab */}
        <button
          onClick={() =>
            router.replace({ pathname: '/teleconsultation/detail/[id]', query: { id: userId, tab: 'fee' } })
          }
        >
          <div
            className={`pb-1 px-1.5 ${
              activeTab === 'fee' ? 'font-semibold text-main-primary border-b-2 border-main-primary' : 'text-dark-2'
            }`}
          >
            <span>Biaya</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MenuTab;
