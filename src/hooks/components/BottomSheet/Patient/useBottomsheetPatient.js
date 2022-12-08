import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { batch, useDispatch } from 'react-redux';

import getPatientList from '@/services/Patient/getPatientList';
import { closeBottomSheet } from '@/store/slices/BottomSheet';
import { storePatientData } from '@/store/slices/Transaction';

const useBottomsheetPatient = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [page, setPage] = useState(1);
  const [patientData, setPatientData] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState({
    patientData: null,
    value: '',
    idx: 0,
    isSelected: false
  });

  // add patient list data and pass doctor id to form page
  const addPatient = () => {
    router.push({ pathname: '/form/personal-data', query: { id: router.query.id } });
    dispatch(closeBottomSheet());
  };

  /* doctor detail page */
  // select patient for appointment
  const selectAppointmentPatient = (patient, idx) => {
    setSelectedPatient({ patientData: patient, value: patient?.id, idx, isSelected: true });
  };
  // choose patient for appointment and redirect to transaction
  const chooseAppointmentPatient = () => {
    batch(() => {
      dispatch(closeBottomSheet());
      dispatch(storePatientData(selectedPatient.patientData));
    });
    // redirect to transaction page and add patient id to query
    router.push({
      pathname: '/transaction/confirmation',
      query: { step: 2, patient_id: selectedPatient.patientData.id }
    });
  };

  /* transaction page */
  // update patient on transaction page
  const updateAppointmentPatient = () => {
    batch(() => {
      dispatch(closeBottomSheet());
      dispatch(storePatientData(selectedPatient.patientData));
    });
    router.replace({
      query: { step: 2, patient_id: selectedPatient.patientData.id }
    });
  };

  /* teleconsultation page */
  // set selected patient value in list
  const setPatientValue = (value, idx) => {
    setSelectedPatient({ value, idx, isSelected: true });
  };

  // apply filter value for teleconsultation list
  const applyPatientFilter = () => {
    if (selectedPatient.isSelected) {
      router.replace({ query: { ...router.query, patient_id: selectedPatient.value } });
    } else {
      router.replace({ query: {} });
    }
    dispatch(closeBottomSheet());
  };

  // fetch API data (repeat until total data is fetched)
  const fetchPatientData = () => {
    const result = [];
    getPatientList({ page }).then(resp => {
      const data = resp?.data?.patient;
      if (data?.length > 0) {
        result.push(...patientData, ...data);
        setPatientData(result);
        setPage(page + 1);
      }
    });
  };

  // search initial patient id if query param is exist
  const getInitialPatientValue = () => {
    patientData.map((patient, idx) => {
      if (patient.id === router.query.patient_id) {
        setSelectedPatient({
          patientData: patient,
          value: patient?.id,
          idx,
          isSelected: true
        });
        return true;
      }
      return undefined;
    });
  };

  useEffect(() => {
    if (router.isReady) {
      fetchPatientData();
      if (router.query.patient_id) {
        getInitialPatientValue();
      }
    }
  }, [router.isReady, page]);

  return {
    patientData,
    selectedPatient,
    setPatientValue,
    applyPatientFilter,
    addPatient,
    selectAppointmentPatient,
    chooseAppointmentPatient,
    updateAppointmentPatient
  };
};

export default useBottomsheetPatient;
