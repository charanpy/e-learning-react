import React from 'react';
import Loader from './Loader.component';

const LoaderIndicator = () => {
  return (
    <div className='row justify' style={{ width: '100vw' }}>
      <Loader />
    </div>
  );
};

export default LoaderIndicator;
