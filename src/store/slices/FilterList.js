import { createSlice } from '@reduxjs/toolkit';

/* Reducers for bottom sheet filter list component (hospital and specialist list) */

// Define the initial state
const initialState = {
  isOpen: false,
  type: '',
  specializationsList: [],
  specialistSearchResult: [],
  hospitalList: [],
  hospitalSearchResult: []
};

export const FilterList = createSlice({
  name: 'filter-list',
  initialState,
  reducers: {
    showFilterList: state => {
      state.isOpen = true;
    },
    closeFilterList: state => {
      state.isOpen = false;
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    /* specialization list reducers */
    initiateSpecializationsList: (state, action) => {
      // add isSelected props into each specialization
      state.specializationsList = action?.payload?.map(item => {
        return { ...item, isSelected: false };
      });
      // initiate value for search result array
      state.specialistSearchResult = state.specializationsList;
    },
    toggleSelectedSpecialist: (state, action) => {
      const id = action.payload;
      state.specializationsList.map(item => {
        if (item.specialization_id === id) {
          item.isSelected = !item.isSelected;
        }
        return true;
      });
      // do same iteration for search result array
      state.specialistSearchResult.map(item => {
        if (item.specialization_id === id) {
          item.isSelected = !item.isSelected;
        }
        return true;
      });
    },
    // initiate selected value when page loaded
    initiateSelectedSpecialist: (state, action) => {
      const id = action.payload;
      state.specializationsList.map(item => {
        if (item.specialization_id === id) {
          item.isSelected = true;
        }
        return true;
      });
    },
    sortSpecialistList: state => {
      // sort isSelected value from true to false
      state.specializationsList.sort((a, b) => {
        return Number(b.isSelected) - Number(a.isSelected);
      });
    },
    /* hospital list reducers */
    initiateHospitalList: (state, action) => {
      // add isSelected props into each hospital
      state.hospitalList = action?.payload?.map(item => {
        return { ...item, isSelected: false };
      });
      // initiate value for search result array
      state.hospitalSearchResult = state.hospitalList;
    },
    toggleSelectedHospital: (state, action) => {
      const id = action.payload;
      state.hospitalList.map(item => {
        if (item.hospital_id === id) {
          item.isSelected = !item.isSelected;
        }
        return true;
      });
      // do same iteration for search result array
      state.hospitalSearchResult.map(item => {
        if (item.hospital_id === id) {
          item.isSelected = !item.isSelected;
        }
        return true;
      });
    },
    // initiate selected value when page loaded
    initiateSelectedHospital: (state, action) => {
      const id = action.payload;
      state.hospitalList.map(item => {
        if (item.hospital_id === id) {
          item.isSelected = true;
        }
        return true;
      });
    },
    sortHospitalList: state => {
      // sort isSelected value from true to false
      state.hospitalList.sort((a, b) => {
        return Number(b.isSelected) - Number(a.isSelected);
      });
    },
    // filter search specialist list to array clone
    searchSpecialist: (state, action) => {
      const result = JSON.parse(JSON.stringify(state.specializationsList)).filter(item => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      state.specialistSearchResult = result;
    },
    // filter search hospital list to array clone
    searchHospital: (state, action) => {
      const result = JSON.parse(JSON.stringify(state.hospitalList)).filter(item => {
        return item.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      state.hospitalSearchResult = result;
    }
  }
});

export const {
  showFilterList,
  closeFilterList,
  setType,
  initiateSpecializationsList,
  toggleSelectedSpecialist,
  initiateSelectedSpecialist,
  sortSpecialistList,
  initiateHospitalList,
  toggleSelectedHospital,
  initiateSelectedHospital,
  sortHospitalList,
  searchSpecialist,
  searchHospital
} = FilterList.actions;

export default FilterList.reducer;
