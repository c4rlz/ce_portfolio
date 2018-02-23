import React from 'react';
import { Link } from 'react-router-dom';
// import WheelReact from 'wheel-react';
// import Nav from './Nav';
import Heading from './Heading';
// import ProgressBar from './ProgressBar';

const Landing = () => {
  const description =
    'I`m crazy about JavaScript. I have a thirst for knowledge and growth. A creative & innovative mind. I seem to have a knack for finding bugs.';
  return (
    <div className="main-content landing">
      <section className="gradient-overlay">
        <div className="heading-description">
          <Heading
            heading="Carly Ewasiuk"
            subheading="Front-End Developer & UX Enthusiast"
            description={description}
          />
          <Link className="btn-white home" to="/work"> View My Work </Link>
        </div>
      </section>
    </div>
  );
};

export default Landing;
