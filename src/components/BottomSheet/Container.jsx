import React from 'react';

import dynamic from 'next/dynamic';
import { CSSTransition } from 'react-transition-group';

import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';

// dynamic import bottom sheet content
const DoctorList = dynamic(() => import('./Content/DoctorList'));
const SelectPatient = dynamic(() => import('./Content/DoctorDetail/SelectPatient'));
const UpdatePatient = dynamic(() => import('./Content/Transaction/UpdatePatient'));
const TeleconsultationSort = dynamic(() => import('./Content/Teleconsultation/Sort'));
const TeleconsultationFamilyMember = dynamic(() => import('./Content/Teleconsultation/FamilyMember'));
const DoctorFilter = dynamic(() => import('./Content/Filter/DoctorFilter'));
const DoctorDetailInformation = dynamic(() => import('./Content/DoctorDetail/InformationDetail'));
const RefundTermsInformation = dynamic(() => import('./Content/DoctorDetail/RefundTerms'));

const BottomSheetContainer = () => {
  const { isOpen, type, hideBottomSheet } = useBottomSheet();
  return (
    <>
      {isOpen && <div className="fixed inset-0 z-10 w-full bg-dark-1 opacity-75" onClick={hideBottomSheet}></div>}
      <CSSTransition in={isOpen} timeout={400} unmountOnExit classNames="bottomsheet">
        <div className="absolute bottom-0 left-0 z-20 w-full bg-white rounded-t-3xl border-t-default border-t-light-1">
          {/* bottomsheet content */}
          <div className="overflow-auto max-h-screen hide-scrollbar">
            {type === 'DOCTOR_LIST' && <DoctorList />}
            {type === 'SELECT_PATIENT' && <SelectPatient />}
            {type === 'UPDATE_PATIENT' && <UpdatePatient />}
            {type === 'TELECONSULTATION_SORT' && <TeleconsultationSort />}
            {type === 'TELECONSULTATION_FAM_MEMBER' && <TeleconsultationFamilyMember />}
            {type === 'DOCTOR_FILTER' && <DoctorFilter />}
            {type === 'DOCTOR_DETAIL_INFORMATION' && <DoctorDetailInformation />}
            {type === 'REFUND_TERMS' && <RefundTermsInformation />}
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default BottomSheetContainer;
