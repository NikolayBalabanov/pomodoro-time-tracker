export interface ITimerState {
  round: number;
  smallBreak: number;
  longBreak: number;
  timer: number;
  stage: string;
  initialRounds: number;
  roundsCount: number;
  isTimerStarted: boolean;
  isTimerRunning: boolean;
}
