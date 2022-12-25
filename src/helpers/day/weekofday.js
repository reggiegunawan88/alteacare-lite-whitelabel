import { dayList } from '@/constants/dayList';

const week = [];

export default function GetDaysofWeek() {
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 7; i++) {
    const curr = new Date();
    const date = curr.setDate(curr.getDate() + i);
    const dateString = new Date(date).toISOString().slice(0, 10);
    const d = new Date(dateString);
    week.push({
      date: dateString,
      day: dayList[d.getDay()]
    });
  }
  return week;
}
