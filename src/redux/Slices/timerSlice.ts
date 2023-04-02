import { createSlice } from '@reduxjs/toolkit';
import { EStages, ITimerState } from '../../models/timer';

const initialState: ITimerState = {
  session: 1, // 25
  smallBreak: 1, // 5
  longBreak: 1, // 15
  timer: 5 * 1,
  stage: EStages.session,
  initialRounds: 1,
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
    setInitialRounds: (state, action) => {
      if (state.isTimerRunning) return;
      const value = action.payload;
      state.initialRounds = value;
    },
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
    switchStage: (state) => {
      if (state.stage === EStages.session) {
        if (state.roundsCount <= state.initialRounds) {
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
        if (state.roundsCount <= state.initialRounds) {
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

export const { setInitialRounds, reset, toggleTimer, setTimer, startTimer, switchStage } =
  timerSlice.actions;
export default timerSlice.reducer;
