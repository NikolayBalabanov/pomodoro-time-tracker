import React, { useEffect, useRef } from 'react';

interface IEditableProps {
  title: string;
  edited: boolean;
  updateTitle: (e: string) => void;
  toggleEditable: () => void;
}

export default function EditableTitle({
  edited,
  title,
  updateTitle,
  toggleEditable,
}: IEditableProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const save = () => {
    toggleEditable();
    updateTitle(inputRef.current?.value as string);
  };

  const handleKeyDown = ({ key }: React.KeyboardEvent) => {
    if (key === 'Enter') save();
    if (key === 'Escape') toggleEditable();
  };

  useEffect(() => {
    if (edited) {
      inputRef.current?.focus();
    }
  }, [edited]);

  return (
    <>
      {edited ? (
        <input
          className="mr-auto w-fit px-[5px] pt-[1px] pb-[2px] text-base leading-none border-none bg-colorBg outline-none"
          ref={inputRef}
          onBlur={save}
          onKeyDown={handleKeyDown}
          defaultValue={title}
        />
      ) : (
        <h2 className="mr-auto px-[5px] py-[4px] text-base leading-none overflow-x-clip dark-mode dark:text-colorBg">
          {title.length > 0 ? title : 'Default title'}
        </h2>
      )}
    </>
  );
}
