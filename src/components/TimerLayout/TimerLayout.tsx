import React, { useEffect } from 'react';
import { useSound } from 'use-sound';
import TimerHeader from './TimerHeader';
import TimerInitial from './TimerInitial';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import { EStages } from '../../models/timer';
import { shiftTask } from '../../redux/Slices/tasksSlice';
import toggle from '../../assets/sounds/toggle-stage-sound.wav';
import { getDisplayedTime } from '../../utils/getDisplayedTime';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { reset, setTimer, switchStage } from '../../redux/Slices/timerSlice';
import {
  incrementBreakTimer,
  incrementPomodoros,
  incrementSessionTimer,
  setActualData,
} from '../../redux/Slices/statisticsSlice';

export default function TimerLayout() {
  const [toggleSound] = useSound(toggle);
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
        dispatch(setActualData());
        return;
      }
      if (!isTimerRunning && isTimerStarted) dispatch(incrementBreakTimer());
      if (timer === 0 && isTimerRunning) {
        if (stage === EStages.session) dispatch(incrementPomodoros());
        dispatch(switchStage(currentTask?.rounds ?? 1));
        toggleSound();
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
        <div className="xl:w-3/5 w-full">
          <TimerHeader
            countBreaks={breaksCount}
            countRounds={roundsCount}
            stage={stage}
            isStarted={isTimerStarted}
            title={currentTask.title}
          />
          <div className="flex flex-col items-center lg:px-10 lg:pt-[70px] lg:pb-[107px] px-5 pt-[20px] pb-[20px] bg-colorBg dark:bg-black dark-mode">
            <TimerDisplay time={getDisplayedTime(timer)} isRunning={isTimerRunning} stage={stage} />
            <h3 className="mb-4 md:mb-8 dark:text-white">
              <span className="text-center text-colorTextGrey dark-mode">Задача -</span>{' '}
              {currentTask.title}
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
