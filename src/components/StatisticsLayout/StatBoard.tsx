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
        <div className="mb-[20px] md:text-2xl text-xl font-bold">{title}</div>
        <div className="lg:text-[64px] text-4xl font-normal lg:leading-[76px] leading-8">
          {content}
        </div>
      </div>
      {Icon}
    </div>
  );
}
