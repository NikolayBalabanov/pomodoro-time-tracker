import React from 'react';
import ButtonColored from './ButtonColored';
import { useAppDispatch } from '../../hooks/redux';
import { startTimer, toggleTimer } from '../../redux/Slices/timerSlice';
import { incrementPauses } from '../../redux/Slices/statisticsSlice';
import { IButtonToggler } from '../../types/buttons';

enum ETogglerText {
  start = 'Старт',
  pause = 'Пауза',
  continue = 'Продолжить',
}

export default function ButtonToggler({ isStarted, isRunning }: IButtonToggler) {
  const dispatch = useAppDispatch();
  const handleStart = () => {
    dispatch(startTimer());
    dispatch(toggleTimer());
  };
  const handleToggle = () => {
    dispatch(toggleTimer());
    if (isRunning) dispatch(incrementPauses());
  };
  return (
    <>
      {!isStarted ? (
        <ButtonColored
          text={ETogglerText.start}
          callback={handleStart}
          color={'green'}
          type={'button'}
        />
      ) : isRunning ? (
        <ButtonColored
          text={ETogglerText.pause}
          callback={handleToggle}
          color={'green'}
          type={'button'}
        />
      ) : (
        <ButtonColored
          text={ETogglerText.continue}
          callback={handleToggle}
          color={'green'}
          type={'button'}
        />
      )}
    </>
  );
}
