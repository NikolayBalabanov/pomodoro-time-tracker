import React from 'react';

interface IIconProp {
  styles?: string;
}

export default function StatIcon({ styles }: IIconProp) {
  return (
    <svg
      className={styles}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" />
    </svg>
  );
}
