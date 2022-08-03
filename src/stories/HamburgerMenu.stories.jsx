import React, { useState } from 'react';
import HamburgerMenu from '../components/Menu/HamburgerMenu';

export default {
  title: 'Components/Menu/HamburgerMenu',
  component: HamburgerMenu,
  argTypes: {
    isOpen: {
      options: [true, false],
      control: { type: 'boolean' },
    },
  },
};

export const Hamburger = ({ isOpen }) => {
  const [toggleOpen, setToggleOpen] = useState(isOpen);

  const handleClick = () => {
    setToggleOpen(!toggleOpen);
  };
  const closeMenu = () => {
    setToggleOpen(false);
  };

  return (
    <HamburgerMenu
      isOpen={isOpen}
      toggleOpen={toggleOpen}
      handleClick={handleClick}
      closeMenu={closeMenu}
    />
  );
};

Hamburger.args = {
  isOpen: false,
};
