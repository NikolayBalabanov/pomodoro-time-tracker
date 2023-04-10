import getDate from './getDate';
import { TStatItem } from '../models/statistics';
import isActualDay from './isActualDay';

type TActualizeDataBase = (statistics: TStatItem) => void;

const actualizeDataBase: TActualizeDataBase = (statistics) => {
  const lastDay = getDate(-2, 1);
  for (const targetDay in statistics) {
    if (isActualDay(targetDay, lastDay)) {
      delete statistics[targetDay];
    }
  }
};

export default actualizeDataBase;
