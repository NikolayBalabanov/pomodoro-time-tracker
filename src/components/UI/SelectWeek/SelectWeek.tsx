import React, { useEffect, useRef, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';
import SelectItem from './SelectItem';
import Icon, { EIcons } from '../Icon';

const selectFields = [
  { text: 'Эта неделя', value: 0 },
  { text: 'Прошедшая неделя', value: -1 },
  { text: '2 недели назад', value: -2 },
];

interface ISelectWeekProps {
  current: number;
  onChangeWeek: (e: number) => void;
}

export default function SelectWeek({ current, onChangeWeek }: ISelectWeekProps) {
  console.log('current', current);
  console.log('selectFields', selectFields);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const fieldsArr = selectFields.filter((el) => el.text !== selectFields[Math.abs(current)].text);
  const select = useRef<HTMLDivElement>(null);
  const isMounted = useRef(false);
  const handleClick = (target: number) => {
    onChangeWeek(target);
    setIsOpen(false);
  };
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
      <button
        type="button"
        className={`${
          isOpen ? 'border-b border-b-colorGrey' : 'border-b border-transparent'
        } select-item`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectFields[Math.abs(current)].text}</span>
        <Icon
          name={EIcons.arrow}
          styles={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <ul className="absolute top-full">
          {fieldsArr.map((el) => (
            <SelectItem key={uuidv1()} onChooseWeek={handleClick} value={el.value} text={el.text} />
          ))}
        </ul>
      )}
    </div>
  );
}
