import React from 'react';
import DecrementIcon from './Icons/DecrementIcon';
import EditIcon from './Icons/EditIcon';
import IncrementIcon from './Icons/IncrementIcon';
import LogoIcon from './Icons/LogoIcon';
import RemoveIcon from './Icons/RemoveIcon';
import StatIcon from './Icons/StatIcon';
import PomodoroEmptyIcon from './Icons/PomodoroEmptyIcon';
import PomodoroIcon from './Icons/PomodoroIcon';
import FocusIcon from './Icons/FocusIcon';
import BreaksIcon from './Icons/BreaksIcon';
import PausesIcon from './Icons/PausesIcon';
import ArrowIcon from './Icons/ArrowIcon';

export enum EIcons {
  decrement = 'DecrementIcon',
  increment = 'IncrementIcon',
  edit = 'EditIcon',
  remove = 'RemoveIcon',
  logo = 'LogoIcon',
  stat = 'StatIcon',
  pomodoroEmpty = 'PomadoroEmpty',
  pomodoro = 'Pomadoro',
  focus = 'Focus',
  breaks = 'Breaks',
  pauses = 'Pauses',
  arrow = 'Arrow',
}

interface IIconProps {
  name: EIcons;
  styles?: string;
}

export default function Icon(props: IIconProps) {
  const { name, styles } = props;
  switch (name) {
    case 'DecrementIcon':
      return <DecrementIcon styles={styles} />;
    case 'IncrementIcon':
      return <IncrementIcon styles={styles} />;
    case 'EditIcon':
      return <EditIcon styles={styles} />;
    case 'RemoveIcon':
      return <RemoveIcon styles={styles} />;
    case 'LogoIcon':
      return <LogoIcon styles={styles} />;
    case 'StatIcon':
      return <StatIcon styles={styles} />;
    case 'PomadoroEmpty':
      return <PomodoroEmptyIcon styles={styles} />;
    case 'Pomadoro':
      return <PomodoroIcon styles={styles} />;
    case 'Focus':
      return <FocusIcon styles={styles} />;
    case 'Breaks':
      return <BreaksIcon styles={styles} />;
    case 'Pauses':
      return <PausesIcon styles={styles} />;
    case 'Arrow':
      return <ArrowIcon styles={styles} />;
    default:
      return <RemoveIcon styles={styles} />;
  }
}
