import React from 'react';
import DecrementIcon from './Icons/DecrementIcon';
import EditIcon from './Icons/EditIcon';
import IncrementIcon from './Icons/IncrementIcon';
import LogoIcon from './Icons/LogoIcon';
import RemoveIcon from './Icons/RemoveIcon';
import StatIcon from './Icons/StatIcon';

export enum EIcons {
  decrement = 'DecrementIcon',
  increment = 'IncrementIcon',
  edit = 'EditIcon',
  remove = 'RemoveIcon',
  logo = 'LogoIcon',
  stat = 'StatIcon',
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
    default:
      return <RemoveIcon styles={styles} />;
  }
}
