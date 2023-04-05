import StatisticsLayout from '../components/StatisticsLayout/StatisticsLayout';
import React from 'react';

export default function Stat() {
  return (
    <main className="pr-20 pl-20 py-[100px]">
      <div className="flex flex-col gap-[16px]">
        <StatisticsLayout />
      </div>
    </main>
  );
}
