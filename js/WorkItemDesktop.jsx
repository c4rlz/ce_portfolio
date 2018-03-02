import React from 'react';
import desktop from '../public/img/macbookpro.png';

const WorkItemDesktop = props => {
  return (
    <div className="desktop-display">
      <img
        className="desktop"
        src={desktop}
        alt={`Desktop version of ${props.projectName}`}
      />
      <img
        className="desktop-screen"
        src={require(`../public/img/${props.screen}`)}
      />
    </div>
  );
};

export default WorkItemDesktop;
