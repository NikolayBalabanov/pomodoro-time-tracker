import React from 'react';
import NavBar from './NavBar';

export default function Header() {
  return (
    <header className="lg:px-20 pr-4 pl-4 shadow-lg dark:bg-gray-700 transition-colors duration-500">
      <NavBar />
    </header>
  );
}
