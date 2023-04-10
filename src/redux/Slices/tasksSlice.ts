import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITaskState } from 'models/task';
import { v1 as uuidv1 } from 'uuid';

const initialState: ITaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
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
    removeTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.tasks = state.tasks.filter((el) => el.id !== id);
    },
    shiftTask: (state) => {
      state.tasks.shift();
    },
    addTask: (state, action) => {
      state.tasks.push({ title: action.payload, rounds: 1, id: uuidv1() });
    },
    editTask: (state, action: PayloadAction<{ id: string; title: string }>) => {
      const { id, title } = action.payload;
      state.tasks = state.tasks.map((el) => (el.id === id ? { ...el, title: title } : el));
    },
    setCurrentTask: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const pickedTaskIndex = state.tasks.findIndex((task) => task.id === id);
      const pickedTask = state.tasks.splice(pickedTaskIndex, 1);
      state.tasks.unshift(...pickedTask);
    },
  },
});

export const { addTask, removeTask, shiftTask, subtractRound, addRound, editTask, setCurrentTask } =
  tasksSlice.actions;
export default tasksSlice.reducer;
