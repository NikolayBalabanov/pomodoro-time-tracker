import React from 'react';
import { EIcons } from '../Icon';
import DropDownItem from './TaskDropDownItem';
import { useAppDispatch } from '../../../hooks/redux';
import { addRound, subtractRound } from '../../../redux/Slices/tasksSlice';
import { ITaskDropDownItemProps, ITaskDropDownListProps } from '../../../types/dropDown';

export default function TaskDropDownList({
  count,
  id,
  onClose,
  toggleEditable,
  onDelete,
}: ITaskDropDownListProps) {
  const dispatch = useAppDispatch();
  const handleIncrement = () => dispatch(addRound(id));
  const handleDecrement = () => dispatch(subtractRound(id));
  const handleEdit = () => {
    toggleEditable();
    onClose();
  };
  const handleRemove = () => {
    onClose();
    onDelete();
  };
  const TaskDropDownItems: ITaskDropDownItemProps[] = [
    { eventHandler: handleIncrement, count: count, iconName: EIcons.increment, text: 'Увеличить' },
    { eventHandler: handleDecrement, count: count, iconName: EIcons.decrement, text: 'Уменьшить' },
    { eventHandler: handleEdit, count: count, iconName: EIcons.edit, text: 'Редактировать' },
    { eventHandler: handleRemove, count: count, iconName: EIcons.remove, text: 'Удалить' },
  ];

  return (
    <>
      {TaskDropDownItems.map(({ count, eventHandler, iconName, text }, index) => (
        <DropDownItem
          key={index}
          eventHandler={eventHandler}
          count={count}
          iconName={iconName}
          text={text}
        />
      ))}
    </>
  );
}
