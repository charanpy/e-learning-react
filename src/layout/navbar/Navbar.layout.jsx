import React from 'react';
import ExploreSvg from '../../components/shared/svg/Explore.svg';
import FavoriteSVG from '../../components/shared/svg/Favorite.svg';
import MyCourseSVG from '../../components/shared/svg/MyCourse.svg';
import VideoSVG from '../../components/shared/svg/Video.svg';
import './navbar.css';

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
            <li className='navItem flex-row align lContainer'>
              <ExploreSvg className='navIcon' />
              Explore Courses
            </li>
            <li className='navItem  flex-row align lContainer'>
              <MyCourseSVG className='navIcon' />
              My Courses
            </li>
            <li className='navItem  flex-row align lContainer'>
              <VideoSVG className='navIcon' />
              Videos
            </li>
            <li className='navItem  flex-row align lContainer'>
              <FavoriteSVG className='navIcon' />
              Favorite
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
