import React from 'react';

import ChevronLeft from '@mui/icons-material/ChevronLeft';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

import MenuTab from '@/components/pages/Teleconsultation/Detail/MenuTab';
import useDetailTab from '@/hooks/pages/Teleconsultation/Detail/useDetailTab';
import useTeleconsultationDetail from '@/hooks/pages/Teleconsultation/Detail/useTeleconsultationDetail';

/* dynamic import to reduce bundle size */
const PatientData = dynamic(() => import('@/components/pages/Teleconsultation/Detail/PatientData'));
const DoctorNotes = dynamic(() => import('@/components/pages/Teleconsultation/Detail/DoctorNotes'));
const MedicalDocument = dynamic(() => import('@/components/pages/Teleconsultation/Detail/MedicalDocument'));
const Fee = dynamic(() => import('@/components/pages/Teleconsultation/Detail/TeleconsultationFee'));

const TeleconsultationDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { activeTab, handleActiveTab } = useDetailTab();
  const { data, loading, loadingBtn, getRoomDetail, remakeTeleconsultation } = useTeleconsultationDetail(id);
  if (loading) {
    return (
      <Div100vh className="flex justify-center items-center">
        <Image
          alt="loading_gif"
          src="/assets/gif/alteacare_loading.gif"
          layout="fixed"
          width={150}
          height={150}
          priority
        />
      </Div100vh>
    );
  }
  return (
    <Div100vh className="flex relative flex-col">
      {/* top navigation back btn */}
      <div className="w-full">
        <div className="flex relative justify-center items-center py-4 mx-6 bg-white">
          <button className="absolute left-0 outline-none" onClick={() => router.back({ shallow: true })}>
            <ChevronLeft className="text-info-2" fontSize="large" />
          </button>
          <p className="text-lg font-semibold text-center text-info-1">Detail Telekonsultasi</p>
        </div>
      </div>
      <MenuTab activeTab={activeTab} handleActiveTab={handleActiveTab} userId={id} />
      <div className="overflow-auto flex-1 pb-50 hide-scrollbar">
        {activeTab === 'patient-data' && (
          <PatientData
            data={data.results}
            loadingBtn={loadingBtn}
            getRoomDetail={getRoomDetail}
            remakeTeleconsultation={remakeTeleconsultation}
          />
        )}
        {activeTab === 'doctor-notes' && <DoctorNotes data={data.results} />}
        {activeTab === 'medical-document' && <MedicalDocument data={data.results} />}
        {activeTab === 'fee' && <Fee data={data.results} />}
      </div>
    </Div100vh>
  );
};

export default TeleconsultationDetail;
