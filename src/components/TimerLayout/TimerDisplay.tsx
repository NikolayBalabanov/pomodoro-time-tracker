import React from 'react';
import { EStages } from '../../models/timer';

interface ITmerDisplay {
  time: string;
  stage: EStages;
}

export default function TimerDisplay({ stage, time }: ITmerDisplay) {
  return (
    <div className="relative mb-6">
      <div
        className={`font-extralight text-[150px] leading-none ${
          stage === EStages.session ? 'text-colorRed' : 'text-colorText'
        }`}
      >
        {time}
      </div>
      <button className="absolute top-1/2 left-full -translate-y-1/2 translate-x-[28px] btn-pluse"></button>
    </div>
  );
}
