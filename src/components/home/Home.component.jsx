import React from 'react';
import './home.css';
import courseImage from '../../assets/home-icon.jpg';
import courseDetailsImage from '../../assets/banner.jpg';
import function1 from '../../assets/function1.jpg';
import Button from '../shared/button/Button.component';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

const HomeComponent = () => {
  const { user } = useUser();
  return (
    <div className='home'>
      <div className='navbar'>
        <div className='leftnav'>
          <div className='courseImg'>
            <img
              alt='course'
              width='40px'
              height='40px'
              className='courseDetailsImage'
              src={courseImage}
            />
          </div>
          <div className='title'>
            <h1 className='header'>E-LEARNING</h1>
            <p className='para'>learn.communication.collaborate</p>
          </div>
        </div>

        <div className='rightnav'>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/explore'>Courses</Link>
          <Link to='/about'>About</Link>
          {!user?.email && (
            <Link to='/auth'>
              <Button className='button'>LOGIN</Button>
            </Link>
          )}
        </div>
      </div>
      .
      <div>
        <div className='bannerHome'>
          <div className='midname'>
            <div>
              <h1 className='head'>Communication.</h1>
            </div>
            <div>
              <h1 className='head'>Collaborative.Create.</h1>
            </div>
            <div>
              <p className='bannerpara'>
                WeDu provides an effective and powerful way to manage your
                projects
              </p>
            </div>
            <div>
              <Link to={user?.email ? '/dashboard' : '/auth'}>
                <Button className='bannerbutton'>
                  {user?.email ? 'Dashboard' : 'Get Started'}
                </Button>
              </Link>
            </div>
            <div className='capable'>
              <div className='functions'>
                <img
                  alt='function'
                  width='40px'
                  height='40px'
                  src={function1}
                />
                <p className='function-1'>speed & security</p>
              </div>
              <div className='functions'>
                <img
                  alt='function'
                  width='40px'
                  height='40px'
                  src={function1}
                />
                <p className='function-1'>speed & security</p>
              </div>
              <div className='functions'>
                <img
                  width='40px'
                  height='44px'
                  src={function1}
                  alt='function'
                />
                <p className='function-1'>speed & security</p>
              </div>
            </div>
          </div>

          <div>
            <img
              className='bannerimg'
              width='400px'
              height='300px'
              src={courseDetailsImage}
              alt='banner'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
