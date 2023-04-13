import { ReactNode } from 'react';
import { EWeekDays } from '../models/weekDays';

export interface IBreakTimeBoard {
  breakTime: number;
}

export interface IDayBoardProps {
  day: EWeekDays;
  time: number;
}

export interface IFocusBoard {
  sessionTime: number;
  breakTime: number;
}

export interface IPausesBuard {
  pauses: number;
}

export interface IPomodoroCount {
  pomodoros: number;
}

export interface IStatBoard {
  title: string;
  styles: string;
  content: string;
  Icon: ReactNode;
}

export interface IWeekBoard {
  current: number;
  weekData: [number, number, number, number, number, number, number];
  onDayChange: (day: EWeekDays) => void;
}
