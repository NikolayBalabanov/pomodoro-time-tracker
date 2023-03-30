import React from 'react';
import { EStages } from '../../models/timer';

interface ITmerDisplay {
  time: string;
  stage: EStages;
  isRunning: boolean;
}

export default function TimerDisplay({ stage, time, isRunning }: ITmerDisplay) {
  const curColor = !isRunning
    ? 'text-colorText'
    : stage === EStages.session
    ? 'text-colorRed'
    : 'text-colorGreen';
  return (
    <div className="relative mb-6">
      <div className={`font-extralight text-[150px] leading-none ${curColor}`}>{time}</div>
      <button className="absolute top-1/2 left-full -translate-y-1/2 translate-x-[28px] btn-pluse"></button>
    </div>
  );
}
