import React, { useEffect, useRef, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import SelectItem from './SelectItem';
import { ISelectWeekProps } from '../../../types/select';
import SelectCurrent from './SelectCurrent';

const selectFields = [
  { text: 'Эта неделя', value: 0 },
  { text: 'Прошедшая неделя', value: -1 },
  { text: '2 недели назад', value: -2 },
];

export default function SelectWeek({ current, onChangeWeek }: ISelectWeekProps) {
  const isMounted = useRef(false);
  const select = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (target: number) => {
    onChangeWeek(target);
    setIsOpen(false);
  };

  const fieldsArr = selectFields.filter((el) => el.text !== selectFields[Math.abs(current)].text);
  const fieldsNodes = fieldsArr.map((el) => (
    <SelectItem key={uuidv1()} onChooseWeek={handleClick} value={el.value} text={el.text} />
  ));

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (select.current && !event.composedPath().includes(select.current) && isMounted.current) {
        setIsOpen(false);
      }
      isMounted.current = true;
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);
  return (
    <div ref={select} className="relative">
      <SelectCurrent
        isOpen={isOpen}
        onSelect={() => setIsOpen(!isOpen)}
        text={selectFields[Math.abs(current)].text}
      />
      {isOpen && <ul className="absolute top-full">{fieldsNodes}</ul>}
    </div>
  );
}
