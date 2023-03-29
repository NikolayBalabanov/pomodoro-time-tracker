import React, { useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { editTask } from '../redux/Slices/tasksSlice';
import EditableTitle from './EditableTitle';
import DropDown from './UI/DropDown/DropDown';

interface ITaskItemProps {
  title: string;
  count: number;
  id: number;
}

export default function TaskItem({ count, id, title }: ITaskItemProps) {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isTitleEditable, setIsTitleEditable] = useState<boolean>(false);
  const toggleEditable = () => setIsTitleEditable((prev) => !prev);
  const updateTitle = (newTitle: string) => {
    dispatch(editTask({ id: id, title: newTitle }));
  };

  const onClose = () => setIsOpen(!isOpen);
  return (
    <li className="task-item flex items-center w-full py-[15px]">
      <span className="mr-[10px] text-base leading-none flex items-center justify-center w-[25px] h-[25px] border border-colorGrey rounded-full">
        {count}
      </span>
      <EditableTitle
        title={title}
        edited={isTitleEditable}
        toggleEditable={toggleEditable}
        updateTitle={updateTitle}
      />
      <button className="task-menu" onClick={() => setIsOpen(!isOpen)}>
        <span className="task-menu__item"></span>
      </button>
      {isOpen && (
        <DropDown onClose={onClose} toggleEditable={toggleEditable} id={id} count={count} />
      )}
    </li>
  );
}
