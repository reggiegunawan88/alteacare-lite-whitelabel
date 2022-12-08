import { createSlice } from '@reduxjs/toolkit';

/* Reducers for teleconsultation list data */

// Define the initial state using that type
const initialState = {
  ongoingList: {
    results: [],
    meta: [],
    loading: true
  },
  historyList: {
    results: [],
    meta: [],
    loading: true
  },
  cancelledList: {
    results: [],
    meta: [],
    loading: true
  }
};

export const List = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setOngoingData: (state, action) => {
      state.ongoingList.results = action?.payload?.data;
      state.ongoingList.meta = action?.payload?.meta;
      state.ongoingList.loading = false;
    },
    addOngoingData: (state, action) => {
      state.ongoingList.results.push(...action.payload.data);
      state.ongoingList.meta = action?.payload?.meta;
    },
    setHistoryData: (state, action) => {
      state.historyList.results = action?.payload?.data;
      state.historyList.meta = action?.payload?.meta;
      state.historyList.loading = false;
    },
    addHistoryData: (state, action) => {
      state.historyList.results.push(...action.payload.data);
      state.historyList.meta = action?.payload?.meta;
    },
    setCancelledData: (state, action) => {
      state.cancelledList.results = action?.payload?.data;
      state.cancelledList.meta = action?.payload?.meta;
      state.cancelledList.loading = false;
    },
    addCancelledData: (state, action) => {
      state.cancelledList.results.push(...action.payload.data);
      state.cancelledList.meta = action?.payload?.meta;
    }
  }
});

export const { setOngoingData, addOngoingData, setHistoryData, addHistoryData, setCancelledData, addCancelledData } =
  List.actions;

export default List.reducer;
