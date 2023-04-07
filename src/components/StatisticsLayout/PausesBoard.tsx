import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../UI/Icon';

interface IPausesBuard {
  pauses: number;
}

export default function PausesBoard({ pauses }: IPausesBuard) {
  const styles = 'mini-board bg-colorSemiBlue text-colorBlue';
  return (
    <StatBoard
      Icon={<Icon name={EIcons.pauses} styles="board-svg" />}
      content={pauses.toString()}
      title="Остановки"
      styles={styles}
    />
  );
}
