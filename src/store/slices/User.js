import { createSlice } from '@reduxjs/toolkit';

/* Reducers for user global data */

// Define the initial state using that type
const initialState = {
  token: '',
  loggedIn: null
};

export const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    setUserLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    }
  }
});

export const { setUserToken, setUserLoggedIn } = User.actions;

export default User.reducer;
