import React from 'react';
import { IDescriptionItemProps } from '../types/descriptionItem';

export default function DescriptionItem({ text }: IDescriptionItemProps) {
  return (
    <li className="descr-item text-base leading-8 pl-[23px] dark-mode dark:text-colorGrey">
      {text}
    </li>
  );
}
