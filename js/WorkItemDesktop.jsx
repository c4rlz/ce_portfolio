import React from 'react';
import desktop from '../public/img/macbook.png';

const WorkItemDesktop = props => {
  return (
    <img
      className="desktop-display"
      src={desktop}
      alt={`Desktop version of ${props.projectName}`}
    />
  );
};

export default WorkItemDesktop;
