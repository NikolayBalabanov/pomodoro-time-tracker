import React, { memo } from 'react';
import TaskItem from './TaskItem';
import { useAppSelector } from '../hooks/redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { getHumanReadbleTime } from '../utils/getHumanReadbleTime';
import { getTotalTasksTime } from '../utils/getTotalTaskTime';

const TaskList = memo(() => {
  const { tasks } = useAppSelector((store) => store.persistedReducer.tasksSlice);
  const { session } = useAppSelector((store) => store.persistedReducer.timerSlice);
  const totalTime = getHumanReadbleTime(getTotalTasksTime(tasks, session), true);
  return (
    <div>
      <ul className="mb-5 xl:w-[370px] w-full flex flex-col items-start list-none">
        <TransitionGroup component={null}>
          {tasks.map((task) => (
            <CSSTransition key={task.id} timeout={500} classNames="task">
              <TaskItem count={task.rounds} title={task.title} id={task.id} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <span className="dark-mode dark:text-colorGrey">{totalTime}</span>
    </div>
  );
});

export default TaskList;
