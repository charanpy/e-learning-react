import React from 'react';
import notFoundImg from '../../assets/notFound.jpg';

const NotFound = () => {
  return (
    <div className='flex-row centerAll container'>
      <img src={notFoundImg} alt='not found' />
    </div>
  );
};

export default NotFound;
