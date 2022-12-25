import { createSlice } from '@reduxjs/toolkit';

/* Reducers for dialog confirmation component */

// Define the initial state using that type
const initialState = {
  title: 'my-home'
};

export const Home = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setHomeTitle: (state, action) => {
      state.title = action.payload;
    }
  }
});

export const { setHomeTitle } = Home.actions;

export default Home.reducer;
