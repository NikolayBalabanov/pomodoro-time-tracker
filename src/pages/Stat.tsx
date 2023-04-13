import StatisticsLayout from '../components/StatisticsLayout/StatisticsLayout';
import React from 'react';

export default function Stat() {
  return (
    <main className="lg:px-20 xl:py-[100px] pr-4 pl-4 py-[30px]">
      <div className="flex flex-col md:gap-8 gap-4">
        <StatisticsLayout />
      </div>
    </main>
  );
}
