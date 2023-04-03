import React from 'react';
import StatBoard from './StatBoard';
import Icon, { EIcons } from '../../components/UI/Icon';

// interface IFocusBoard {
//   // данные для расчета
// }

export default function FocusBoard() {
  const styles = 'flex p-[25px] justify-between w-full items-center';
  // TODO: Вычислить контент
  return (
    <StatBoard Icon={<Icon name={EIcons.focus} />} content="35%" title="Фокус" styles={styles} />
  );
}
