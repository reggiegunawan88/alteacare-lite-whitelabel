import { createSlice } from '@reduxjs/toolkit';

// temporary using const theme before whitelabel theme API is ready
import { general, kiddo } from '@/constants/themes';

/* Reducers for whitelabel theme management */

// Define the initial state
const initialState = {
  theme: general
};

export const Theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setWhitelabelTheme: (state, action) => {
      switch (action.payload) {
        case 'kiddo':
          state.theme = kiddo;
          break;
        default:
          state.theme = general;
          break;
      }
    }
  }
});

export const { setWhitelabelTheme } = Theme.actions;

export default Theme.reducer;
