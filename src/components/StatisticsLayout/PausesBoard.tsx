import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../UI/Icon';

interface IPausesBuard {
  pauses: number;
}

export default function PausesBoard({ pauses }: IPausesBuard) {
  const styles = 'flex p-[25px] justify-between w-full items-center';
  // TODO: цвет бг и свг
  return (
    <StatBoard
      Icon={<Icon name={EIcons.pauses} />}
      content={pauses.toString()}
      title="Остановки"
      styles={styles}
    />
  );
}
