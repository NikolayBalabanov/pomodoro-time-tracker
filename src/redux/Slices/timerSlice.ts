import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EStages, ITimerState } from '../../models/timer';

const initialState: ITimerState = {
  session: 1, // 25
  smallBreak: 1, // 5
  longBreak: 1, // 15
  timer: 5 * 1,
  stage: EStages.session,
  roundsCount: 1,
  breaksCount: 1,
  isTimerStarted: false,
  isTimerRunning: false,
  isFinish: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    reset: () => {
      return { ...initialState };
    },
    toggleTimer: (state) => {
      state.isTimerRunning = !state.isTimerRunning;
    },
    setTimer: (state) => {
      state.timer -= 1;
    },
    startTimer: (state) => {
      state.isTimerStarted = !state.isTimerStarted;
    },
    stopTimer: (state) => {
      return { ...initialState, breaksCount: state.breaksCount, roundsCount: state.roundsCount };
    },
    switchStage: (state, action: PayloadAction<number>) => {
      const taskRounds = action.payload;
      if (state.stage === EStages.session) {
        if (state.roundsCount <= taskRounds) {
          state.roundsCount += 1;
          if (state.roundsCount % 4 === 0) {
            state.stage = EStages.longBreak;
            state.timer = state.longBreak * 5;
          } else {
            state.stage = EStages.smallBreak;
            state.timer = state.smallBreak * 3;
          }
        } else {
          state.isTimerRunning = false;
          state.isFinish = true;
        }
      } else {
        if (state.roundsCount <= taskRounds) {
          state.breaksCount += 1;
          state.stage = EStages.session;
          state.timer = state.session * 5;
        } else {
          state.isTimerRunning = false;
          state.isFinish = true;
        }
      }
    },
  },
});

export const { reset, toggleTimer, setTimer, startTimer, switchStage, stopTimer } =
  timerSlice.actions;
export default timerSlice.reducer;
