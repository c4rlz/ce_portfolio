import React from 'react';
// import reactLogo from '../public/img/react-logo.png';

const TechnologiesUsed = props => {
  const showTechnologies = technologyArray => {
    const technologies = technologyArray.map(technology => {
      const imageUrl = require(`../public/img/${technology.toLowerCase()}-logo.png`);
      return (
        <div className="technology-item" key={technology}>
          <img
            className="technology-logo"
            src={imageUrl}
            alt={`${technology} logo`}
          />
          <p className="center-align"> {technology} </p>
        </div>
      );
    });
    return <div className="technology-logos">{technologies}</div>;
  };
  return (
    <div className="technology-section">
      <div className="line" />
      <h4 className="uppercase">Built With The Following Technologies</h4>
      {showTechnologies(props.technology)}
      <div className="line" />
    </div>
  );
};

export default TechnologiesUsed;
