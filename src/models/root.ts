import { ITask } from './task';

export interface IRootState {
  tasks: ITask[];
  round: number;
  stage: string;
  smallBreak: number;
  longBreak: number;
  rounds: number;
  timer: number;
  isTimerStarted: boolean;
  isTimerRunning: boolean;
}
