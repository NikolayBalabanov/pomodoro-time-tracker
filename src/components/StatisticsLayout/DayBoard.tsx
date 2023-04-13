import React from 'react';
import { IDayBoardProps } from '../../types/statistics';
import { getHumanReadbleTime } from '../../utils/getHumanReadbleTime';

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восскресенье'];

export default function DayBoard({ day, time }: IDayBoardProps) {
  const timeToString = getHumanReadbleTime(time);
  return (
    <div className="flex flex-col p-[25px] xl:min-h-[296px] xl:w-auto sm:w-1/2 w-full text-colorText bg-colorBg dark:bg-gray-300">
      <h2 className="mb-[14px] text-2xl font-bold">{days[day - 1]}</h2>
      {time > 0 ? (
        <p className="text-base leading-7">
          Вы работали над задачами в течение
          <span className="text-colorRed font-bold"> {timeToString}</span>
        </p>
      ) : (
        <p className="text-base leading-7">Нет данных</p>
      )}
    </div>
  );
}
