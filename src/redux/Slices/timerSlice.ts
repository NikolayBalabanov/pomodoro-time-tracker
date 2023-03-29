import { createSlice } from '@reduxjs/toolkit';
import { EStages, ITimerState } from '../../models/timer';

const initialState: ITimerState = {
  session: 2, // 25
  smallBreak: 1, // 5
  longBreak: 5, // 15
  timer: 60 * 2,
  stage: EStages.session,
  initialRounds: 1,
  roundsCount: 0,
  isTimerStarted: false,
  isTimerRunning: false,
};

const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    setInitialRounds: (state, action) => {
      if (state.isTimerRunning) return;
      console.log('Увеличиваю раунды', action.payload);
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
        console.log('Помодокрас amount', state.initialRounds);
        state.roundsCount += 1;
        if (state.initialRounds <= state.roundsCount) {
          console.log('Логика по удалению таска и обновлению таймера');
        }
        if (state.roundsCount % 4 === 0) {
          state.stage = EStages.longBreak;
          state.timer = state.longBreak * 60;
        } else {
          state.stage = EStages.smallBreak;
          state.timer = state.smallBreak * 60;
        }
      } else if (state.stage === EStages.longBreak) {
        state.stage = EStages.session;
        state.timer = state.session * 60;
      } else if (state.stage === EStages.smallBreak) {
        state.stage = EStages.session;
        state.timer = state.session * 60;
      }
    },
  },
});

export const { setInitialRounds, reset, toggleTimer, setTimer, startTimer, switchStage } =
  timerSlice.actions;
export default timerSlice.reducer;
