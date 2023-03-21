import React from 'react';
import Menu from '../components/Menu';

export default function Main() {
  return (
    <main className="pr-20 pl-20 py-[100px]">
      <div className="flex items-center">
        <Menu />
        <div>Таймер</div>
      </div>
    </main>
  );
}
