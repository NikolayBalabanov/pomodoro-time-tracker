import React from 'react';
import Icon, { EIcons } from '../Icon';
import { ITaskDropDownItemProps } from '../../../types/dropDown';

export default function TaskDropDownItem({
  eventHandler,
  iconName,
  text,
  count,
}: ITaskDropDownItemProps) {
  return (
    <li>
      <button
        className="w-full py-[9px] px-[14px] flex items-center hover:bg-colorBg"
        disabled={iconName === EIcons.decrement && count <= 1 ? true : false}
        onClick={() => eventHandler()}
      >
        <Icon
          name={iconName}
          styles={`mr-2 ${
            iconName === EIcons.decrement && count <= 1 ? 'text-colorGrey' : 'text-colorGreen'
          }`}
        />
        <span className="text-base leading-[17px] text-colorTextGrey">{text}</span>
      </button>
    </li>
  );
}
