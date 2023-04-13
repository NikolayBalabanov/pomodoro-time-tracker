import getDate from './getDate';
import todayWeekDay from './todayWeekDay';
import isValidDay from './isValidDay';
import { TStatItem, TStatItemObj } from '../models/statistics';
import { EWeekDays } from '../models/weekDays';

type TIGetStatisticsByDay = (week: number, day: EWeekDays, statistics: TStatItem) => TStatItemObj;

const getStatisticsByDay: TIGetStatisticsByDay = (week, day, statistics) => {
  const targetDay = getDate(week, day);
  const today = getDate(0, todayWeekDay());
  const firstDay = getDate(-2, 1);
  const result = {
    sessionTimer: 0,
    breakTimer: 0,
    pauses: 0,
    pomodoros: 0,
  };
  if (!isValidDay(targetDay, firstDay, today)) {
    return result;
  }
  return targetDay in statistics ? statistics[targetDay] : result;
};

export default getStatisticsByDay;
