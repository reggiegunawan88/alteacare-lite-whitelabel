import { useEffect, useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import GetTodayDay from '@/helpers/day/day';
import paramGenerator from '@/helpers/paramGenerate';
import useShallowEqualSelector from '@/helpers/useShallowEqualSelector';
import useIntersectionObserver from '@/hooks/components/Reusable/DocumentUploader/IntersectionObserver/useIntersectionObserver';
import getDoctorList from '@/services/Doctor/getDoctorList';
import { addDoctorData, setDoctorData, updateDoctorPage } from '@/store/slices/Doctor/List';

const useDoctorList = ({ listDay }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isDefault, setIsDefault] = useState(true);
  const { doctorList } = useShallowEqualSelector({
    name: 'doctorList',
    states: ['doctorList']
  });
  const { elementRef, isLastIdx } = useIntersectionObserver();

  const [data, setData] = useState({
    params: router.query,
    meta: [],
    page: 1,
    results: []
  });

  // time state
  const curr = new Date();
  const todayDate = curr.setDate(curr.getDate());
  const dateString = new Date(todayDate).toISOString().slice(0, 10);
  const dayQuery = router.query.available_day;
  const dateQuery = router.query.date;

  // day slider states
  const availableDay = listDay.filter(day => {
    return day?.is_available;
  });
  const [selectedDate, setSelectedDate] = useState(dateQuery || dateString);
  const [selectedDay, setSelectedDay] = useState(dayQuery || GetTodayDay());
  const indexOfCurrentDay = listDay?.findIndex(dayList => dayList.day === selectedDay);
  const [currentIndexDay, setCurrentIndexDay] = useState(indexOfCurrentDay);

  const rerouting = async () => {
    const queryParams = paramGenerator(data?.params);
    const currentPath = router.pathname;
    if (!isDefault) {
      dispatch(setDoctorData([]));
      dispatch(updateDoctorPage(1));
      router.push({ path: currentPath, query: queryParams });
    }
  };

  /* fetch and append doctor data (if screen scrolled to the bottom of the page) */
  const progressiveFetchDoctorData = async () => {
    const currentParams = router.query;
    const { page } = doctorList;
    const newParams = { ...currentParams, page: page + 1 };
    const queryParams = paramGenerator(newParams);
    const listData = await getDoctorList(queryParams);
    if (listData.length > 0) {
      dispatch(addDoctorData(listData));
      dispatch(updateDoctorPage(page + 1));
    }
  };

  const setKeyword = param => {
    const currentParams = router.query;
    const newParams = { ...currentParams, keyword: param };
    setData({ ...data, params: newParams });
    dispatch(updateDoctorPage(1));
    setIsDefault(false);
  };

  const setDay = param => {
    const { day, date } = param;
    const currentParams = router.query;
    const newParams = { ...currentParams, available_day: day, date };
    setSelectedDay(day);
    setSelectedDate(date);
    setData({ ...data, params: newParams });
    dispatch(updateDoctorPage(1));

    if (isDefault) {
      setIsDefault(false);
    }
  };

  const slideDay = sliderProps => {
    setIsDefault(false);
    const { rel } = sliderProps;
    const { day, date } = availableDay[rel];
    const param = { day, date };
    setDay(param);
  };

  // custom keen slider hooks
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    initial: currentIndexDay,
    renderMode: 'performance',
    slideChanged(s) {
      const { rel } = s.track.details;
      const sliderProps = { rel };
      slideDay(sliderProps);
      setCurrentIndexDay(currentIndexDay);
    }
  });

  // initiate active day index
  useEffect(() => {
    // if current day is not available, then skip idx to available one
    if (availableDay.length > 0 && listDay?.[currentIndexDay]?.is_available === false) {
      setDay(availableDay[0]);
    }
  }, []);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    // timeout debounce
    const timeout = setTimeout(() => {
      rerouting();
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.params]);

  // progressive rendering rerender (using React ref)
  useEffect(() => {
    if (isLastIdx) {
      progressiveFetchDoctorData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLastIdx]);

  return {
    doctorList,
    data,
    selectedDay,
    availableDay,
    selectedDate,
    currentIndexDay,
    elementRef,
    setCurrentIndexDay,
    slideDay,
    progressiveFetchDoctorData,
    setDay,
    setKeyword,
    sliderRef,
    slider
  };
};

export default useDoctorList;
