import React, { ReactNode } from 'react';

interface IStatBoard {
  title: string;
  styles: string;
  content: string;
  Icon: ReactNode;
}

export default function StatBoard({ styles, title, Icon, content }: IStatBoard) {
  return (
    <div className={styles}>
      <div className="text-colorText">
        <div className="mb-[20px] text-2xl font-bold">{title}</div>
        <div className="text-[64px] font-normal leading-[76px]">{content}</div>
      </div>
      {Icon}
    </div>
  );
}
