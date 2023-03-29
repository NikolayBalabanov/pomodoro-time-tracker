import React from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { startTimer, toggleTimer } from '../../redux/Slices/timerSlice';
import ButtonColored from './ButtonColored';

enum ETogglerText {
  start = 'Старт',
  pause = 'Пауза',
  continue = 'Продолжить',
}

interface IButtonToggler {
  isStarted: boolean;
  isRunning: boolean;
}

export default function ButtonToggler({ isStarted, isRunning }: IButtonToggler) {
  const dispatch = useAppDispatch();
  const handleStart = () => {
    dispatch(startTimer());
    dispatch(toggleTimer());
  };
  const handleToggle = () => {
    dispatch(toggleTimer());
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
