import React from 'react';

interface IButtonColoredProps {
  text: string;
  color: 'green' | 'red';
  type: 'button' | 'submit';
  callback: () => void;
}

export default function ButtonColored({ color, text, type, callback }: IButtonColoredProps) {
  const greenStyles =
    'bg-colorGreen border-colorGreen hover:bg-colorGreen2 hover:border-colorGreen2';
  const redStyles = 'bg-colorRed border-colorRed hover:bg-colorRedHover hover:border-colorRedHover';
  return (
    <button
      type={type}
      className={`btn ${color === 'green' ? greenStyles : redStyles}`}
      aria-label={text}
      onClick={() => callback()}
    >
      {text}
    </button>
  );
}
