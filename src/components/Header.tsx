import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon, { EIcons } from './UI/Icon';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="lg:px-20 pr-4 pl-4 shadow-lg dark:bg-gray-700 transition-colors duration-500">
      <nav className="flex items-center justify-between pt-4 pb-4 ">
        <Link className="nav-link flex items-center" to="/" aria-label="to main page">
          <Logo />
        </Link>
        <ThemeSwitcher />
        <Link
          className="nav-link flex items-center"
          to="/statistics"
          aria-label="to statistics page"
        >
          <Icon
            name={EIcons.stat}
            styles="sm:w-[16px] sm:h-[16px] h-[25px] w-[25px] mr-2 nav-svg"
          />
          <span className="sm:block hidden">Статистика</span>
        </Link>
      </nav>
    </header>
  );
}
