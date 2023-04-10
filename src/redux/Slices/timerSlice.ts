import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EStages, ITimerState } from '../../models/timer';

const initialState: ITimerState = {
  session: 5, // 25
  smallBreak: 1, // 5
  longBreak: 3, // 15
  timer: 2 * 5,
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
    addExtraMinute: (state) => {
      state.timer += 60;
    },
    stopTimer: (state) => {
      return { ...initialState, breaksCount: state.breaksCount, roundsCount: state.roundsCount };
    },
    switchStage: (state, action: PayloadAction<number>) => {
      const taskRounds = action.payload;
      if (state.stage === EStages.session) {
        if (state.roundsCount <= taskRounds) {
          if (state.roundsCount % 4 === 0) {
            state.stage = EStages.longBreak;
            state.timer = state.longBreak * 5;
          } else {
            state.stage = EStages.smallBreak;
            state.timer = state.smallBreak * 3;
          }
          state.roundsCount += 1;
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

export const { reset, toggleTimer, setTimer, startTimer, switchStage, stopTimer, addExtraMinute } =
  timerSlice.actions;
export default timerSlice.reducer;
