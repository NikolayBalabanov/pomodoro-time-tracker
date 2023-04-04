import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import DayBoard from './DayBoard';
import FocusBoard from './FocusBoard';
import PausesBoard from './PausesBoard';
import PomodoroCount from './PomodoroCount';
import BreakTimeBoard from './BreakTimeBoard';
import { TWeekDays } from '../../models/weekDays';
import todayWeekDay from '../../utils/todayWeekDay';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setStatisticsByDay, setStatisticsByWeek } from '../../redux/Slices/statisticsSlice';
import WeekBoard from './WeekBoard';

export default function StatisticsLayout() {
  const dispatch = useAppDispatch();
  const {
    statisticsByDay: { breakTimer, pauses, pomodoros, sessionTimer },
    statisticsByWeek,
  } = useAppSelector((state) => state.persistedReducer.statisticsSlice);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [currentDay, setCurrentDay] = useState<TWeekDays>(1);
  useEffect(() => {
    // dispatch(setStatisticsByWeek(currentWeek));
    dispatch(setStatisticsByDay({ week: currentWeek, day: currentDay }));
  }, [currentDay, currentWeek, dispatch]);
  return (
    <>
      <div className="mb-[40px] flex justify-between">
        <h2 className="font-bold text-2xl text-colorText">Ваша активность</h2>
        <span>Эта неделя TODO</span>
      </div>
      <div className="grid grid-cols-12 gap-8">
        <div className="col-span-3 flex flex-col gap-8">
          <DayBoard day={currentDay} time={sessionTimer} />
          <PomodoroCount pomodoros={pomodoros} />
        </div>
        <div className="col-span-9">
          <WeekBoard
            current={currentDay}
            weekData={statisticsByWeek}
            onDayChange={(day: TWeekDays) => setCurrentDay(day)}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <FocusBoard breakTime={breakTimer} sessionTime={sessionTimer} />
        <BreakTimeBoard breakTime={breakTimer} />
        <PausesBoard pauses={pauses} />
      </div>
    </>
  );
}
