import React from 'react';

interface ISelectItem {
  onChooseWeek: (target: number) => void;
  value: number;
  text: string;
}

export default function SelectItem({ onChooseWeek, value, text }: ISelectItem) {
  return (
    <button type="button" className="select-item" onClick={() => onChooseWeek(value)}>
      <span>{text}</span>
    </button>
  );
}
