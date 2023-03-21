import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

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
          <svg
            className="mr-2 nav-svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" />
          </svg>
          <span>Статистика</span>
        </Link>
      </nav>
    </header>
  );
}
