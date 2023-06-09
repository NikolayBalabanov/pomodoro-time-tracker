import React from 'react';
import { reset, stopTimer, switchStage } from '../../redux/Slices/timerSlice';
import { shiftTask } from '../../redux/Slices/tasksSlice';
import { incrementPauses, incrementPomodoros } from '../../redux/Slices/statisticsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { EStages } from '../../models/timer';
import { IButtonStopProps } from '../../types/buttons';

enum EStopText {
  stop = 'Стоп',
  done = 'Сделано',
  skip = 'Пропустить',
}

export default function ButtonStop({ stage, text, isRunning, isStarted }: IButtonStopProps) {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state.persistedReducer.tasksSlice);
  const handleSkip = () => {
    dispatch(switchStage(tasks.length > 0 ? tasks[0].rounds : 1));
  };
  const handleDone = () => {
    dispatch(incrementPomodoros());
    dispatch(reset());
    dispatch(shiftTask());
  };
  const handleStop = () => {
    dispatch(stopTimer());
    dispatch(incrementPauses());
  };
  const curCallback = () => {
    if (isStarted && !isRunning && stage === EStages.session) return handleDone;
    if (stage === EStages.longBreak || stage === EStages.smallBreak) return handleSkip;
    return handleStop;
  };
  return (
    <button
      type="button"
      className="btn btn-stop"
      aria-label={text}
      disabled={!isStarted}
      onClick={curCallback()}
    >
      {!isStarted && stage === EStages.session && EStopText.stop}
      {isRunning && stage === EStages.session && EStopText.stop}
      {isStarted && !isRunning && stage === EStages.session && EStopText.done}
      {(stage === EStages.longBreak || stage === EStages.smallBreak) && EStopText.skip}
    </button>
  );
}
