import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';

interface IPausesBuard {
  pauses: number;
}

export default function PausesBuard({ pauses }: IPausesBuard) {
  const styles = 'flex p-[25px] justify-between w-full items-center';
  // TODO: Вычислить контент
  // TODO: цвет бг и свг
  return (
    <StatBoard Icon={<Icon name={EIcons.pauses} />} content="3" title="Остановки" styles={styles} />
  );
}
