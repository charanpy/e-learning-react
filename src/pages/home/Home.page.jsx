import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  console.log('Home');
  return (
    <h1>
      <Link to='/dashboard'>Dashboard</Link>
    </h1>
  );
};

export default HomePage;
