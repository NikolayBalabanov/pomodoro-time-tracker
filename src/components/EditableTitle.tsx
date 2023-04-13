import React, { useEffect, useRef } from 'react';
import { IEditableProps } from '../types/editableTitle';

export default function EditableTitle({
  edited,
  title,
  onPickTask,
  updateTitle,
  toggleEditable,
}: IEditableProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    toggleEditable();
    updateTitle(inputRef.current?.value as string);
  };

  const handlePick = () => !edited && onPickTask();

  const handleKeyDown = ({ key }: React.KeyboardEvent) => {
    if (key === 'Enter') save();
    if (key === 'Escape') toggleEditable();
  };

  useEffect(() => {
    if (edited) inputRef.current?.focus();
  }, [edited]);

  return (
    <>
      {edited ? (
        <input
          className="task__input"
          ref={inputRef}
          onBlur={save}
          onKeyDown={handleKeyDown}
          defaultValue={title}
        />
      ) : (
        <h2 onClick={() => handlePick()} className="task__title">
          {title.length > 0 ? title : 'Default title'}
        </h2>
      )}
    </>
  );
}
