import React from 'react';
import { Link } from 'react-router-dom';
import MenuSVG from '../../components/shared/svg/Menu.svg';
import './header.css';

const MainHeader = ({ handleToggle, header }) => {
  return (
    <header className='appHeader flex-row align'>
      <div className='flex-row align'>
        <div className='menuContainer' role='button' onClick={handleToggle}>
          <MenuSVG />
        </div>

        <h1 className='header'>{header}</h1>
      </div>
      <div className='profileImage flex-row centerAll'>
        <Link to='/profile'>
          <p>A</p>
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
