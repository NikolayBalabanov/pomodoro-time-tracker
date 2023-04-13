import dayjs from 'dayjs';
import { EWeekDays } from '../models/weekDays';

type TTodayWeekDay = () => EWeekDays;

const todayWeekDay: TTodayWeekDay = () => {
  const weekDay = dayjs().day() === 0 ? 7 : dayjs().day();
  return weekDay as EWeekDays;
};

export default todayWeekDay;
