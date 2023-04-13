import React from 'react';
import { IButtonColoredProps } from '../../types/buttons';

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
