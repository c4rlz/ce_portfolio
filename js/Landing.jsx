import React from 'react';
// import WheelReact from 'wheel-react';
// import Nav from './Nav';
import Heading from './Heading';
// import ProgressBar from './ProgressBar';

const Landing = () => {
  const description =
    'I`m crazy about JavaScript. I have a thirst for knowledge and growth. A creative & innovative mind. I seem to have a knack for finding bugs.';
  return (
    <div className="main-content landing">
      <div className="heading-description">
        <Heading
          heading="Carly Ewasiuk"
          subheading="Front-End Developer & UX Enthusiast"
          description={description}
        />
      </div>
    </div>
  );
};

export default Landing;
