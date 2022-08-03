import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { GrClose } from 'react-icons/gr';
import { GiHamburgerMenu } from 'react-icons/gi';

import './hamburgermenu.css';

const HamburgerMenu = ({ isOpen, toggleOpen, handleClick, closeMenu }) => {
  console.log('is open component >>> ', isOpen);
  console.log('toggle >> ', toggleOpen);
  // render
  return (
    <nav className='sui-nav-bar'>
      <button className='hamburger' onClick={handleClick}>
        {isOpen && toggleOpen ? (
          <GrClose className='sui-menu-icon' />
        ) : (
          <GiHamburgerMenu className='sui-menu-icon' />
        )}
      </button>
      <ul className={!isOpen && !toggleOpen ? 'sui-menu' : 'sui-menu showMenu'}>
        <li>
          <a onClick={() => closeMenu()} className='menuItem' href='#'>
            Home
          </a>
        </li>
        <li>
          <a onClick={() => closeMenu()} className='menuItem' href='#'>
            Profile
          </a>
        </li>
        <li>
          <a onClick={() => closeMenu()} className='menuItem' href='#'>
            About
          </a>
        </li>
        <li>
          <a onClick={() => closeMenu()} className='menuItem' href='#'>
            Contacts
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HamburgerMenu;
