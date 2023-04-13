import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';
import { IFocusBoard } from '../../types/statistics';

export default function FocusBoard({ breakTime, sessionTime }: IFocusBoard) {
  const content =
    sessionTime === 0 && breakTime === 0
      ? 0
      : Math.round((100 * sessionTime) / (breakTime + sessionTime));
  return (
    <StatBoard
      Icon={<Icon name={EIcons.focus} styles="board-svg" />}
      content={`${content}%`}
      title="Фокус"
      styles="mini-board bg-colorSemiGold text-colorGold"
    />
  );
}
