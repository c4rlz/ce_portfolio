import React from 'react';
import SkillDescription from './SkillDescription';
const About = (
  { aboutData } // const { aboutData } = props;
) => (
  <main className="about-page">
    <section className="about-page-content">
      <div className="split right">
        <div className="content">
          <h1> Skills </h1>
          <SkillDescription
            title={<hr />}
            description="Javascript, React, Webpack, Redux, HTML5, SASS, Bootstrap"
          />
          <SkillDescription
            title={<hr />}
            description="Node.js, PHP, MySQL, Wordpress, Digital Ocean, AWS"
          />
          <SkillDescription
            title={<hr />}
            description="UX & UI Design, Typography, Fluid Design, Print Media, Adobe Creative Suite"
          />
          <div className="btn-container">
            <a
              href="https://drive.google.com/file/d/1t1hILjTqx_zIA-i8AbzwNXLegfaAck5A/view?usp=sharing"
              className="btn-white"
            >
              <span className="btn-interior" /> View Resume
            </a>
          </div>
        </div>
      </div>
      <div className="split left">
        <div className="content">
          <h1 className="uppercase"> Carly J. Ewasiuk </h1>
          <h4>
            Hello there, welcome to my site! This site is constantly under construction, as am I.
          </h4>
          {aboutData.map(item => (
            <SkillDescription
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>

    </section>

  </main>
);

export default About;
