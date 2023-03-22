import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList() {
  return (
    <div>
      <ul className="mb-5 w-[370px] flex flex-col items-start list-none">
        <TaskItem count={1} title="Сверстать сайт" id={0} />
        <TaskItem count={2} title="Проверить валидность" id={1} />
        <TaskItem count={1} title="Купить хлеба" id={2} />
      </ul>
      <span>1 час 15 мин</span>
    </div>
  );
}
