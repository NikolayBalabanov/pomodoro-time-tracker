import { TStatItem } from '../models/statistics';
import getStatisticsByDay from './getStatisticsByDay';

type TGetStatisticsByWeek = (
  week: number,
  statistics: TStatItem
) => [number, number, number, number, number, number, number];

const getStatisticsByWeek: TGetStatisticsByWeek = (week, statistics) => {
  const weekDay1 = getStatisticsByDay(week, 1, statistics).sessionTimer;
  const weekDay2 = getStatisticsByDay(week, 2, statistics).sessionTimer;
  const weekDay3 = getStatisticsByDay(week, 3, statistics).sessionTimer;
  const weekDay4 = getStatisticsByDay(week, 4, statistics).sessionTimer;
  const weekDay5 = getStatisticsByDay(week, 5, statistics).sessionTimer;
  const weekDay6 = getStatisticsByDay(week, 6, statistics).sessionTimer;
  const weekDay7 = getStatisticsByDay(week, 7, statistics).sessionTimer;

  return [weekDay1, weekDay2, weekDay3, weekDay4, weekDay5, weekDay6, weekDay7];
};

export default getStatisticsByWeek;
