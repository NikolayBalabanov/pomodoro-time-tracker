import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { editTask, removeTask } from '../redux/Slices/tasksSlice';
import EditableTitle from './EditableTitle';
import DropDown from './UI/DropDown/DropDown';
import Confirm from './UI/Modals/Confirm';
import Notification from './UI/Modals/Notification';

interface ITaskItemProps {
  title: string;
  count: number;
  id: string;
}

export default function TaskItem({ count, id, title }: ITaskItemProps) {
  const { isTimerRunning } = useAppSelector((state) => state.persistedReducer.timerSlice);
  const dispatch = useAppDispatch();
  const [isModal, setIsModal] = useState<boolean>(false);
  const [isNotice, setIsNotice] = useState<boolean>(false);
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isTitleEditable, setIsTitleEditable] = useState<boolean>(false);
  const toggleEditable = () => setIsTitleEditable((prev) => !prev);
  const updateTitle = (newTitle: string) => {
    dispatch(editTask({ id: id, title: newTitle }));
  };
  const deleteTask = () => dispatch(removeTask(id));
  const handleDropDown = () => {
    if (isTimerRunning) {
      setIsNotice(true);
      return;
    }
    setIsDropDown(!isDropDown);
  };
  const onDropDownClose = () => setIsDropDown(!isDropDown);
  const modalClose = () => setIsModal(false);
  const noticeClose = () => setIsNotice(false);
  const modalOpen = () => setIsModal(true);

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
      <button className="task-menu" onClick={() => handleDropDown()}>
        <span className="task-menu__item"></span>
      </button>
      {isDropDown && (
        <DropDown
          onClose={onDropDownClose}
          onDelete={modalOpen}
          toggleEditable={toggleEditable}
          id={id}
          count={count}
        />
      )}
      {isModal && <Confirm onClose={modalClose} onConfirm={deleteTask} />}
      {isNotice && <Notification onClose={noticeClose} />}
    </li>
  );
}
