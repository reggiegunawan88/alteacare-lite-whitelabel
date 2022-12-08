import { createSlice } from '@reduxjs/toolkit';

/* Reducers for bottom sheet component */

// Define the initial state
const initialState = {
  isOpen: false,
  type: '',
  value: null
};

export const BottomSheet = createSlice({
  name: 'bottom-sheet',
  initialState,
  reducers: {
    showBottomSheet: state => {
      state.isOpen = true;
    },
    closeBottomSheet: state => {
      state.isOpen = false;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    setBottomSheetValue: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { showBottomSheet, closeBottomSheet, setType, setBottomSheetValue } = BottomSheet.actions;

export default BottomSheet.reducer;
