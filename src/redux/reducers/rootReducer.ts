import { combineReducers } from 'redux';
import tasksSlice from '../Slices/tasksSlice';
import timerSlice from '../Slices/timerSlice';

const rootReducer = combineReducers({
  tasksSlice,
  timerSlice,
});

export default rootReducer;
