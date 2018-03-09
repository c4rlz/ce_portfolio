import React from 'react';
import desktop from '../public/img/macbookpro.png';

const WorkItemDesktop = props => (
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
    <h4 className="uppercase project-view">View the Project</h4>
  </div>
);

export default WorkItemDesktop;
