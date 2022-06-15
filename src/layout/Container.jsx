import React, { useState } from 'react';
import DashboardHeader from './header/MainHeader.layout';
import MobileNav from './navbar/MobileNav.layout';
import Navbar from './navbar/Navbar.layout';

const Container = ({ header, showNav }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      {showNav && <Navbar />}
      <DashboardHeader handleToggle={handleToggle} header={header} />
      <MobileNav open={open} handleToggle={handleToggle} />
    </>
  );
};

export default Container;
