import React from 'react';
import { IButtonUnderscoredProps } from '../../types/buttons';

export default function ButtonUnderscored({ text, callback }: IButtonUnderscoredProps) {
  return (
    <button
      type="button"
      className="underscored w-fit leading-none self-center hover:text-colorRed focus:outline-none focus:text-colorRed"
      onClick={callback}
    >
      {text}
    </button>
  );
}
