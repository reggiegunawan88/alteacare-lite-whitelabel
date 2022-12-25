import { dayList } from '@/constants/dayList';

const today = new Date();
const day = today.getDay();

export default function GetTodayDay() {
  return dayList[day];
}
