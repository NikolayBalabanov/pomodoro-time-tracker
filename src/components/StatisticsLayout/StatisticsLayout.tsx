import React from 'react';
import DayBoard from './DayBoard';
import PomodoroCount from './PomodoroCount';
import FocusBoard from './FocusBoard';
import BreakTimeBoard from './BreakTimeBoard';
import PausesBuard from './PausesBuard';

export default function StatisticsLayout() {
  return (
    <>
      <div className="mb-[40px] flex justify-between">
        <h2 className="font-bold text-2xl text-colorText">Ваша активность</h2>
        <span>Эта неделя TODO</span>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3 flex flex-col gap-8">
          <DayBoard day={0} time={0} />
          <PomodoroCount pomodoros={3} />
        </div>
        <div className="col-span-9">Тут будет статистика за неделю</div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <FocusBoard />
        <BreakTimeBoard />
        <PausesBuard pauses={0} />
      </div>
    </>
  );
}
