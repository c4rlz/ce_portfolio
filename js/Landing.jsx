import React, { Component } from 'react';
import WheelReact from 'wheel-react';
import Nav from './Nav';
import Heading from './Heading';
import ProgressBar from './ProgressBar';

const Landing = () => {
  return (
    <div className="main-content landing">
      <Heading
        heading="Carly Ewasiuk"
        subheading="Front-End Developer & UX Enthusiast"
      />
    </div>
  );
};

export default Landing;
