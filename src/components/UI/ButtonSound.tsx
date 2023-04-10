import React from 'react';
import { AiOutlineSound } from 'react-icons/ai';
import { GrVolumeMute } from 'react-icons/gr';

interface IButtonSound {
  onToggleSound: () => void;
  isMute: boolean;
}

export default function ButtonSound({ onToggleSound, isMute }: IButtonSound) {
  return (
    <button type="button" className="btn-sound" onClick={() => onToggleSound()}>
      {isMute ? <GrVolumeMute /> : <AiOutlineSound />}
    </button>
  );
}
