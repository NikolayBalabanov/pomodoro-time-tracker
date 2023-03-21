import React from 'react';
import AddTask from './AddTask';
import Description from './Description';
import TaskList from './TaskList';

export default function Menu() {
  return (
    <aside>
      <Description />
      <AddTask />
      <TaskList />
    </aside>
  );
}
