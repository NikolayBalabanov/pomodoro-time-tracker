import React, { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { addRound, removeTask, subtractRound } from '../../../redux/Slices/tasksSlice';
import { EIcons } from '../Icon';
import DropDownItem, { IDropDownItemProps } from './DropDownItem';

interface IDropDownProps {
  id: number;
  count: number;
  onClose: () => void;
  toggleEditable: () => void;
}

export default function DropDown({ count, id, onClose, toggleEditable }: IDropDownProps) {
  const { isTimerRunning } = useAppSelector((state) => state.persistedReducer.timerSlice);
  const dispatch = useAppDispatch();
  const dropDown = useRef<HTMLUListElement>(null);
  const isMounted = useRef(false);
  const handleIncrement = () => {
    if (isTimerRunning) {
      alert('Остановите таймер, чтобы изменить количество помидорок!');
      return;
    }
    dispatch(addRound(id));
  };
  const handleDecrement = () => {
    if (isTimerRunning) {
      alert('Остановите таймер, чтобы изменить количество помидорок!');
      return;
    }
    dispatch(subtractRound(id));
  };
  const handleEdit = () => {
    if (isTimerRunning) {
      alert('Остановите таймер, чтобы изменить количество помидорок!');
      return;
    }
    toggleEditable();
    onClose();
  };
  const handleRemove = () => {
    if (isTimerRunning) {
      alert('Остановите таймер, чтобы изменить количество помидорок!');
      return;
    }
    onClose();
    dispatch(removeTask(id));
  };
  const DropDownList: IDropDownItemProps[] = [
    { eventHandler: handleIncrement, count: count, iconName: EIcons.increment, text: 'Увеличить' },
    { eventHandler: handleDecrement, count: count, iconName: EIcons.decrement, text: 'Уменьшить' },
    { eventHandler: handleEdit, count: count, iconName: EIcons.edit, text: 'Редактировать' },
    { eventHandler: handleRemove, count: count, iconName: EIcons.remove, text: 'Удалить' },
  ];
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDown.current &&
        !event.composedPath().includes(dropDown.current) &&
        isMounted.current
      ) {
        onClose();
      }
      isMounted.current = true;
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <ul
      ref={dropDown}
      className="dropdown absolute w-[165px] h-[153px] py-[5px] list-none top-[44px] -right-[69px] border border-colorGrey bg-white"
    >
      {DropDownList.map(({ count, eventHandler, iconName, text }, index) => (
        <DropDownItem
          key={index}
          eventHandler={eventHandler}
          count={count}
          iconName={iconName}
          text={text}
        />
      ))}
    </ul>
  );
}
