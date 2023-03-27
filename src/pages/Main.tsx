import TimerLayout from '../components/TimerLayout/TimerLayout';
import React from 'react';
import Menu from '../components/Menu';

export default function Main() {
  return (
    <main className="pr-20 pl-20 py-[100px]">
      <div className="flex items-center gap-[16px]">
        <Menu />
        <TimerLayout />
      </div>
    </main>
  );
}
