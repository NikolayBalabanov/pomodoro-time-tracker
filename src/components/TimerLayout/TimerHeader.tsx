import { EStages } from '../../models/timer';
import React from 'react';

interface ITimerHeader {
  title: string;
  stage: EStages;
  isStarted: boolean;
  countRounds: number;
  countBreaks: number;
}

enum EBgColors {
  Session = 'bg-colorRed',
  SmallBreak = 'bg-colorGreen',
  LongBreak = 'bg-colorGreen',
}

export default function TimerHeader({
  stage,
  title,
  countRounds,
  countBreaks,
  isStarted,
}: ITimerHeader) {
  const bgColor = isStarted ? EBgColors[stage] : 'bg-colorGrey';
  return (
    <div className={`flex items-center justify-between px-10 py-[19px] ${bgColor}`}>
      <h3 className="text-base leading-[17px] text-white font-bold">{title}</h3>
      <span className="text-base leading-[17px] text-white font-normal">
        {stage === EStages.session ? `Помидор ${countRounds}` : `Перерыв ${countBreaks}`}
      </span>
    </div>
  );
}
