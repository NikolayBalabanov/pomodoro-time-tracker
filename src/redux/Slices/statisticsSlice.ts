import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IByDay, IStatisticsState } from '../../models/statistics';
import getStatisticsByDay from '../../utils/getStatisticsByDay';
import getDate from '../../utils/getDate';
import todayWeekDay from '../../utils/todayWeekDay';
import getStatisticsByWeek from '../../utils/getStatisticsByWeek';
import actualizeDataBase from '../../utils/actualizeDataBase';

const initialState: IStatisticsState = {
  statistics: {
    '2023-04-03': { breakTimer: 100, pauses: 2, pomodoros: 20, sessionTimer: 333 },
    '2023-04-10': { breakTimer: 777, pauses: 2, pomodoros: 120, sessionTimer: 333 },
    '2023-04-07': { breakTimer: 1500, pauses: 63, pomodoros: 666, sessionTimer: 6333 },
    '2023-03-21': { breakTimer: 200, pauses: 5, pomodoros: 25, sessionTimer: 1444 },
    '2023-03-22': { breakTimer: 200, pauses: 5, pomodoros: 25, sessionTimer: 4424 },
    '2023-03-23': { breakTimer: 3200, pauses: 25, pomodoros: 225, sessionTimer: 3444 },
  },
  statisticsByWeek: [0, 0, 0, 0, 0, 0, 0],
  statisticsByDay: {
    sessionTimer: 0,
    breakTimer: 0,
    pauses: 0,
    pomodoros: 0,
  },
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    incrementPomodoros: (state) => {
      const key = getDate(0, todayWeekDay());
      if (key in state.statistics) {
        state.statistics[key].pomodoros++;
      } else {
        state.statistics[key].pomodoros = 1;
      }
    },
    incrementPauses: (state) => {
      const key = getDate(0, todayWeekDay());
      if (key in state.statistics) {
        state.statistics[key].pauses++;
      } else {
        state.statistics[key].pauses = 1;
      }
    },
    incrementBreakTimer: (state) => {
      const key = getDate(0, todayWeekDay());
      if (key in state.statistics) {
        state.statistics[key].breakTimer++;
      } else {
        state.statistics[key].breakTimer = 1;
      }
    },
    incrementSessionTimer: (state) => {
      const key = getDate(0, todayWeekDay());
      if (key in state.statistics) {
        state.statistics[key].sessionTimer++;
      } else {
        state.statistics[key] = { breakTimer: 0, pauses: 0, pomodoros: 0, sessionTimer: 1 };
      }
    },
    setStatisticsByDay: (state, action: PayloadAction<IByDay>) => {
      const { week, day } = action.payload;
      state.statisticsByDay = getStatisticsByDay(week, day, state.statistics);
    },
    setStatisticsByWeek: (state, action: PayloadAction<number>) => {
      const week = action.payload;
      state.statisticsByWeek = getStatisticsByWeek(week, state.statistics);
    },
    setActualData: (state) => {
      actualizeDataBase(state.statistics);
    },
  },
});

export const {
  incrementPomodoros,
  incrementPauses,
  incrementBreakTimer,
  incrementSessionTimer,
  setStatisticsByDay,
  setStatisticsByWeek,
  setActualData,
} = statisticsSlice.actions;
export default statisticsSlice.reducer;
