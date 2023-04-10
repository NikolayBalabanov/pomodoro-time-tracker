import React from 'react';

interface IButtonColoredProps {
  text: string;
  color: 'green' | 'red';
  type: 'button' | 'submit';
  callback: () => void;
}

export default function ButtonColored({ color, text, type, callback }: IButtonColoredProps) {
  return (
    <button
      type={type}
      className={`btn ${color === 'green' ? 'btn-green' : 'btn-red'}`}
      aria-label={text}
      onClick={() => callback()}
    >
      {text}
    </button>
  );
}
