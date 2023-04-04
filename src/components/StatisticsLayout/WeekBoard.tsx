import React, { useRef } from 'react';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { TWeekDays } from '../../models/weekDays';
import { getHumanReadbleTime } from '../../utils/getHumanReadbleTime';

interface IWeekBoard {
  current: number;
  weekData: [number, number, number, number, number, number, number];
  onDayChange: (day: TWeekDays) => void;
}

const colorsLabelsX = ['#999999', '#999999', '#999999', '#999999', '#999999', '#999999', '#999999'];
const colorsBars = ['#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79', '#EA8A79'];

export default function WeekBoard({ current, weekData, onDayChange }: IWeekBoard) {
  const bar = useRef(null);
  console.log('current', current);
  const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const data = {
    labels,
    datasets: [
      {
        backgroundColor: colorsBars,
        // data: weekData.map((el) => Math.ceil(el / 60)),
        data: weekData,
      },
    ],
  };
  const onClickBar = (event: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
    if (!bar.current) return;
    const element = getElementAtEvent(bar.current, event)[0];
    if (!element) return;
    const dayNumber = (element.index + 1) as 1 | 2 | 3 | 4 | 5 | 6 | 7;
    onDayChange(dayNumber);
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    minBarLength: 9,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: { enabled: false },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        position: 'right' as const,
        color: 'red',
        ticks: {
          callback: function (value: unknown) {
            return getHumanReadbleTime(value as number, true);
          },
          stepSize: 25,
          font: {
            size: 12,
          },
          color: '#333333',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 24,
          },
          color: colorsLabelsX,
        },
      },
    },
  };
  return <Bar data={data} options={options} ref={bar} onClick={onClickBar} />;
}
