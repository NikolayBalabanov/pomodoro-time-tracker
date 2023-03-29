import React from 'react';
import TaskItem from './TaskItem';
import { useAppSelector } from '../hooks/redux';

export default function TaskList() {
  const { tasks } = useAppSelector((store) => store.persistedReducer.tasksSlice);
  return (
    <div>
      <ul className="mb-5 w-[370px] flex flex-col items-start list-none">
        {tasks.map((task) => (
          <TaskItem key={task.id} count={task.rounds} title={task.title} id={task.id} />
        ))}
      </ul>
      <span>1 час 15 мин</span>
    </div>
  );
}
