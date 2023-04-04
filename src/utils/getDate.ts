import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import { TWeekDays } from '../models/weekDays';

type TGetDate = (week: number, day: TWeekDays) => string;

const getDate: TGetDate = (week, day) => {
  dayjs.extend(weekday);
  const targetWeek = day === 7 ? week + 1 : week;
  const convertedDay = [1, 2, 3, 4, 5, 6, 0][day - 1];
  console.log('targetWeek', targetWeek);
  console.log('convertedDay', convertedDay);
  console.log(
    'qwerty',
    dayjs()
      .weekday(convertedDay + 7 * targetWeek)
      .toISOString()
  );
  const ISODate = dayjs()
    .weekday(convertedDay + 7 * targetWeek)
    .toISOString();
  return ISODate.slice(0, 10);
};

export default getDate;
