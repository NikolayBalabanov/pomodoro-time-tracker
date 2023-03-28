import React from 'react';
import Icon, { EIcons } from './UI/Icon';

export default function Logo() {
  return (
    <>
      <Icon name={EIcons.logo} styles="mr-3" />
      <h1 className="logo-text">pomodoro_box</h1>
    </>
  );
}
