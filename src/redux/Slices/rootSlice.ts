import { createSlice } from '@reduxjs/toolkit';
import { ITaskState } from 'models/task';

const initialState: ITaskState = {
  tasks: [],
};

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    addRound: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.map((el) => (el.id === id ? { ...el, rounds: el.rounds + 1 } : el));
    },
    subtractRound: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks.map((el) => (el.id === id ? { ...el, rounds: el.rounds - 1 } : el));
    },
    removeTask: (state, action) => {
      const id = action.payload;
      state.tasks = state.tasks
        .filter((el) => el.id !== id)
        .map((newElem, index) => ({ ...newElem, id: index }));
    },
    addTask: (state, action) => {
      state.tasks.push({ title: action.payload, rounds: 1, id: state.tasks.length });
    },
    editTask: (state, action) => {
      const { id, title } = action.payload;
      state.tasks = state.tasks.map((el) => (el.id === id ? { ...el, title: title } : el));
    },
  },
});

export const { addTask, removeTask, subtractRound, addRound, editTask } = rootSlice.actions;
export default rootSlice.reducer;
