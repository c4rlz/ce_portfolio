import React from 'react';
import Nav from './Nav';

const Layout = ({ children }) => (
  <section className="content-container">
    <section className="navigation">
      <Nav />
    </section>
    {children}
  </section>
);

export default Layout;
