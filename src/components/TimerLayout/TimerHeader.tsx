import React from 'react';

interface ITimerHeader {
  title: string;
  stage: string;
  count: number;
}

export default function TimerHeader({ stage, title, count }: ITimerHeader) {
  let bgColor = '';
  switch (stage) {
    case 'active':
      bgColor = 'bg-colorRed';
      break;
    case 'break':
      bgColor = 'bg-colorGreen';
      break;
    case 'stop':
      bgColor = 'bg-colorGrey';
      break;
    default:
      bgColor = 'bg-colorGrey';
      break;
  }
  return (
    <div className={`flex items-center justify-between px-10 py-[19px] ${bgColor}`}>
      <h3 className="text-base leading-[17px] text-white font-bold">{title}</h3>
      <span className="text-base leading-[17px] text-white font-normal">Помидор {count}</span>
    </div>
  );
}
