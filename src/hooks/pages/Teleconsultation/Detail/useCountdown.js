import { useState, useEffect } from 'react';

import countdownCalc from '@/helpers/day/countdown';

const useCountdown = ({ schedule, status }) => {
  const scheduleDate = schedule?.date;
  const scheduleTime = schedule?.time_start || schedule?.start_time;
  const scheduletimeData = `${scheduleDate} ${scheduleTime}`;
  const scheduleTimestamp = new Date(Date.parse(scheduletimeData.replace(' ', 'T'))).getTime();
  const [countdown, SetCountdown] = useState('Menghitung mundur ...');

  // countdown timer timestamp (decimal)
  const totalTimestamp = scheduleTimestamp - new Date().getTime();

  useEffect(() => {
    if (status === 'PAID') {
      const interval = setInterval(() => {
        SetCountdown(countdownCalc(scheduleTimestamp));
      }, 1000);

      return () => clearInterval(interval);
    }
    return countdown;
  }, [status]);

  return {
    countdown,
    totalTimestamp
  };
};

export default useCountdown;
