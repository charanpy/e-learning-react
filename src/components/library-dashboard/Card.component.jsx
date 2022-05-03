import React from 'react';
import Button from '../shared/button/Button.component';
import './library-dashboard.css';

const Card = ({ className, header, count, Icon }) => {
  return (
    <Button className={`libraryCard flex-col`}>
      <div className={`iconContainer flex-row align justify ${className}`}>
        <Icon />
      </div>
      <p className='count'>{count}</p>
      <h1>{header}</h1>
    </Button>
  );
};

export default Card;
