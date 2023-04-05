import React from 'react';
import DescriptionItem from './DescriptionItem';

const descrItems = [
  'Выберите категорию и напишите название текущей задачи',
  'Запустите таймер («помидор»)',
  'Работайте пока «помидор» не прозвонит',
  'Сделайте короткий перерыв (3-5 минут)',
  'Продолжайте работать «помидор» за «помидором», пока задача не будет выполнена. Каждые 4 «помидора» делайте длинный перерыв (15-30 минут).',
];

export default function Description() {
  return (
    <div className="mb-6 flex flex-col">
      <h2 className="text-2xl text-colorText mb-1 dark-mode dark:text-colorGrey">
        Ура! Теперь можно начать работать:
      </h2>
      <ul className="flex flex-col list-none">
        {descrItems.map((item) => (
          <DescriptionItem key={item} text={item} />
        ))}
      </ul>
    </div>
  );
}
