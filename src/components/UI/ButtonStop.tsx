import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { reset, switchStage } from '../../redux/Slices/timerSlice';
import { EStages } from '../../models/timer';

enum EStopText {
  stop = 'Стоп',
  done = 'Сделано',
  skip = 'Пропустить',
}

interface IButtonStopProps {
  text: string;
  stage: EStages;
  isStarted: boolean;
  isRunning: boolean;
}

export default function ButtonStop({ stage, text, isRunning, isStarted }: IButtonStopProps) {
  const dispatch = useAppDispatch();
  const handleSkip = () => {
    console.log('handleSkip');
    dispatch(switchStage());
  };
  const handleDone = () => {
    console.log('handleDone');
    dispatch(switchStage());
  };
  const handleStop = () => {
    console.log('handleStop');
    dispatch(reset());
  };
  const curCallback = () => {
    if (isStarted && !isRunning && stage === EStages.session) return handleDone;
    if (stage === EStages.longBreak || stage === EStages.smallBreak) return handleSkip;
    return handleStop;
  };
  return (
    <button
      type="button"
      className="btn border-colorRed text-colorRed bg-transparent hover:bg-colorRed hover:text-white"
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
