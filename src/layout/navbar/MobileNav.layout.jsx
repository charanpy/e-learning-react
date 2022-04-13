import React from 'react';
import ArrowLeftSVG from '../../components/shared/svg/ArrowLeft.svg';
import Slider from '../../components/slider/Slider.component';
import Navbar from './Navbar.layout';

const MobileNav = ({ open, handleToggle }) => {
  return (
    <>
      <Slider open={open} className='slider'>
        <Navbar className='mobileNav' />
        <ArrowLeftSVG className='closeIcon' onClick={handleToggle} />
      </Slider>
    </>
  );
};

export default MobileNav;
