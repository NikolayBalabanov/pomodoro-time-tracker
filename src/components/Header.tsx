import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Icon, { EIcons } from './UI/Icon';

export default function Header() {
  return (
    <header className="pr-20 pl-20 shadow-lg">
      <nav className="flex items-center justify-between pt-4 pb-4 ">
        <Link className="nav-link flex items-center" to="/" aria-label="to main page">
          <Logo />
        </Link>
        <Link
          className="nav-link flex items-center"
          to="/statistics"
          aria-label="to statistics page"
        >
          <Icon name={EIcons.stat} styles="mr-2 nav-svg" />
          <span>Статистика</span>
        </Link>
      </nav>
    </header>
  );
}
