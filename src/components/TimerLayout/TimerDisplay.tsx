import React from 'react';
import { EStages } from '../../models/timer';
import { useAppDispatch } from '../../hooks/redux';
import { addExtraMinute } from '../../redux/Slices/timerSlice';

interface ITmerDisplay {
  time: string;
  stage: EStages;
  isRunning: boolean;
}

export default function TimerDisplay({ stage, time, isRunning }: ITmerDisplay) {
  const dispatch = useAppDispatch();
  const handleAddExtraMinute = () => {
    dispatch(addExtraMinute());
  };
  const curColor = !isRunning
    ? 'text-colorText dark-mode dark:text-white'
    : stage === EStages.session
    ? 'text-colorRed'
    : 'text-colorGreen';
  return (
    <div className="relative md:mb-6 mb-3">
      <div className={`font-extralight md:text-[150px] text-[90px] leading-none ${curColor}`}>
        {time}
      </div>
      <button
        onClick={() => handleAddExtraMinute()}
        className="absolute top-1/2 left-full -translate-y-1/2 md:translate-x-[28px] translate-x-[2px] btn-pluse"
      ></button>
    </div>
  );
}
