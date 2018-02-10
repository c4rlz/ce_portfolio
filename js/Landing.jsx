import React from 'react';
// import WheelReact from 'wheel-react';
// import Nav from './Nav';
import Heading from './Heading';
// import ProgressBar from './ProgressBar';

const Landing = () => {
  const description =
    "I enjoy all things JavaScript. I'm constantly learning new things and questioning everything. I am a problem solver and I have a knack for finding bugs.";
  return (
    <div className="main-content landing">
      <Heading
        heading="Carly Ewasiuk"
        subheading="Front-End Developer & UX Enthusiast"
        description={description}
      />
    </div>
  );
};

export default Landing;
