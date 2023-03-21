import React from 'react';

interface IDescriptionItemProps {
  text: string;
}

export default function DescriptionItem({ text }: IDescriptionItemProps) {
  return <li className="list-item text-base leading-8 pl-[23px]">{text}</li>;
}
