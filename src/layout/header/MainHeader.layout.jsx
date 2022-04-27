import React from 'react';
import MenuSVG from '../../components/shared/svg/Menu.svg';
import SearchSVG from '../../components/shared/svg/Search.svg';
import './header.css';

const MainHeader = ({ handleToggle }) => {
  console.log('header');
  return (
    <header className='appHeader flex-row align'>
      <div className='menuContainer' role='button' onClick={handleToggle}>
        <MenuSVG />
      </div>
      <div className='searchContainer flex-row align'>
        <SearchSVG className='searchIcon' />
        <input className='searchInput' type='text' placeholder='Search...' />
      </div>
      <div className='profileImage flex-row centerAll'>
        <p>A</p>
      </div>
    </header>
  );
};

export default MainHeader;
