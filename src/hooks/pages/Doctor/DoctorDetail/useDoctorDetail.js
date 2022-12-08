import { useEffect, useState } from 'react';

import GetDaysofWeek from '@/helpers//day/weekofday';
import getRefundTermsCondition from '@/services/TnC/getRefundTermsCondition';

const useDoctorDetail = doctorData => {
  const [refundTerms, setRefundTerms] = useState('');

  // day slider state
  const [listDay, setListDay] = useState(null);
  const [availableDay, setAvailableDay] = useState(null);

  // get refunds tnc data
  const getRefundTermsData = async () => {
    await getRefundTermsCondition().then(res => {
      setRefundTerms(res.data);
    });
  };

  // get doctor schedule day list
  const getAvailableDayList = () => {
    const weekdays = GetDaysofWeek()?.slice(0, 7);
    const dayList = weekdays.map(days => {
      return {
        ...days,
        is_available: doctorData?.available_day_all_hospital?.includes(days.day)
      };
    });

    // filter day list based on is_available = true
    const availableDayList = dayList?.filter(day => {
      return day?.is_available;
    });
    setListDay(dayList);
    setAvailableDay(availableDayList);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    getRefundTermsData();
    getAvailableDayList();
  }, []);

  return {
    refundTerms,
    listDay,
    availableDay
  };
};

export default useDoctorDetail;
