import React from 'react';

import LoadingState from '@/components/pages/DoctorList/LoadingState';
import { customPartner } from '@/constants/whitelabel_partner/customPartner';
import parseJwt from '@/helpers/parser/jwtParser';
import useBottomsheetPatient from '@/hooks/components/BottomSheet/Patient/useBottomsheetPatient';

const SelectPatient = () => {
  const { loading, patientData, selectedPatient, addPatient, selectAppointmentPatient, chooseAppointmentPatient } =
    useBottomsheetPatient();
  const jwt = parseJwt();
  const cardIdfromJwt =
    jwt?.additionalData?.patient?.card_id || `000000${jwt?.additionalData?.weplus_patient?.identification}`;

  return (
    <div className="flex z-50 flex-col py-5 mx-5 space-y-4">
      <p className="text-lg font-bold">Pilih Pasien :</p>
      <ul className="flex overflow-auto flex-col space-y-4 hide-scrollbar" style={{ height: '50vh' }}>
        {loading ? (
          <LoadingState />
        ) : (
          patientData?.map((item, idx) =>
            customPartner.includes(jwt?.additionalData?.partner) ? (
              item?.card_id === cardIdfromJwt && (
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
              )
            ) : (
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
            )
          )
        )}
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
