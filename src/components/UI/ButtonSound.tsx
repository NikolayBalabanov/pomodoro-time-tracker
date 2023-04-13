import React from 'react';
import { AiOutlineSound } from 'react-icons/ai';
import { GrVolumeMute } from 'react-icons/gr';
import { IButtonSound } from '../../types/buttons';

export default function ButtonSound({ onToggleSound, isMute }: IButtonSound) {
  return (
    <button type="button" className="btn-sound" onClick={() => onToggleSound()}>
      {isMute ? <GrVolumeMute /> : <AiOutlineSound />}
    </button>
  );
}
