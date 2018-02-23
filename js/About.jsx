import React from 'react';
import SkillDescription from './SkillDescription';
// import eyeball from '../public/img/eyeball-new.jpg';
import stack from '../public/img/stack.png';

const About = props => {
  // console.log(props.aboutData);
  const { aboutData } = props;
  // Write the data in json and bring in?
  return (
    <main className="about-page">
      <section className="about-page-content">
        <div className="split right">
          <h1> Skills </h1>
          <SkillDescription
            title={<hr />}
            description="Javascript, React, Webpack, HTML5, SASS, Bootstrap"
          />
          <SkillDescription
            title={<hr />}
            description="Node.js, PHP, MySQL, Wordpress"
          />
          <SkillDescription
            title={<hr />}
            description="UX & UI Design, Typography, Fluid Design, Print Media"
          />
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/1oRmpsCeApCrCArzsuB_oxTocrw6WQFwQ/view?usp=sharing"
              className="btn-white"
            >
              <span className="btn-interior" /> View Resume
            </a>
          </div>
        </div>
        <div className="split left">

          <h1> Hello there! </h1>
          <h4> My name's Carly Ewasiuk </h4>
          {aboutData.map(item => (
            <SkillDescription
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </section>

    </main>
  );
};

export default About;
