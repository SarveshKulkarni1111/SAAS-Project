// Navbar.js

import React from 'react';
import "./LoggedInNav.css";
import MavioLogo from "./MavioLogo1.png"

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img
        src={MavioLogo}
        alt="Company Logo"
        className='logo'
      />
      <input
        type="text"
        placeholder="Search..."
        className='searchBar'
      />
    </nav>
  );
};

export default Navbar;
