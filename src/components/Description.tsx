import React, { useState } from 'react';
import ToggleDescr from './ToggleDescr';
import DescriptionItem from './DescriptionItem';

const descrItems = [
  'Напишите название текущей задачи',
  'Запустите таймер («помидор»)',
  'Работайте пока «помидор» не прозвонит',
  'Сделайте короткий перерыв (3-5 минут)',
  'Продолжайте работать «помидор» за «помидором», пока задача не будет выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).',
];

export default function Description() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const descrNodes = descrItems.map((item) => <DescriptionItem key={item} text={item} />);
  return (
    <div className={`relative xl:mt-0 mt-8 mb-6`}>
      <ToggleDescr isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <div className={`description ${isOpen ? 'h-[260px]' : 'h-0'}`}>
        <h2 className="text-2xl text-colorText mb-1 dark-mode dark:text-colorGrey">
          Ура! Теперь можно начать работать:
        </h2>
        <ul className="flex flex-col list-none">{descrNodes}</ul>
      </div>
    </div>
  );
}
