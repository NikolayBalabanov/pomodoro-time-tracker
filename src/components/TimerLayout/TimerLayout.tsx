import React, { useEffect } from 'react';
import TimerDisplay from './TimerDisplay';
import TimerHeader from './TimerHeader';
import ButtonStop from '../../components/UI/ButtonStop';
import ButtonToggler from '../../components/UI/ButtonToggler';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getDisplayedTime } from '../../utils/getDisplayedTime';
import { reset, setInitialRounds, setTimer, switchStage } from '../../redux/Slices/timerSlice';
import { shiftTask } from '../../redux/Slices/tasksSlice';

export default function TimerLayout() {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.persistedReducer.tasksSlice);
  const {
    timer,
    isTimerRunning,
    isTimerStarted,
    stage,
    roundsCount,
    breaksCount,
    isFinish,
    initialRounds,
  } = useAppSelector((state) => state.persistedReducer.timerSlice);
  const currentTask = tasks.length > 0 ? tasks[0] : null;
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (isFinish) {
        dispatch(reset());
        dispatch(shiftTask());
        return;
      }
      if (currentTask && initialRounds < currentTask.rounds) {
        dispatch(setInitialRounds(currentTask.rounds));
      }
      if (!isTimerRunning) return;
      if (timer === 0) dispatch(switchStage());
      if (timer > 0) dispatch(setTimer());
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
              <span className="text-colorTextGrey">Задача {tasks.indexOf(currentTask) + 1} -</span>{' '}
              {currentTask.title}
            </h3>
            <div className="flex gap-[25px]">
              <ButtonToggler isStarted={isTimerStarted} isRunning={isTimerRunning} />
              <ButtonStop
                text={'Стоп'}
                isRunning={isTimerRunning}
                isStarted={isTimerStarted}
                stage={stage}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-3/5">
          <div className="flex flex-col items-center bg-colorBg pt-[70px] px-10 pb-[107px]">
            <h1>Создай задачу и приступим</h1>
          </div>
        </div>
      )}
    </>
  );
}
