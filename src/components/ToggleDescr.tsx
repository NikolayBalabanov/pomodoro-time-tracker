import React from 'react';
import { IToggleDescrProps } from 'types/toggleDescr';
import Icon, { EIcons } from './UI/Icon';

export default function ToggleDescr({ isOpen, onToggle }: IToggleDescrProps) {
  return (
    <button className="btn-descr" type="button" onClick={() => onToggle()}>
      <Icon
        name={EIcons.arrow}
        styles={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
}
