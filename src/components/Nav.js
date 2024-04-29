import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav className='nav-menu'>
      <Link to='/' ><img src="./Logo.svg" alt="logo" className='nav-logo'/></Link> 
      <ul className="nav-menu nav-link">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="">About</Link>
        </li>
        <li>
          <Link to="/">Menu</Link>
        </li>
        <li>
          <Link to="/booking">Reservation</Link>
        </li>
        <li>
          <Link to="/">Order Online</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
