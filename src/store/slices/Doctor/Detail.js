import { createSlice } from '@reduxjs/toolkit';

/* Reducers for doctor detail component */

// Define the initial state
const initialState = {
  bottom_sheet_title: '',
  bottom_sheet_desc: ''
};

export const Detail = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    /* doctor detail bottom sheet */
    setDoctorDetailBottomSheetTitle: (state, action) => {
      state.bottom_sheet_title = action.payload;
    },
    setDoctorDetailBottomSheetDesc: (state, action) => {
      state.bottom_sheet_desc = action.payload;
    }
  }
});

export const { setDoctorDetailBottomSheetTitle, setDoctorDetailBottomSheetDesc } = Detail.actions;

export default Detail.reducer;
