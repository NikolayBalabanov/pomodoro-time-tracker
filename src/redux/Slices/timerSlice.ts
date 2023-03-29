import { createSlice } from '@reduxjs/toolkit';
import { ITimerState } from 'models/timer';

const initialState: ITimerState = {
  round: 25,
  smallBreak: 5,
  longBreak: 25,
  timer: 1500,
  stage: 'Session',
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
      const value = action.payload;
      state.initialRounds = value;
    },
  },
});

export const { setInitialRounds } = timerSlice.actions;
export default timerSlice.reducer;
