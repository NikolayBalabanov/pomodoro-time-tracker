import React from 'react';
import { ITimerHeader } from '../../types/timer';
import { EStages } from '../../models/timer';

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
    <div className={`flex items-center justify-between md:px-10 md:py-[19px] px-4 py-3 ${bgColor}`}>
      <h3 className="w-1/2 text-start break-words text-base leading-[17px] text-white font-bold dark-mode dark:text-colorText">
        {title}
      </h3>
      <span className="text-base leading-[17px] text-white font-normal dark-mode dark:text-colorText">
        {stage === EStages.session ? `Помидор ${countRounds}` : `Перерыв ${countBreaks}`}
      </span>
    </div>
  );
}
