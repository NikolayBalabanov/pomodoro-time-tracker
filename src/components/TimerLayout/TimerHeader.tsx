import React from 'react';

interface ITimerHeader {
  title: string;
  stage: 'active' | 'break' | 'stop';
  count: number;
}

enum EStages {
  active = 'bg-colorRed',
  break = 'bg-colorGreen',
  stop = 'bg-colorGrey',
}

export default function TimerHeader({ stage, title, count }: ITimerHeader) {
  const bgColor = EStages[stage];
  return (
    <div className={`flex items-center justify-between px-10 py-[19px] ${bgColor}`}>
      <h3 className="text-base leading-[17px] text-white font-bold">{title}</h3>
      <span className="text-base leading-[17px] text-white font-normal">Помидор {count}</span>
    </div>
  );
}
