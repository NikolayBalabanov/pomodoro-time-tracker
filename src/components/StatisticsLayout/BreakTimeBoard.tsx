import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';
import { getHumanReadbleTime } from '../../utils/getHumanReadbleTime';

interface IBreakTimeBoard {
  breakTime: number;
}

export default function BreakTimeBoard({ breakTime }: IBreakTimeBoard) {
  const styles = 'mini-board bg-colorSemiPurple text-colorPurple';
  const content = breakTime ? getHumanReadbleTime(breakTime, true) : '0c';
  return (
    <StatBoard
      Icon={<Icon name={EIcons.breaks} styles="board-svg" />}
      content={content}
      title="Время на паузе"
      styles={styles}
    />
  );
}
