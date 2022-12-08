import { createSlice } from '@reduxjs/toolkit';

/* Reducers for bottom sheet filter list component (hospital and specialist list) */

// Define the initial state
const initialState = {
  data: {
    results: [],
    loading: true
  }
};

export const Detail = createSlice({
  name: 'appointmentDetail',
  initialState,
  reducers: {
    setAppointmentDetail: (state, action) => {
      state.data.results = action.payload;
      state.data.loading = false;
    }
  }
});

export const { showFilterList, closeFilterList, setAppointmentDetail } = Detail.actions;

export default Detail.reducer;
