import React from 'react';
import Icon, { EIcons } from '../../components/UI/Icon';

interface IPomodoroEmpty {
  pomodoros: number;
}

export default function PomodoroCount({ pomodoros }: IPomodoroEmpty) {
  return (
    <div className="bg-colorBg">
      {!pomodoros ? (
        <div className="py-[32px] px-[90px]">
          <Icon name={EIcons.pomodoroEmpty} />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-center items-center py-[23px]">
            <Icon name={EIcons.pomodoro} styles="mr-[10px]" />
            <span className="font-bold text-2xl text-colorTextGrey">x {pomodoros}</span>
          </div>
          <div className="p-[9px] bg-colorRed text-2xl text-white text-center font-bold">
            Помидоров: {pomodoros}
          </div>
        </div>
      )}
    </div>
  );
}
