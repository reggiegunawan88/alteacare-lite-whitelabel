import React from 'react';

import { dayTrans } from '@/constants/dayTrans';

const DateSelector = ({ listDay, availableDay, selectedDay, slider }) => {
  // click and slide to selected day idx
  const slideToIdx = idx => {
    const activeDayIdx = availableDay.findIndex(item => item.day === listDay[idx].day);
    slider.current.moveToIdx(activeDayIdx);
  };

  return (
    <div className="grid grid-flow-col text-center text-dark-1">
      {listDay?.map((days, index) => (
        <div key={days.day} onClick={() => slideToIdx(index)} className="flex flex-col items-center space-y-2">
          {/* day name section */}
          {/* today */}
          {index === 0 && <p className={`text-xs font-bold ${days?.is_available ? '' : 'text-dark-4'}`}>Hari ini</p>}
          {/* tomorrow day */}
          {index === 1 && <p className={`text-xs ${days?.is_available ? '' : 'text-dark-4'}`}>{dayTrans[days?.day]}</p>}
          {/* the day after tomorrow */}
          {index > 1 && (
            <p className={`text-xs ${days?.is_available ? '' : 'text-dark-4'}`}>{dayTrans[days?.day].slice(0, 1)}</p>
          )}
          {/* date number section */}
          <div
            className={`flex justify-center items-center text-xs ${
              selectedDay === days?.day && availableDay.length ? 'bg-info-2' : ''
            } rounded-full`}
            style={{ height: 30, width: 30 }}
          >
            <p
              className={`text-xs font-semibold ${days?.is_available ? '' : 'text-dark-4'} ${
                selectedDay === days?.day ? 'text-white' : ''
              }`}
            >
              {days?.date.slice(-2).replace(/\b0+/g, '')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
