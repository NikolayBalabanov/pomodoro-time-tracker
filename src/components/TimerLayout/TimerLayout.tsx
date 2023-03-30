import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import React, { useEffect } from 'react';
import ButtonStop from '../../components/UI/ButtonStop';
import TimerDisplay from './TimerDisplay';
import TimerHeader from './TimerHeader';
import { getDisplayedTime } from '../../utils/getDisplayedTime';
import ButtonToggler from '../../components/UI/ButtonToggler';
import { EStages } from '../../models/timer';
import { setInitialRounds, setTimer, switchStage } from '../../redux/Slices/timerSlice';

export default function TimerLayout() {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.persistedReducer.tasksSlice);
  const { timer, isTimerRunning, isTimerStarted, stage, roundsCount, breaksCount } = useAppSelector(
    (state) => state.persistedReducer.timerSlice
  );
  const currentTask = tasks.length > 0 ? tasks[0] : null;
  useEffect(() => {
    if (currentTask) {
      dispatch(setInitialRounds(currentTask?.rounds));
    }
  }, [currentTask]);
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (!isTimerRunning) return;
      if (timer === 0 && stage === EStages.session) {
        console.log('Сессия завершена');
        dispatch(switchStage());
      } else if (timer === 0 && stage === EStages.smallBreak) {
        console.log('Завершена мини пауза');
        dispatch(switchStage());
      } else if (timer === 0 && stage === EStages.longBreak) {
        console.log('Завершена большая пауза');
        dispatch(switchStage());
      }
      console.log('---ТИК---');
      dispatch(setTimer());
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
            countBreaks={breaksCount + 1}
            countRounds={roundsCount + 1}
            stage={stage}
            isStarted={isTimerStarted}
            title={currentTask.title}
          />
          <div className="flex flex-col items-center bg-colorBg pt-[70px] px-10 pb-[107px]">
            <TimerDisplay time={getDisplayedTime(timer)} isRunning={isTimerRunning} stage={stage} />
            <h3 className="mb-8">
              <span className="text-colorTextGrey">Задача {currentTask.id + 1} -</span>{' '}
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
