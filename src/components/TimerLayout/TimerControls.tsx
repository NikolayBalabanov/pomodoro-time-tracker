import React from 'react';
import ButtonStop from '../../components/UI/ButtonStop';
import ButtonToggler from '../../components/UI/ButtonToggler';
import { useAppSelector } from '../../hooks/redux';

export default function TimerControls() {
  const { isTimerRunning, isTimerStarted, stage } = useAppSelector(
    (state) => state.persistedReducer.timerSlice
  );
  return (
    <div className="flex gap-[25px]">
      <ButtonToggler isStarted={isTimerStarted} isRunning={isTimerRunning} />
      <ButtonStop
        text={'Стоп'}
        isRunning={isTimerRunning}
        isStarted={isTimerStarted}
        stage={stage}
      />
    </div>
  );
}
