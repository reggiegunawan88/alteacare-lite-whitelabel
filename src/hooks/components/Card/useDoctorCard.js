import { useState } from 'react';

import { useRouter } from 'next/router';

import GetTodayDay from '@/helpers/day/day';

const useDoctorCard = ({ props }) => {
  const router = useRouter();
  const { available_day, dates } = router.query;
  const curr = new Date();
  const todayDate = curr.setDate(curr.getDate());
  const dateString = new Date(todayDate).toISOString().slice(0, 10);
  const day = available_day || GetTodayDay();
  const date = dates || dateString;
  const { data } = props;

  // loading indicator
  const [isLoading, setIsLoading] = useState(false);

  const redirectDoctorDetail = async () => {
    setIsLoading(true);
    await router.push({ pathname: '/doctor/details', query: { id: data.id, day, date } });
    setIsLoading(false);
  };

  return {
    data,
    day,
    date,
    isLoading,
    redirectDoctorDetail
  };
};

export default useDoctorCard;
