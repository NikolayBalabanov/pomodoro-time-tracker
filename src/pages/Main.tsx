import TimerLayout from '../components/TimerLayout/TimerLayout';
import React from 'react';
import Menu from '../components/Menu';

export default function Main() {
  return (
    <main className="lg:px-20 xl:py-[100px] pr-4 pl-4 py-[30px]">
      <div className="flex items-center gap-[16px] max-xl:flex-col-reverse">
        <Menu />
        <TimerLayout />
      </div>
    </main>
  );
}
