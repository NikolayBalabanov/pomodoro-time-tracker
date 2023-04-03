import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';

// interface IBreakTimeBoard {
//   // данные для расчета
// }

export default function BreakTimeBoard() {
  const styles = 'flex p-[25px] justify-between w-full items-center';
  // TODO: Вычислить контент
  // TODO: цвет бг и свг
  return (
    <StatBoard
      Icon={<Icon name={EIcons.breaks} />}
      content="9м"
      title="Время на паузе"
      styles={styles}
    />
  );
}
