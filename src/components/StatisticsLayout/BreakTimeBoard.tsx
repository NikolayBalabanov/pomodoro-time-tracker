import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';
import { getHumanReadbleTime } from '../../utils/getHumanReadbleTime';

interface IBreakTimeBoard {
  breakTime: number;
}

export default function BreakTimeBoard({ breakTime }: IBreakTimeBoard) {
  const styles = 'flex p-[25px] justify-between w-full items-center';
  const contetn = getHumanReadbleTime(breakTime, true);
  // TODO: Вычислить контент
  // TODO: цвет бг и свг
  return (
    <StatBoard
      Icon={<Icon name={EIcons.breaks} />}
      content={contetn}
      title="Время на паузе"
      styles={styles}
    />
  );
}
