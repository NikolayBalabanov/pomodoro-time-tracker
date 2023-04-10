import { combineReducers } from 'redux';
import tasksSlice from '../Slices/tasksSlice';
import timerSlice from '../Slices/timerSlice';
import themeSlice from '../Slices/themeSlice';
import statisticsSlice from '../Slices/statisticsSlice';

const rootReducer = combineReducers({
  tasksSlice,
  timerSlice,
  statisticsSlice,
  themeSlice,
});

export default rootReducer;
