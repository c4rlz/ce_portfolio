import React from 'react';
import { NavLink } from 'react-router-dom';
// import logo from '';
const logo = require('../public/img/ce-logo.png');

const Nav = props => {
  return (
    <nav className="top-nav">
      <li id="logo">
        <a href="/">
          <img
            className="logo"
            src={logo}
            alt="carly ewasiuk, developer and ux designer"
          />
        </a>
      </li>
      <div className="nav-links">
        <li><NavLink to="/work"> works</NavLink></li>
        <li><NavLink to="/about">about</NavLink></li>
        <li><NavLink to="/contact">contact</NavLink></li>
      </div>
    </nav>
  );
};

export default Nav;
