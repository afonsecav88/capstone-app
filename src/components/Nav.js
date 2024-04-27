import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      <img src="./Logo.svg" alt="logo" />
      <ul className="nav-menu nav-link">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <Link to="">ABOUT</Link>
        </li>
        <li>
          <Link to="/some/valid/uri">MENU</Link>
        </li>
        <li>
          <Link to="/booking">RESERVATION</Link>
        </li>
        <li>
          <Link to="/some/valid/uri">ORDER ONLINE</Link>
        </li>
        <li>
          <Link to="/some/valid/uri"> LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};
