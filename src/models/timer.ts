export interface ITimerState {
  session: number;
  smallBreak: number;
  longBreak: number;
  timer: number;
  stage: EStages;
  initialRounds: number;
  roundsCount: number;
  breaksCount: number;
  isTimerStarted: boolean;
  isTimerRunning: boolean;
}

export enum EStages {
  session = 'Session',
  smallBreak = 'SmallBreak',
  longBreak = 'LongBreak',
}
