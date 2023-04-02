import React from 'react';
import TaskItem from './TaskItem';
import { useAppSelector } from '../hooks/redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function TaskList() {
  const { tasks } = useAppSelector((store) => store.persistedReducer.tasksSlice);
  return (
    <div>
      <ul className="mb-5 w-[370px] flex flex-col items-start list-none">
        <TransitionGroup component={null}>
          {tasks.map((task) => (
            <CSSTransition key={task.id} timeout={500} classNames="task">
              <TaskItem count={task.rounds} title={task.title} id={task.id} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <span>1 час 15 мин</span>
    </div>
  );
}
