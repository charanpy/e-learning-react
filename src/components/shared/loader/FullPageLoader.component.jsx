import React from 'react';
import Loader from './Loader.component';
import './loader.css';

const FullPageLoader = () => {
  return (
    <div className='fullPageLoader'>
      <Loader />
      <h1 className='text-white text-xl'>Loading...</h1>
    </div>
  );
};

export default FullPageLoader;
