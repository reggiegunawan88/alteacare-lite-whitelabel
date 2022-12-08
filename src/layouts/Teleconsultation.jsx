import React from 'react';

import { useRouter } from 'next/router';

import NavigationTab from '@/components/pages/Teleconsultation/NavigationTab';
import PageTransition from '@/components/Transition/PageTransition';

const TeleconsultationLayout = ({ children }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col py-4">
      {/* top-bar stay on top of screen */}
      <div className="absolute top-0 z-10 pt-3 w-full text-center bg-white">
        <span className="self-center text-lg font-semibold text-info-1">Telekonsultasi Saya</span>
        <div className="flex flex-col mt-5 bg-white">
          <NavigationTab />
        </div>
      </div>
      <div className="pt-20">
        <PageTransition location={router.pathname}>{children}</PageTransition>
      </div>
    </div>
  );
};

export default TeleconsultationLayout;
