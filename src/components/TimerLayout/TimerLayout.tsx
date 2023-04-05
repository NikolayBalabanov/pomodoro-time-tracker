import React, { useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import TimerHeader from './TimerHeader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDisplayedTime } from '../../utils/getDisplayedTime';
import { reset, setTimer, switchStage } from '../../redux/Slices/timerSlice';
import { shiftTask } from '../../redux/Slices/tasksSlice';
import TimerControls from './TimerControls';
import TimerInitial from './TimerInitial';
import { EStages } from '../../models/timer';
import {
  incrementBreakTimer,
  incrementPomodoros,
  incrementSessionTimer,
} from '../../redux/Slices/statisticsSlice';

export default function TimerLayout() {
  const dispatch = useAppDispatch();
  const { statistics } = useAppSelector((state) => state.persistedReducer.statisticsSlice);
  const { tasks } = useAppSelector((state) => state.persistedReducer.tasksSlice);
  const { timer, isTimerRunning, isTimerStarted, stage, roundsCount, breaksCount, isFinish } =
    useAppSelector((state) => state.persistedReducer.timerSlice);
  const currentTask = tasks.length > 0 ? tasks[0] : null;
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isFinish) {
        dispatch(reset());
        dispatch(shiftTask());
        return;
      }
      if (!isTimerRunning && isTimerStarted) dispatch(incrementBreakTimer());
      if (timer === 0 && isTimerRunning) {
        if (stage === EStages.session) dispatch(incrementPomodoros());
        dispatch(switchStage(currentTask?.rounds ?? 1));
      }
      if (timer > 0 && isTimerRunning) {
        if (stage === EStages.session) dispatch(incrementSessionTimer());
        dispatch(setTimer());
      }
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <>
      {currentTask ? (
        <div className="w-3/5">
          <TimerHeader
            countBreaks={breaksCount}
            countRounds={roundsCount}
            stage={stage}
            isStarted={isTimerStarted}
            title={currentTask.title}
          />
          <div className="flex flex-col items-center bg-colorBg pt-[70px] px-10 pb-[107px]">
            <TimerDisplay time={getDisplayedTime(timer)} isRunning={isTimerRunning} stage={stage} />
            <h3 className="mb-8">
              <span className="text-colorTextGrey">Задача -</span> {currentTask.title}
            </h3>
            <TimerControls />
          </div>
        </div>
      ) : (
        <TimerInitial />
      )}
    </>
  );
}
