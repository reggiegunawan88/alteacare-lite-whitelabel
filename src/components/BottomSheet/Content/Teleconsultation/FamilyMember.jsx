import React from 'react';

import useBottomsheetPatient from '@/hooks/components/BottomSheet/Patient/useBottomsheetPatient';

const TeleconsultationFamilyMember = () => {
  const { patientData, selectedPatient, setPatientValue, applyPatientFilter } = useBottomsheetPatient();
  return (
    <div className="flex z-50 flex-col py-5 mx-5 space-y-4">
      <p className="text-lg font-bold">Urutkan dari :</p>
      <ul className="flex overflow-auto flex-col space-y-4 hide-scrollbar" style={{ height: '350px' }}>
        {patientData?.map((item, idx) => (
          <li
            key={item.id}
            className={`p-3 rounded-lg border-default ${
              selectedPatient.idx === idx && selectedPatient.isSelected
                ? ' bg-main-darker text-white'
                : ' border-main-darker text-main-darker'
            } `}
            onClick={() => setPatientValue(item.id, idx)}
          >
            <span className="text-sm font-bold">
              {item.family_relation_type.name} - {item.first_name} {item.last_name}
            </span>
          </li>
        ))}
      </ul>
      <button onClick={applyPatientFilter} className="py-3 mt-3 w-full font-bold text-white bg-main-primary rounded-md">
        Pilih
      </button>
    </div>
  );
};

export default TeleconsultationFamilyMember;
