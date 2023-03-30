import React from 'react';

interface IButtonConfirmProps {
  text: string;
  callback: () => void;
}

export default function ButtonConfirm({ text, callback }: IButtonConfirmProps) {
  return (
    <button
      type="button"
      className="mb-[10px] btn border-none bg-colorRed hover:bg-colorRedHover focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      onClick={callback}
    >
      {text}
    </button>
  );
}
