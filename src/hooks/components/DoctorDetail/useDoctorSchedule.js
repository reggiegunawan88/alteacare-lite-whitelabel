import { useEffect, useState } from 'react';

import { useKeenSlider } from 'keen-slider/react';
import { useRouter } from 'next/router';
import { batch, useDispatch } from 'react-redux';

import GetTodayDay from '@/helpers/day/day';
import resizePlugin from '@/helpers/keen-slider/resizePlugin'; // !important
import useBottomSheet from '@/hooks/components/BottomSheet/useBottomSheet';
import { storeDoctorData, storeScheduleData } from '@/store/slices/Transaction';

const useDoctorSchedule = ({ availableDay }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { openBottomSheet } = useBottomSheet();
  const [isDefault, setIsDefault] = useState(true);
  const [selectedTime, setSelectedTime] = useState(null);
  const [activeTimeslotIdx, setActiveTimeslotIdx] = useState(null);

  // day slider state
  const [params, setParams] = useState([]); // date params
  const [selectedDay, setSelectedDay] = useState(router.query?.day || GetTodayDay()); // assign day based on query param (if any) or today's day
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
  const [sliderRef, slider] = useKeenSlider(
    {
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
    },
    [resizePlugin] // must include this argument to prevent incorrect max-width on slider's element
  );

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
    activeTimeslotIdx,
    selectedDay,
    slider,
    selectSchedule,
    chooseSchedule,
    sliderRef
  };
};

export default useDoctorSchedule;
