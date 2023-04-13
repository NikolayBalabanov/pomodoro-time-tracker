import React, { useEffect, useState } from 'react';
import 'chart.js/auto';
import DayBoard from './DayBoard';
import WeekBoard from './WeekBoard';
import FocusBoard from './FocusBoard';
import PausesBoard from './PausesBoard';
import PomodoroCount from './PomodoroCount';
import BreakTimeBoard from './BreakTimeBoard';
import { EWeekDays } from '../../models/weekDays';
import todayWeekDay from '../../utils/todayWeekDay';
import SelectWeek from '../../components/UI/SelectWeek/SelectWeek';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setStatisticsByDay, setStatisticsByWeek } from '../../redux/Slices/statisticsSlice';

export default function StatisticsLayout() {
  const dispatch = useAppDispatch();
  const {
    statisticsByDay: { breakTimer, pauses, pomodoros, sessionTimer },
    statisticsByWeek,
  } = useAppSelector((state) => state.persistedReducer.statisticsSlice);
  const [currentWeek, setCurrentWeek] = useState<number>(0);
  const [currentDay, setCurrentDay] = useState<EWeekDays>(todayWeekDay());
  useEffect(() => {
    dispatch(setStatisticsByWeek(currentWeek));
    dispatch(setStatisticsByDay({ week: currentWeek, day: currentDay }));
  }, [currentDay, currentWeek, dispatch]);
  return (
    <>
      <div className="md:mb-[40px] mb-4 flex justify-between sm:flex-row flex-col">
        <h2 className="sm:mb-0 mb-2 font-bold text-2xl text-colorText dark:text-colorGrey">
          Ваша активность
        </h2>
        <SelectWeek current={currentWeek} onChangeWeek={setCurrentWeek} />
      </div>
      <div className="xl:grid grid-cols-12 xl:grid-rows-1 flex flex-col-reverse md:gap-8 gap-4">
        <div className="xl:col-span-3 col-span-12 flex xl:flex-col sm:flex-row flex-col justify-between md:gap-8 gap-4">
          <DayBoard day={currentDay} time={sessionTimer} />
          <PomodoroCount pomodoros={pomodoros} />
        </div>
        <div className="xl:col-span-9 col-span-12">
          <WeekBoard
            current={currentDay}
            weekData={statisticsByWeek}
            onDayChange={(day: EWeekDays) => setCurrentDay(day)}
          />
        </div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        <FocusBoard breakTime={breakTimer} sessionTime={sessionTimer} />
        <BreakTimeBoard breakTime={breakTimer} />
        <PausesBoard pauses={pauses} />
      </div>
    </>
  );
}
