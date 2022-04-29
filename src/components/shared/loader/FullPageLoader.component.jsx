import React from 'react';
import Loader from './Loader.component';
import './loader.css';

const FullPageLoader = ({ text }) => {
  return (
    <div className='fullPageLoader container flex-col align justify'>
      <Loader />
      <h1 className='text-white text-xl'>{text || 'Loading...'}</h1>
    </div>
  );
};

export default FullPageLoader;
