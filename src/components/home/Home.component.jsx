import React from 'react';
import './home.css';
import courseImage from '../../assets/home-icon.jpg';
import Banner from '../../assets/banner.png';
import icon1 from '../../assets/function1.jpg';
import icon2 from '../../assets/function2.jpg';
import icon3 from '../../assets/function3.jpg';
import Button from '../shared/button/Button.component';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserProvider';

const HomeComponent = () => {
  const { user } = useUser();
  return (
    <div className='main-container'>
      <nav className='flex-row justify-between_home nav_home'>
        {/* logo content */}
        <div className='flex-row align-center_home'>
          <img alt='course' src={courseImage} loading='lazy' decoding='async' />
          {/* title section */}
          <div style={{ marginLeft: '1rem' }}>
            <p className='fs-1_home title_home'>E Learning</p>
            <p>Communicate. Collaborate. Create.</p>
          </div>
        </div>
        {/* nav links */}
        <div className='nav-links'>
          <ul className='flex-row ul_home'>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              <Link to='/explore'>Courses</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              {!user?.email && (
                <Link to='/auth'>
                  <Button className='login-btn_home'>LOGIN</Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
      {/* main page content */}
      <div
        className='main-content-content flex-row align-center_home'
        style={{ height: '100%' }}
      >
        {/* banner */}
        <div className='w-100 w-lg-50 banner_home'>
          <div>
            <img
              src={Banner}
              alt='Home Banner'
              className='w-100'
              loading='lazy'
              decoding='async'
            />
          </div>
        </div>
        {/* content */}
        <div className='w-100 w-lg-50 flex-row justify-center_home'>
          <div className='flex-column_home'>
            <p className='content-text_home'>Communicate.</p>
            <p className='content-text_home'>Collaborate Create.</p>
            <div style={{ marginTop: '3rem' }}>
              <p className='content-text-secondary_home'>
                WeDu provides an effective and powerful
              </p>
              <p className='content-text-secondary_home'>
                way to manage your projects
              </p>
            </div>
            {/* dashboad btn */}
            <div className='dash_btn_1' style={{ marginTop: '3rem' }}>
              {!user?.email ? (
                <Link to='/auth'>
                  <Button className='login-btn_home'>LOGIN</Button>
                </Link>
              ) : (
                <Link to='/dashboard'>
                  <Button className='dash-btn_home'>Dashboard</Button>
                </Link>
              )}
            </div>

            <div className='dash_btn' style={{ marginTop: '3rem' }}>
              <Link to='/dashboard'>
                <Button className='dash-btn_home'>Dashboard</Button>
              </Link>
            </div>
            {/* icons */}
            <div className='text-center' style={{ marginTop: '6rem' }}>
              <div className='flex-row justify-around_home'>
                <div className='flex-row align-center_home'>
                  <img
                    src={icon1}
                    alt='Icon'
                    className='icon_img'
                    loading='lazy'
                    decoding='async'
                  />
                  <span
                    style={{
                      fontSize: '1.4rem',
                      margin: '1rem',
                    }}
                  >
                    Speed & Security
                  </span>
                </div>
                <div className='flex-row align-center_home'>
                  <img
                    src={icon2}
                    alt='Icon'
                    className='icon_img'
                    loading='lazy'
                    decoding='async'
                  />
                  <span
                    style={{
                      fontSize: '1.4rem',
                      margin: '1rem',
                    }}
                  >
                    Flexibility
                  </span>
                </div>
                <div className='flex-row align-center_home'>
                  <img
                    src={icon3}
                    alt='Icon'
                    className='icon_img'
                    loading='lazy'
                    decoding='async'
                  />
                  <span
                    style={{
                      fontSize: '1.4rem',
                      margin: '1rem',
                    }}
                  >
                    Better Collaboration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
