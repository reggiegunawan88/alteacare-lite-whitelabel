import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { batch, useDispatch } from 'react-redux';

import { offerFilter } from '@/constants/filter/offerFilter';
import { priceFilter } from '@/constants/filter/priceFilter';
import filterParamGenerator from '@/helpers/paramGenerate';
import parseJwt from '@/helpers/parser/jwtParser';
import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import getSpecializationsList from '@/services/Doctor/getSpecializations';
import getHospitalList from '@/services/Hospital/getHospitalList';
import { closeBottomSheet } from '@/store/slices/BottomSheet';
import {
  initiateHospitalList,
  initiateSelectedHospital,
  initiateSelectedSpecialist,
  initiateSpecializationsList,
  setType,
  showFilterList,
  sortHospitalList,
  sortSpecialistList,
  toggleSelectedSpecialist,
  toggleSelectedHospital
} from '@/store/slices/FilterList';

const useDoctorFilter = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  // offer and price filter values
  const [offerList, setOfferList] = useState([...offerFilter]);
  const [priceList, setPriceList] = useState([...priceFilter]);
  const [reset, setReset] = useState(false);
  // redux global state data
  const { hospitalList, specializationsList } = useShallowEqualSelector({
    name: 'filterList',
    states: ['hospitalList', 'specializationsList']
  });

  const toggleFilterList = param => {
    batch(() => {
      dispatch(showFilterList());
      if (param === 'SPECIALIST') {
        dispatch(setType('SPECIALIST'));
      } else {
        dispatch(setType('HOSPITAL'));
      }
    });
  };

  const toggleSpecialist = id => {
    dispatch(toggleSelectedSpecialist(id));
  };

  const toggleHospital = id => {
    dispatch(toggleSelectedHospital(id));
  };

  const initiateOfferFilter = param => {
    const newList = offerList.slice(0);
    newList.forEach(item => {
      if (item.value === param) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setOfferList(newList);
  };

  const handleOfferFilter = param => {
    const newList = offerList.slice(0);
    newList.forEach(item => {
      if (item.value === param) {
        item.isSelected = !item.isSelected;
      } else {
        item.isSelected = false;
      }
    });
    setOfferList(newList);
  };

  const initiatePriceFilter = label => {
    const newList = [...priceList];
    newList.forEach(item => {
      if (item.label === label) {
        item.isSelected = true;
      } else {
        item.isSelected = false;
      }
    });
    setPriceList(newList);
  };

  const handlePriceFilter = label => {
    const newList = [...priceList];
    newList.forEach(item => {
      if (item.label === label) {
        item.isSelected = !item.isSelected;
      } else {
        item.isSelected = false;
      }
    });
    setPriceList(newList);
  };

  // eslint-disable-next-line consistent-return
  const applyFilters = () => {
    dispatch(closeBottomSheet());

    const queryObj = [];
    // filter each list based on isSelected = true
    specializationsList.filter(item => {
      if (item.isSelected === true) {
        queryObj.push({ 'specializations[]': item.specialization_id });
      }
      return item.isSelected === true;
    });
    hospitalList.filter(item => {
      if (item.isSelected === true) {
        queryObj.push({ hospitals: item.hospital_id });
      }
      return item.isSelected === true;
    });
    offerList.filter(item => {
      if (item.isSelected === true) {
        queryObj.push({ offer: item.value });
      }
      return item.isSelected === true;
    });
    priceList.filter(item => {
      if (item.isSelected === true) {
        if (!item.min_price) {
          return queryObj.push({ max_price: item.max_price });
        }
        if (!item.max_price) {
          return queryObj.push({ min_price: item.min_price });
        }
        queryObj.push({ min_price: item.min_price });
        queryObj.push({ max_price: item.max_price });
      }
      return item.isSelected === true;
    });

    // join all queryObj into one query string
    const queryString = queryObj
      .map(item => {
        return `${Object.keys(item)}=${Object.values(item)}`;
      })
      .join('&');

    // replace current query with processed query string if available
    if (queryString) {
      return router.replace({ query: queryString });
    }
    // replace query with default value if filter query is not available
    const defaultParam = filterParamGenerator(router.query);
    router.replace({ query: defaultParam });

    // user reset the filter
    if (reset) {
      const currentQuery = router.query;
      // delete each filter query (if any)
      delete currentQuery['specializations[]'];
      delete currentQuery?.hospitals;
      delete currentQuery?.min_price;
      delete currentQuery?.max_price;
      delete currentQuery?.offer;
      const resetParam = filterParamGenerator(router.query);
      router.replace({ query: resetParam });
    }
  };

  const resetFilters = async () => {
    const jwt = parseJwt();
    if (jwt?.additionalData?.filterdoctor) {
      router.replace({ query: `specializations[]=${jwt?.additionalData?.filterdoctor}` });
    }
    // hit API to get initial data
    setReset(true);
    const specializationsResp = await getSpecializationsList();
    const hospitalResp = await getHospitalList();
    dispatch(initiateSpecializationsList(specializationsResp));
    dispatch(initiateHospitalList(hospitalResp));
    setOfferList(
      offerList.map(item => {
        item.isSelected = false;
        return item;
      })
    );
    setPriceList(
      priceList.map(item => {
        item.isSelected = false;
        return item;
      })
    );
  };

  const getInitialQueryFilter = async () => {
    const currentQuery = router.query;
    // single value filter (without nested obj query)
    Object.entries(currentQuery).forEach(([key, value]) => {
      if (key === 'specializations[]') {
        dispatch(initiateSelectedSpecialist(value));
        dispatch(sortSpecialistList());
        return;
      }
      if (key === 'hospitals') {
        dispatch(initiateSelectedHospital(value));
        dispatch(sortHospitalList());
        return;
      }
      if (key === 'offer') {
        initiateOfferFilter(value);
        return;
      }
      if (key === 'max_price' && value <= 150000) {
        initiatePriceFilter('<150 Ribu');
        return;
      }
      if (key === 'min_price' && value >= 150000 && currentQuery?.max_price) {
        initiatePriceFilter('150 Ribu - 300 Ribu');
        return;
      }
      if (key === 'min_price' && value >= 300000) {
        initiatePriceFilter('>300 Ribu');
      }
    });

    // multiple value query filter (nested obj query)
    const specializationQueries = router.query['specializations[]'];
    const hospitalQueries = router.query?.hospitals;
    if (specializationQueries instanceof Array) {
      specializationQueries.map(item => {
        return dispatch(initiateSelectedSpecialist(item));
      });
      dispatch(sortSpecialistList());
    }
    if (hospitalQueries instanceof Array) {
      hospitalQueries.map(item => {
        return dispatch(initiateSelectedHospital(item));
      });
      dispatch(sortHospitalList());
    }
  };

  useEffect(() => {
    getInitialQueryFilter();
  }, []);

  return {
    hospitalList,
    specializationsList,
    offerList,
    priceList,
    toggleSpecialist,
    toggleHospital,
    toggleFilterList,
    handleOfferFilter,
    handlePriceFilter,
    applyFilters,
    resetFilters
  };
};

export default useDoctorFilter;
