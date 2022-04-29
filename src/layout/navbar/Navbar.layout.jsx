import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import DashboardSVG from '../../components/shared/svg/Dashboard.svg';
import ExploreSvg from '../../components/shared/svg/Explore.svg';
import FavoriteSVG from '../../components/shared/svg/Favorite.svg';
import MyCourseSVG from '../../components/shared/svg/MyCourse.svg';
import VideoSVG from '../../components/shared/svg/Video.svg';
import './navbar.css';

const CustomLink = ({ children, to = '/video' }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <Link to={to}>
      <li
        className={`navItem flex-row align lContainer ${match ? 'active' : ''}`}
      >
        {children}
      </li>
    </Link>
  );
};

const Navbar = ({ className = '' }) => {
  return (
    <>
      <nav className={` ${className || 'appNav'}`}>
        <div className='navHeader flex-row centerAll'>
          <h1>Courses</h1>
        </div>
        <div className='navListContainer'>
          <p className='appMenu lContainer'>MENU</p>
          <ul className='navList'>
            <CustomLink to='/dashboard'>
              <DashboardSVG className='navIcon' />
              Dashboard
            </CustomLink>
            <CustomLink to='/explore'>
              <ExploreSvg className='navIcon' />
              Explore Courses
            </CustomLink>
            <CustomLink to='/my-course'>
              <MyCourseSVG className='navIcon' />
              My Courses
            </CustomLink>
            <CustomLink>
              <VideoSVG className='navIcon' />
              Videos
            </CustomLink>
            <CustomLink>
              <FavoriteSVG className='navIcon' />
              Favorite
            </CustomLink>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
