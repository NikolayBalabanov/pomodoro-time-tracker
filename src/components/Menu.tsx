import React from 'react';
import AddTask from './AddTask';
import Description from './Description';
import TaskList from './TaskList';

export default function Menu() {
  return (
    <aside className="w-2/5">
      <Description />
      <AddTask />
      <TaskList />
    </aside>
  );
}
