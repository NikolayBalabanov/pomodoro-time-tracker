import React from 'react';

interface IButtonStopProps {
  text: string;
  isDisabled: boolean;
}

export default function ButtonStop({ isDisabled, text }: IButtonStopProps) {
  return (
    <button
      type="button"
      className="btn border-colorRed text-colorRed bg-transparent hover:bg-colorRed hover:text-white"
      aria-label={text}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}
