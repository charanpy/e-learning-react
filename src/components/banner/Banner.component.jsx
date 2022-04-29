import React from 'react';
import { useUser } from '../../context/UserProvider';
import './banner.css';

const Banner = () => {
  const { user } = useUser();
  return (
    <section className='banner'>
      <h1>Welcome back {user?.name}...</h1>
      <p>
        Learn anytime, anywhere. Boost your skills with flexible online courses
      </p>
    </section>
  );
};

export default Banner;
