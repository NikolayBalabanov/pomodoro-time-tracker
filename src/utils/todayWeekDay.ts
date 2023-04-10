import dayjs from 'dayjs';
import { TWeekDays } from '../models/weekDays';

type TTodayWeekDay = () => TWeekDays;

const todayWeekDay: TTodayWeekDay = () => {
  const weekDay = dayjs().day() === 0 ? 7 : dayjs().day();
  return weekDay as TWeekDays;
};

export default todayWeekDay;
