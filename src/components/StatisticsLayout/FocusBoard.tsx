import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';

interface IFocusBoard {
  sessionTime: number;
  breakTime: number;
}

export default function FocusBoard({ breakTime, sessionTime }: IFocusBoard) {
  const styles = 'flex p-[25px] justify-between w-full items-center';
  const content = Math.round((100 * sessionTime) / (breakTime + sessionTime));
  return (
    <StatBoard
      Icon={<Icon name={EIcons.focus} />}
      content={`${content}%`}
      title="Фокус"
      styles={styles}
    />
  );
}
