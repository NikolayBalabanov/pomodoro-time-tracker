import React, { useState } from 'react';
import TaskDropDown from './UI/TaskDropDown';

interface ITaskItemProps {
  title: string;
  count: number;
  id: number;
}

export default function TaskItem({ count, id, title }: ITaskItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  console.log(id);
  return (
    <li className="task-item flex items-center w-full py-[15px]">
      <span className="mr-[10px] text-base leading-none flex items-center justify-center w-[25px] h-[25px] border border-colorGrey rounded-full">
        {count}
      </span>
      <h3 className="mr-auto text-base leading-none">{title}</h3>
      <button className="task-menu" onClick={() => setIsOpen(!isOpen)}>
        <span className="task-menu__item"></span>
      </button>
      {isOpen && <TaskDropDown />}
    </li>
  );
}
