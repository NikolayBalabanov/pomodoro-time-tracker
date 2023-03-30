import React from 'react';

interface IButtonCloseProps {
  callback: () => void;
}

export default function ButtonClose({ callback }: IButtonCloseProps) {
  return (
    <button
      type="button"
      className="close-btn top-[12px] right-[12px] hover:text-colorText focus:text-colorText focus:outline-none hover:scale-105 focus:scale-105"
      onClick={callback}
    ></button>
  );
}
