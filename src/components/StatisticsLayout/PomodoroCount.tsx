import React from 'react';
import Icon, { EIcons } from '../../components/UI/Icon';
import { IPomodoroCount } from '../../types/statistics';

export default function PomodoroCount({ pomodoros }: IPomodoroCount) {
  return (
    <div className="bg-colorBg xl:w-auto sm:w-1/2 w-full dark:bg-gray-300">
      {!pomodoros ? (
        <div className="py-[32px] px-[90px]">
          <Icon name={EIcons.pomodoroEmpty} styles="mx-auto" />
        </div>
      ) : (
        <div className="flex flex-col">
          <div className="flex justify-center items-center mx-auto py-[23px]">
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
