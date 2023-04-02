import { combineReducers } from 'redux';
import tasksSlice from '../Slices/tasksSlice';
import timerSlice from '../Slices/timerSlice';
import statisticsSlice from '../Slices/statisticsSlice';

const rootReducer = combineReducers({
  tasksSlice,
  timerSlice,
  statisticsSlice,
});

export default rootReducer;
