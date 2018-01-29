import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => {
  return (
    <nav className="top-nav">
      <li id="logo"><a href="/">ce</a></li>
      <div className="nav-links">
        <li><NavLink to="/work"> works</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </div>
    </nav>
  );
};

export default Nav;
