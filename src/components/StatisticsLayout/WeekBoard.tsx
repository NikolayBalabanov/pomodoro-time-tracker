import React, { useRef } from 'react';
import { EWeekDays } from '../../models/weekDays';
import { IWeekBoard } from '../../types/statistics';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import getDashBoardOptions from '../../utils/getDashBoardOptions';

export default function WeekBoard({ current, weekData, onDayChange }: IWeekBoard) {
  const bar = useRef(null);
  const onClickBar = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!bar.current) return;
    const element = getElementAtEvent(bar.current, event)[0];
    if (!element) return;
    const dayNumber = (element.index + 1) as EWeekDays;
    onDayChange(dayNumber);
  };
  const { data, options } = getDashBoardOptions(current, weekData);
  return (
    <Bar
      data={data}
      className="bg-colorBg cursor-pointer dark:bg-gray-300"
      options={options}
      ref={bar}
      onClick={onClickBar}
    />
  );
}
