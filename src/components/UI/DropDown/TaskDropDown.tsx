import React, { useEffect, useRef } from 'react';
import TaskDropDownList from './TaskDropDownList';

interface ITaskDropDownProps {
  id: string;
  count: number;
  onDelete: () => void;
  onClose: () => void;
  toggleEditable: () => void;
}

export default function TaskDropDown({
  count,
  id,
  onClose,
  toggleEditable,
  onDelete,
}: ITaskDropDownProps) {
  const dropDown = useRef<HTMLUListElement>(null);
  const isMounted = useRef(false);
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
  }, [onClose]);

  return (
    <ul
      ref={dropDown}
      className="dropdown absolute w-[165px] h-[153px] py-[5px] list-none top-[44px] lg:-right-[69px] right-0 border border-colorGrey bg-white"
    >
      <TaskDropDownList
        id={id}
        count={count}
        onDelete={onDelete}
        onClose={onClose}
        toggleEditable={toggleEditable}
      />
    </ul>
  );
}
