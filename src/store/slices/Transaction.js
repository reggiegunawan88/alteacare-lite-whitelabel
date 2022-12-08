import { createSlice } from '@reduxjs/toolkit';

/* Reducers for transaction data flow */

// Define the initial state using that type
const initialState = {
  patientData: null,
  doctorData: null,
  scheduleData: null
};

export const Transaction = createSlice({
  name: 'transaction',
  initialState,
  reducers: {
    storePatientData: (state, action) => {
      state.patientData = action.payload;
    },
    storeDoctorData: (state, action) => {
      state.doctorData = action.payload;
    },
    storeScheduleData: (state, action) => {
      state.scheduleData = action.payload;
    }
  }
});

export const { storePatientData, storeDoctorData, storeScheduleData } = Transaction.actions;

export default Transaction.reducer;
