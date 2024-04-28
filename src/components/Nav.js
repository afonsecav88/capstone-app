import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='nav-menu'>
      <img src="./Logo.svg" alt="logo" className='nav-logo'/>
      <ul className="nav-menu nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="/some/valid/uri">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservation</Link>
        </li>
        <li>
          <Link to="/some/valid/uri">Order Online</Link>
        </li>
        <li>
          <Link to="/some/valid/uri">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
