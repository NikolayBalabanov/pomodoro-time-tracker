import React from 'react';
import { ISelectCurrentProps } from '../../../types/select';
import Icon, { EIcons } from '../Icon';

export default function SelectCurrent({ isOpen, onSelect, text }: ISelectCurrentProps) {
  return (
    <button
      type="button"
      className={`select-item ${
        isOpen ? 'border-b border-b-colorGrey' : 'border-b border-transparent'
      } `}
      onClick={() => onSelect()}
    >
      <span>{text}</span>
      <Icon
        name={EIcons.arrow}
        styles={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
}
