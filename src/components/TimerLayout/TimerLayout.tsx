import React from 'react';
import ButtonColored from '../../components/UI/ButtonColored';
import ButtonStop from '../../components/UI/ButtonStop';
import TimerDisplay from './TimerDisplay';
import TimerHeader from './TimerHeader';

export default function TimerLayout() {
  return (
    <div className="w-3/5">
      <TimerHeader count={1} stage={'active'} title={'Текущая задача'} />
      <div className="flex flex-col items-center bg-colorBg pt-[70px] px-10 pb-[107px]">
        <TimerDisplay time={[25, 0]} stage={'active'} />
        <h3 className="mb-8">
          <span className="text-colorTextGrey">Задача {1} -</span> {'Текущая задача'}
        </h3>
        <div className="flex gap-[25px]">
          <ButtonColored text={'Пауза'} color={'green'} type={'button'} />
          <ButtonStop text={'Стоп'} isDisabled={false} />
        </div>
      </div>
    </div>
  );
}
