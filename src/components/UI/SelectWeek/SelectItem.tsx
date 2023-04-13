import React from 'react';
import { ISelectItem } from '../../../types/select';

export default function SelectItem({ onChooseWeek, value, text }: ISelectItem) {
  return (
    <button type="button" className="select-item" onClick={() => onChooseWeek(value)}>
      <span>{text}</span>
    </button>
  );
}
