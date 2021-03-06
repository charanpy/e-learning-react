import React from 'react';

const DownArrowSVG = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height='24px'
      viewBox='0 0 24 24'
      width='24px'
      style={{ transform: 'rotate(0deg)', fill: 'var(--light-600)' }}
    >
      <path d='M24 24H0V0h24v24z' fill='none' opacity='.87'></path>
      <path d='M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z'></path>
    </svg>
  );
};

export default DownArrowSVG;
