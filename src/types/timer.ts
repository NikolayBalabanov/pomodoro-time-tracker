import { EStages } from '../models/timer';

export interface ITimerHeader {
  title: string;
  stage: EStages;
  isStarted: boolean;
  countRounds: number;
  countBreaks: number;
}

export interface ITmerDisplay {
  time: string;
  stage: EStages;
  isRunning: boolean;
}
