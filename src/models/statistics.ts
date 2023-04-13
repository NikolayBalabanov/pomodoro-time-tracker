import { EWeekDays } from './weekDays';

export interface IStatisticsState {
  statistics: TStatItem;
  statisticsByWeek: [number, number, number, number, number, number, number];
  statisticsByDay: TStatItemObj;
}

export type TStatItem = {
  [n: string]: {
    sessionTimer: number;
    breakTimer: number;
    pauses: number;
    pomodoros: number;
  };
};

export type TStatItemObj = {
  sessionTimer: number;
  breakTimer: number;
  pauses: number;
  pomodoros: number;
};

export interface IByDay {
  week: number;
  day: EWeekDays;
}

export interface IByWeek {
  week: number;
}
