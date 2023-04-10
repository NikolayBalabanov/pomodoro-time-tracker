export interface ITimerState {
  session: number;
  smallBreak: number;
  longBreak: number;
  timer: number;
  stage: EStages;
  roundsCount: number;
  breaksCount: number;
  isTimerStarted: boolean;
  isTimerRunning: boolean;
  isFinish: boolean;
}

export enum EStages {
  session = 'Session',
  smallBreak = 'SmallBreak',
  longBreak = 'LongBreak',
}
