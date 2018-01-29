import React from 'react';
import SkillDescription from './SkillDescription';

const About = props => {
  // console.log(props.aboutData);
  const { aboutData } = props;
  // Write the data in json and bring in?
  return (
    <main className="about-page">
      <section className="about-page-content">

        <div className="split">
          <img src="" />
          <div className="skills">
            <h2> My repertoire of code things </h2>
          </div>
        </div>
        <div className="split">
          <h1> Hello there, </h1>
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
