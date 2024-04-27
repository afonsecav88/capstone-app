import React from 'react';

export const Nav = () => {
  return (
    <nav>      
      <ul className="nav-menu nav-link">
        <li>
          <a href="index.html"> HOME</a>
        </li>
        <li>
          <a  href="/some/valid/uri"> ABOUT</a>
        </li>
        <li>
          <a   href="/some/valid/uri"> MENU</a>
        </li>
        <li>
          <a  href="/some/valid/uri"> RESERVATION</a>
        </li>
        <li>
          <a  href="/some/valid/uri"> ORDER ONLINE</a>
        </li>
        <li>
          <a  href="/some/valid/uri"> LOGIN</a>
        </li>
      </ul>
    </nav>
  );
};
