import React from 'react';

const Nav = props => {
  return (
    <nav className="top-nav">
      <li id="logo"><a href="/">ce</a></li>
      <div className="nav-links">
        <li><a href="/work">works</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/contact">contact</a></li>
      </div>
    </nav>
  );
};

export default Nav;
