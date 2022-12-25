import React from 'react';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import Div100vh from 'react-div-100vh';

import HomeNavigation from '@/components/HomeNavigation';
import NavigationTab from '@/components/pages/Teleconsultation/NavigationTab';
import PageTransition from '@/components/Transition/PageTransition';
import parseJwt from '@/helpers/parser/jwtParser';

const ChevronLeft = dynamic(() => import('@mui/icons-material/ChevronLeft'));

const TeleconsultationLayout = ({ children }) => {
  const jwt = parseJwt();
  const router = useRouter();
  return (
    <Div100vh className="flex relative flex-col">
      {/* teleconsultation top menu content */}
      <div className="absolute top-0 z-10 pt-3 w-full text-center bg-white">
        <div className="flex justify-center items-center py-4 mx-6 bg-white">
          {jwt?.additionalData?.partner && (
            <button className="absolute left-0 outline-none" onClick={() => router.push('/')}>
              <ChevronLeft className="text-info-2" fontSize="large" />
            </button>
          )}
          <span className="text-lg font-semibold text-center text-info-1">Telekonsultasi Saya</span>
        </div>
        <div className="flex flex-col mt-5 bg-white">
          <NavigationTab />
        </div>
      </div>
      {/* teleconsultation page content */}
      <div className="overflow-y-auto flex-1 pt-32 pb-5 hide-scrollbar">
        <PageTransition location={router.pathname}>{children}</PageTransition>
      </div>
      {/* home page navigation bar */}
      <div className="flex">{!jwt?.additionalData?.filterdoctor && <HomeNavigation />}</div>
    </Div100vh>
  );
};

export default TeleconsultationLayout;
