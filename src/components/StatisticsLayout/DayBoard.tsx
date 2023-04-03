import React from 'react';

interface IDayBoardProps {
  day: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  time: number;
}

const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восскресенье'];

export default function DayBoard({ day, time }: IDayBoardProps) {
  const minuts = Math.ceil(time / 60);
  return (
    <div className="flex flex-col p-[25px] min-h-[296px] text-colorText bg-colorBg">
      <h2 className="mb-[14px] text-2xl font-bold">{days[day]}</h2>
      {time > 0 ? (
        <p className="text-base leading-7">
          Вы работали над задачами в течение{' '}
          <span className="text-colorRed font-bold">52 минут</span>
        </p>
      ) : (
        <p className="text-base leading-7">Нет данных</p>
      )}
    </div>
  );
}
