import React, { useState } from 'react';
import Confirm from './UI/Modals/Confirm';
import EditableTitle from './EditableTitle';
import DropDown from './UI/DropDown/TaskDropDown';
import { reset } from '../redux/Slices/timerSlice';
import { ITaskItemProps } from '../types/taskItem';
import Notification from './UI/Modals/Notification';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { editTask, removeTask, setCurrentTask } from '../redux/Slices/tasksSlice';

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
  const checkTimerRuning = () => {
    if (isTimerRunning) {
      setIsNotice(true);
      return true;
    }
    return false;
  };
  const handleDropDown = () => {
    if (checkTimerRuning()) return;
    setIsDropDown(!isDropDown);
  };
  const handlePick = () => {
    if (checkTimerRuning()) return;
    dispatch(setCurrentTask(id));
    dispatch(reset());
  };
  const onDropDownClose = () => setIsDropDown(!isDropDown);
  const modalClose = () => setIsModal(false);
  const noticeClose = () => setIsNotice(false);
  const modalOpen = () => setIsModal(true);

  return (
    <li className="task">
      <span className="task__counter">{count}</span>
      <EditableTitle
        title={title}
        edited={isTitleEditable}
        onPickTask={handlePick}
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
