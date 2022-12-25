import { createSlice } from '@reduxjs/toolkit';

/* Reducers for snackbar component */

// Define the initial state using that type
const initialState = {
  isOpen: false,
  title: '',
  description: '',
  type: ''
};

export const Snackbar = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: state => {
      state.isOpen = true;
    },
    hideSnackbar: state => {
      state.isOpen = false;
    },
    setSnackbarTitle: (state, action) => {
      state.title = action.payload;
    },
    setSnackbarDescription: (state, action) => {
      state.description = action.payload;
    },
    setSnackbarType: (state, action) => {
      state.type = action.payload;
    }
  }
});

export const { showSnackbar, hideSnackbar, setSnackbarTitle, setSnackbarDescription, setSnackbarType } =
  Snackbar.actions;

export default Snackbar.reducer;
