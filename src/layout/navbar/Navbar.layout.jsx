import React from 'react';
import { Link, useLocation, useMatch, useResolvedPath } from 'react-router-dom';
import BooksSVG from '../../components/shared/svg/Books.svg';
import DashboardSVG from '../../components/shared/svg/Dashboard.svg';
import ExploreSvg from '../../components/shared/svg/Explore.svg';
import MyCourseSVG from '../../components/shared/svg/MyCourse.svg';
import VideoSVG from '../../components/shared/svg/Video.svg';
import { getItem } from '../../lib/token';
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

const isLibrary = (pathname) => pathname.startsWith('/library');

const CourseDashboardLinks = () => (
  <>
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
    {getItem('roleType') === '1' ? (
      <CustomLink to='/library'>
        <BooksSVG className='navIcon' />
        Library
      </CustomLink>
    ) : (
      ''
    )}
  </>
);

const LibraryDashboard = () => {
  return (
    <>
      <CustomLink to='/dashboard'>
        <DashboardSVG className='navIcon' />
        Dashboard
      </CustomLink>
      <CustomLink to='/library/books'>
        <BooksSVG className='navIcon' />
        Books
      </CustomLink>
    </>
  );
};

const Navbar = ({ className = '' }) => {
  const { pathname } = useLocation();

  return (
    <>
      <nav className={` ${className || 'appNav'}`}>
        <div className='navHeader flex-row centerAll'>
          <h1>{isLibrary(pathname) ? 'Library' : 'Courses'}</h1>
        </div>
        <div className='navListContainer'>
          <p className='appMenu lContainer'>MENU</p>
          <ul className='navList'>
            {isLibrary(pathname) ? (
              <LibraryDashboard />
            ) : (
              <CourseDashboardLinks />
            )}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
