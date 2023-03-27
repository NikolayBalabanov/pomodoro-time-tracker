import React from 'react';

interface ITmerDisplay {
  time: number[];
  stage: string;
}

export default function TimerDisplay({ stage }: ITmerDisplay) {
  return (
    <div className="relative mb-6">
      <div
        className={`font-extralight text-[150px] leading-none ${
          stage === 'active' ? 'text-colorRed' : 'text-colorText'
        }`}
      >
        25:49
      </div>
      <button className="absolute top-1/2 left-full -translate-y-1/2 translate-x-[28px] btn-pluse"></button>
    </div>
  );
}
