import React, { useState } from 'react';
import DashboardHeader from './header/MainHeader.layout';
import MobileNav from './navbar/MobileNav.layout';
import Navbar from './navbar/Navbar.layout';

const Container = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Navbar />
      <DashboardHeader handleToggle={handleToggle} />
      <MobileNav open={open} handleToggle={handleToggle} />
    </>
  );
};

export default Container;
