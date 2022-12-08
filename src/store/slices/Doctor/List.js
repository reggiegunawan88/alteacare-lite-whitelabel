import { createSlice } from '@reduxjs/toolkit';

/* Reducers for teleconsultation list data */

// Define the initial state using that type
const initialState = {
  doctorList: {
    results: null,
    page: 1
  }
};

export const List = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setDoctorData: (state, action) => {
      state.doctorList.results = action?.payload;
    },
    addDoctorData: (state, action) => {
      state.doctorList.results.push(...action.payload);
    },
    updateDoctorPage: (state, action) => {
      state.doctorList.page = action.payload;
    }
  }
});

export const { setDoctorData, addDoctorData, updateDoctorPage } = List.actions;

export default List.reducer;
