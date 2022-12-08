import React from 'react';

import useBottomsheetPatient from '@/hooks/components/BottomSheet/Patient/useBottomsheetPatient';

const SelectPatient = () => {
  const { patientData, selectedPatient, addPatient, selectAppointmentPatient, chooseAppointmentPatient } =
    useBottomsheetPatient();
  return (
    <div className="flex z-50 flex-col py-5 mx-5 space-y-4">
      <p className="text-lg font-bold">Pilih Pasien :</p>
      <ul className="flex overflow-auto flex-col space-y-4 hide-scrollbar" style={{ height: '50vh' }}>
        {patientData?.map((item, idx) => (
          <li
            key={item.id}
            className={`p-3 rounded-lg border-default ${
              selectedPatient.idx === idx && selectedPatient.isSelected
                ? ' bg-main-darker text-white'
                : ' border-main-darker text-main-darker'
            } `}
            onClick={() => selectAppointmentPatient(item, idx)}
          >
            <span className="text-sm font-bold">
              {item.family_relation_type.name} - {item.first_name} {item.last_name}
            </span>
          </li>
        ))}
      </ul>
      <button className="w-full btn-primary-dashed" onClick={addPatient}>
        Buat Anggota Keluarga Baru
      </button>
      <button
        onClick={chooseAppointmentPatient}
        className={`py-3 mt-3 w-full font-bold text-white rounded-md ${
          selectedPatient.isSelected ? 'bg-main-primary' : ' bg-dark-4'
        }`}
        disabled={!selectedPatient.isSelected}
      >
        Pilih
      </button>
    </div>
  );
};

export default SelectPatient;
