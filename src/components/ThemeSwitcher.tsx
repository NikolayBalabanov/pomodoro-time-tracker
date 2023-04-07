import React from 'react';
import { toggleTheme } from '../redux/Slices/themeSlice';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import Icon, { EIcons } from './UI/Icon';

export default function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const { isDark } = useAppSelector((state) => state.persistedReducer.themeSlice);
  const root = window.document.documentElement as HTMLElement;
  isDark ? root.classList.add('dark') : root.classList.remove('dark');
  const onThemeChange = () => {
    dispatch(toggleTheme());
  };
  return (
    <label className="relative block p-[2px] h-[34px] w-[64px] bg-colorTextGrey rounded-2xl text-black cursor-pointer transition-colors duration-500 dark:text-white">
      <input className="hidden" type="checkbox" name="" id="" onClick={() => onThemeChange()} />
      <Icon
        name={EIcons.pomodoro}
        styles={`absolute block h-[30px] w-[30px] top-[2px] rounded-full transition-all duration-500 ${
          isDark ? 'translate-x-full' : ''
        }`}
      />
    </label>
  );
}
