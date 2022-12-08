import { useEffect, useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/router';
import { batch, useDispatch } from 'react-redux';

import GetTodayDay from '@/helpers/day/day';
import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import useDoctorDetail from '@/hooks/pages/Doctor/DoctorDetail/useDoctorDetail';
import { storeDoctorData, storeScheduleData } from '@/store/slices/Transaction';

const useDoctorSchedule = ({ availableDay }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { openBottomSheet } = useBottomSheet();
  const { timeSlots } = useDoctorDetail();
  const [isDefault, setIsDefault] = useState(true);
  const [data] = useState(timeSlots || [...Array(4)]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTimeslotIdx, setActiveTimeslotIdx] = useState(null);

  // day slider state
  const [params, setParams] = useState([]); // date params
  const curr = new Date();
  const todayDate = curr.setDate(curr.getDate());
  const dateString = new Date(todayDate).toISOString().slice(0, 10);
  const dayQuery = router.query.day;
  const dateQuery = router.query.date;
  const [selectedDate, setSelectedDate] = useState(dateQuery || dateString);
  const [selectedDay, setSelectedDay] = useState(dayQuery || GetTodayDay());
  const indexOfCurrentDay = availableDay?.findIndex(dayList => dayList.day === selectedDay);
  const [currentIndexDay, setCurrentIndexDay] = useState(indexOfCurrentDay);

  const selectSchedule = (time, idx) => {
    setActiveTimeslotIdx(idx);
    setSelectedTime(time);
  };

  const chooseSchedule = doctorData => {
    batch(() => {
      dispatch(storeDoctorData(doctorData));
      dispatch(storeScheduleData(selectedTime));
    });
    openBottomSheet('SELECT_PATIENT');
  };

  const setDay = param => {
    const { day, date } = param;
    const currentParams = router.query;
    const newParams = { ...currentParams, date, day };
    setSelectedDay(day);
    setSelectedDate(date);
    setParams(newParams);

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

  const rerouting = async () => {
    const currentPath = router.pathname;
    if (!isDefault) {
      router.replace({ path: currentPath, query: params });
    }
  };

  // custom keen slider hooks
  const [sliderRef, slider] = useKeenSlider({
    loop: false,
    initial: currentIndexDay,
    renderMode: 'performance',
    slides: {
      spacing: 8
    },
    slideChanged(s) {
      const { rel } = s.track.details;
      const sliderProps = { rel };
      slideDay(sliderProps);
      setCurrentIndexDay(currentIndexDay);
    }
  });

  useEffect(() => {
    rerouting();
  }, [params.day]);

  // if current day not available, skip to the available one
  useEffect(() => {
    if (currentIndexDay < 0) {
      setDay(availableDay[0]);
    }
  }, []);

  return {
    data,
    timeSlots,
    activeTimeslotIdx,
    availableDay,
    selectedDay,
    selectedDate,
    slider,
    selectSchedule,
    chooseSchedule,
    setDay,
    sliderRef
  };
};

export default useDoctorSchedule;
