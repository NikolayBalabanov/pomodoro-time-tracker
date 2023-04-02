import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pauseCnt: 0,
  breakTimer: 0,
  sessionTimer: 0,
  pomodoros: 0,
};

const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    incrementPomodoros: (state) => {
      state.pomodoros++;
    },
    incrementPauseCnt: (state, action) => {
      state.pauseCnt++;
    },
    incrementBreakTimer: (state, action) => {
      state.breakTimer++;
    },
    incrementSessionTimer: (state, action) => {
      state.sessionTimer++;
    },
  },
});

export const { incrementPomodoros, incrementPauseCnt, incrementBreakTimer, incrementSessionTimer } =
  statisticsSlice.actions;
export default statisticsSlice.reducer;
